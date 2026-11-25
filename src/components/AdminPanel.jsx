import { useEffect, useState } from 'react'
import { galleryBucket, instagramPost, readPublishedContent, supabase } from '../data/publishedContent'
import { services } from '../data/services'

const imageExtensions = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' }
const imageLimit = 6 * 1024 * 1024

export default function AdminPanel() {
  useEffect(() => {
    document.title = 'BorePoint Admin'
    const robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'noindex'
    document.head.append(robots)
    return () => robots.remove()
  }, [])

  return (
    <main className="min-h-screen bg-cream-100 px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-bold text-ink-950">BorePoint Admin</h1>
          <a href="/" className="font-semibold text-teal-800 underline">View website</a>
        </header>
        {supabase ? <AdminSession /> : (
          <p className="card p-5">Admin sign-in will be available once the Supabase project is connected.</p>
        )}
      </div>
    </main>
  )
}

function AdminSession() {
  const [session, setSession] = useState(undefined)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, next) => setSession(next))
    return () => data.subscription.unsubscribe()
  }, [])

  async function signIn(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setBusy(true)
    setError('')
    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: form.get('email').trim(),
        password: form.get('password'),
      })
      if (authError) throw authError
    } catch (problem) {
      setError(problem.message)
    } finally {
      setBusy(false)
    }
  }

  async function signOut() {
    setError('')
    const { error: authError } = await supabase.auth.signOut({ scope: 'local' })
    if (authError) setError(authError.message)
  }

  if (session === undefined) return <p role="status">Checking sign-in…</p>
  return (
    <>
      {session ? (
        <>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <span>{session.user.email}</span>
            <button type="button" className="btn btn-outline" onClick={signOut}>Sign out</button>
          </div>
          <ContentEditor key={session.user.id} userId={session.user.id} />
        </>
      ) : (
        <form className="card mx-auto grid max-w-md gap-4 p-6" onSubmit={signIn}>
          <h2 className="text-xl font-bold">Sign in</h2>
          <label className="label">Email
            <input name="email" className="input mt-1" type="email" autoComplete="username" required />
          </label>
          <label className="label">Password
            <input name="password" className="input mt-1" type="password" autoComplete="current-password" required />
          </label>
          <button className="btn btn-primary" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
        </form>
      )}
      {error && <p className="mt-3 text-red-700" role="alert">{error}</p>}
    </>
  )
}

function ContentEditor({ userId }) {
  const [draft, setDraft] = useState(null)
  const [revision, setRevision] = useState(0)
  const [dirty, setDirty] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      const { data, error: membershipError } = await supabase.from('borepoint_admins')
        .select('user_id').eq('user_id', userId).abortSignal(controller.signal).maybeSingle()
      if (membershipError) throw membershipError
      if (!data) throw new Error('This account does not have BorePoint publishing access.')
      const published = await readPublishedContent(controller.signal)
      setDraft(published.content)
      setRevision(published.revision)
    }
    load().catch((problem) => {
      if (!controller.signal.aborted) setError(problem.message)
    })
    return () => controller.abort()
  }, [userId])

  function edit(update) {
    setDraft(update)
    setDirty(true)
    setNotice('')
  }

  async function addPhoto(event) {
    const form = event.currentTarget
    const fields = new FormData(form)
    const file = fields.get('photo')
    const alt = fields.get('description').trim()
    const altKn = fields.get('descriptionKn').trim()
    const extension = imageExtensions[file.type]
    setError('')
    if (!extension || !file.size || file.size > imageLimit || !alt) {
      setError('Choose a JPG, PNG, or WebP up to 6 MB and enter an English description.')
      return
    }
    setBusy(true)
    try {
      const id = crypto.randomUUID()
      const path = `${id}.${extension}`
      const bucket = supabase.storage.from(galleryBucket)
      const { error: uploadError } = await bucket.upload(path, file, { contentType: file.type })
      if (uploadError) throw uploadError
      const { data } = bucket.getPublicUrl(path)
      edit((current) => ({
        ...current,
        gallery: [...current.gallery, { id, src: data.publicUrl, alt: { en: alt, kn: altKn || alt } }],
      }))
      form.reset()
    } catch (problem) {
      setError(problem.message)
    } finally {
      setBusy(false)
    }
  }

  async function publish(event) {
    event.preventDefault()
    setError('')
    setNotice('')
    const reels = draft.reels.map((reel) => ({
      ...reel,
      url: reel.url.trim(),
      title: { en: reel.title.en.trim(), kn: reel.title.kn.trim() || reel.title.en.trim() },
    }))
    if (reels.some((reel) => !instagramPost(reel.url) || !reel.title.en)) {
      setError('Enter a public Instagram reel or post link and an English title for every video.')
      return
    }
    const prices = Object.fromEntries(Object.entries(draft.prices).map(([id, price]) => [id, price.trim().replace(/^₹\s*/, '')]))
    const content = { ...draft, reels, prices }
    setBusy(true)
    try {
      const { data, error: publishError } = await supabase.from('borepoint_content')
        .update({ content, revision: revision + 1 }).eq('id', 1).eq('revision', revision)
        .select('revision').maybeSingle()
      if (publishError) throw publishError
      if (!data) throw new Error('Could not publish. Refresh the panel to load the latest content and check your publishing access.')
      setRevision(data.revision)
      setDraft(content)
      setDirty(false)
      setNotice('Published. Visitors will see these changes when they open or refresh the website.')
    } catch (problem) {
      setError(problem.message)
    } finally {
      setBusy(false)
    }
  }

  if (!draft) return error ? <p role="alert" className="text-red-700">{error}</p> : <p role="status">Loading site content…</p>

  return (
    <div className="grid gap-5">
      <section aria-labelledby="admin-photos" className="card grid gap-4 p-5">
        <h2 id="admin-photos" className="text-xl font-bold">Site photos</h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {draft.gallery.map((photo) => (
            <li key={photo.id} className="grid content-start gap-1">
              <img src={photo.src} alt={photo.alt.en} className="aspect-[4/3] w-full rounded-lg object-cover" />
              <span className="text-sm">{photo.alt.en}</span>
              <button type="button" className="justify-self-start text-sm font-semibold text-red-700 underline"
                aria-label={`Remove ${photo.alt.en}`} disabled={busy}
                onClick={() => edit((current) => ({ ...current, gallery: current.gallery.filter(({ id }) => id !== photo.id) }))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <form className="grid gap-3" onSubmit={addPhoto}>
          <fieldset disabled={busy} className="grid gap-3">
            <label className="label">Image (JPG, PNG, or WebP, up to 6 MB)
              <input className="input mt-1" name="photo" type="file" accept="image/jpeg,image/png,image/webp" required />
            </label>
            <label className="label">Description in English
              <input className="input mt-1" name="description" maxLength={160} required />
            </label>
            <label className="label">Description in Kannada (optional)
              <input className="input mt-1" name="descriptionKn" maxLength={160} />
            </label>
            <button className="btn btn-outline justify-self-start">Add photo</button>
          </fieldset>
        </form>
      </section>

      <form className="grid gap-5" onSubmit={publish}>
        <fieldset disabled={busy} className="card grid gap-3 p-5" aria-labelledby="admin-prices">
          <h2 id="admin-prices" className="text-xl font-bold">Service prices</h2>
          <p className="text-sm text-slate-600">Enter the amount without ₹, for example 900 or 90 / ft. Clear a price to show “Call for price”.</p>
          {services.map((service) => (
            <label key={service.id} className="label grid items-center gap-1 sm:grid-cols-2">
              {service.name.en}
              <input className="input" maxLength={60}
                value={draft.prices[service.id] ?? (service.price?.en ?? service.price).replace(/^₹\s*/, '')}
                onChange={(event) => {
                  const value = event.target.value
                  edit((current) => ({ ...current, prices: { ...current.prices, [service.id]: value } }))
                }} />
            </label>
          ))}
        </fieldset>

        <fieldset disabled={busy} className="card grid gap-4 p-5" aria-labelledby="admin-reels">
          <h2 id="admin-reels" className="text-xl font-bold">Instagram videos</h2>
          {draft.reels.map((reel, index) => (
            <div key={reel.id} className="grid gap-2 rounded-xl border border-slate-200 p-3">
              {[
                ['Instagram link', 'url', reel.url],
                ['English title', 'en', reel.title.en],
                ['Kannada title (optional)', 'kn', reel.title.kn],
              ].map(([label, field, value]) => (
                <label key={field} className="label">{label} for video {index + 1}
                  <input className="input mt-1" type={field === 'url' ? 'url' : 'text'} value={value}
                    maxLength={field === 'url' ? 1000 : 160} required={field !== 'kn'}
                    onChange={(event) => {
                      const next = event.target.value
                      edit((current) => ({
                        ...current,
                        reels: current.reels.map((item) => item.id !== reel.id ? item : field === 'url'
                          ? { ...item, url: next }
                          : { ...item, title: { ...item.title, [field]: next } }),
                      }))
                    }} />
                </label>
              ))}
              <button type="button" className="justify-self-start text-sm font-semibold text-red-700 underline"
                onClick={() => edit((current) => ({ ...current, reels: current.reels.filter(({ id }) => id !== reel.id) }))}>
                Remove video {index + 1}
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-outline justify-self-start" onClick={() => edit((current) => ({
            ...current,
            reels: [...current.reels, { id: crypto.randomUUID(), url: '', title: { en: '', kn: '' } }],
          }))}>Add video</button>
        </fieldset>

        <div className="card sticky bottom-2 grid gap-2 p-4">
          <button className="btn btn-primary justify-self-start" disabled={!dirty || busy}>Publish changes</button>
          {busy && <p role="status">Working…</p>}
          {error && <p role="alert" className="text-red-700">{error}</p>}
          {notice && <p role="status" className="font-semibold text-teal-800">{notice}</p>}
        </div>
      </form>
    </div>
  )
}
