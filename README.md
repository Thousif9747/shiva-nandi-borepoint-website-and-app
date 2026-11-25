# React + Vite

## BorePoint admin setup

The admin panel is at `/admin/`. It uses Supabase for email and password sign-in, stored photos, and published content. The public site remains a static Vite site on Netlify.

1. Create a Supabase project with its Data API enabled. In its SQL Editor, run `supabase/setup.sql` from this repository.
2. In Authentication, disable public signups and create a confirmed user with the owner's email and a strong password. Copy that user's UUID. Keep the password in your password manager.
3. In the SQL Editor, grant that user publishing access. Replace the example UUID with the one from Authentication.

   ```sql
   insert into public.borepoint_admins (user_id)
   values ('00000000-0000-0000-0000-000000000000')
   on conflict do nothing;
   ```

4. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` to the existing Netlify project's environment variables for production builds. Use the Supabase Project URL and the publishable key from the project's Connect dialog. For local development, put the same values in `.env.local`. A secret or service-role key must never be used as a `VITE_` variable.
5. Deploy from `main`, then open `/admin/` on the live site and sign in. Make a change, click **Publish changes**, and refresh the public site in a private browser window to confirm it appears. Subsequent content updates take effect on the next page load without a Netlify rebuild.

Removing a photo from the gallery removes it from the public page after publishing. The original file remains in Supabase Storage. Only upload images intended for public viewing.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
