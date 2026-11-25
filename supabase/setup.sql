begin;

create table if not exists public.borepoint_admins (
  user_id uuid primary key references auth.users on delete cascade
);

create table if not exists public.borepoint_content (
  id integer primary key check (id = 1),
  revision integer not null default 0,
  content jsonb check (content is null or (
    jsonb_typeof(content) = 'object'
    and content ?& array['gallery', 'reels', 'prices']
    and jsonb_typeof(content -> 'gallery') = 'array'
    and jsonb_typeof(content -> 'reels') = 'array'
    and jsonb_typeof(content -> 'prices') = 'object'
  ))
);

insert into public.borepoint_content (id) values (1) on conflict do nothing;

alter table public.borepoint_admins enable row level security;
alter table public.borepoint_content enable row level security;
revoke all on public.borepoint_admins, public.borepoint_content from anon, authenticated;
grant select on public.borepoint_admins to authenticated;
grant select on public.borepoint_content to anon, authenticated;
grant update (revision, content) on public.borepoint_content to authenticated;

drop policy if exists "Read own BorePoint admin membership" on public.borepoint_admins;
create policy "Read own BorePoint admin membership" on public.borepoint_admins
  for select to authenticated using (user_id = (select auth.uid()));

drop policy if exists "Read published BorePoint content" on public.borepoint_content;
create policy "Read published BorePoint content" on public.borepoint_content
  for select to anon, authenticated using (true);

drop policy if exists "Publish BorePoint content as admin" on public.borepoint_content;
create policy "Publish BorePoint content as admin" on public.borepoint_content
  for update to authenticated using (
    exists (select 1 from public.borepoint_admins where user_id = (select auth.uid()))
  );

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('borepoint-gallery', 'borepoint-gallery', true, 6291456, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do nothing;

drop policy if exists "Upload BorePoint gallery photos as admin" on storage.objects;
create policy "Upload BorePoint gallery photos as admin" on storage.objects
  for insert to authenticated with check (
    bucket_id = 'borepoint-gallery'
    and exists (select 1 from public.borepoint_admins where user_id = (select auth.uid()))
  );

commit;
