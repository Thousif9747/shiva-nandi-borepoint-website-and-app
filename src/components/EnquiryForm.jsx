import { useEffect, useMemo, useRef, useState } from 'react'
import { CircleCheck, MapPin } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { useLanguage } from '../context/LanguageContext'
import { services } from '../data/services'
import { validateEnquiry } from '../utils/validators'
import { buildEnquiryMessage, buildWhatsAppUrl, openWhatsApp } from '../utils/whatsapp'
import { getMapsLink, focusField, prefersReducedMotion, scrollToId } from '../utils/browser'

const EMPTY = {
  name: '',
  phone: '',
  site: '',
  area: '',
  pin: '',
  serviceId: '',
  landType: '',
  landSize: '',
  existing: 'no',
  depth: '',
  problem: '',
  visitDate: '',
  message: '',
  locationLink: '',
}

const FIELD_IDS = {
  name: 'enq-name',
  phone: 'enq-phone',
  site: 'enq-site',
  area: 'enq-area',
  pin: 'enq-pin',
  serviceId: 'enq-service',
}

export default function EnquiryForm({ prefill }) {
  const { t, tr } = useLanguage()
  const f = t('form') // returns nested object via dot path
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submittedUrl, setSubmittedUrl] = useState('')
  const [loc, setLoc] = useState('idle') // idle | loading | added | error | unsupported
  const lastScrolledPrefill = useRef(0)
  const today = useMemo(() => new Date().toISOString().slice(0, 10), [])

  // service pre-selected from a service card / hero button
  useEffect(() => {
    if (prefill && prefill.serviceId && prefill.nonce) {
      setSubmitted(false)
      setErrors({})
      setValues((v) => ({ ...v, serviceId: prefill.serviceId }))
    }
  }, [prefill])

  useEffect(() => {
    const nonce = prefill?.nonce
    if (submitted || !nonce || nonce === lastScrolledPrefill.current) return
    lastScrolledPrefill.current = nonce
    scrollToId(FIELD_IDS.serviceId, 'center')
  }, [prefill, submitted])

  const set = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const errText = (field, code) => {
    const allowed = new Set(['nameRequired', 'nameShort', 'phoneRequired', 'phoneInvalid', 'siteRequired', 'outside', 'areaRequired', 'pinRequired', 'pinInvalid', 'serviceRequired'])
    if (!code || !allowed.has(code)) return null
    return f.errors[code] ?? null
  }

  const shareLocation = async () => {
    setLoc('loading')
    try {
      const link = await getMapsLink()
      setValues((v) => ({ ...v, locationLink: link }))
      setLoc('added')
    } catch (err) {
      setLoc(err && err.message === 'unsupported' ? 'unsupported' : 'error')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { valid, errors: errs } = validateEnquiry(values)
    if (!valid) {
      setErrors(errs)
      const firstBad = Object.keys(FIELD_IDS).find((k) => errs[k])
      if (firstBad) focusField(FIELD_IDS[firstBad])
      return
    }
    setErrors({})
    const service = services.find((s) => s.id === values.serviceId)
    const message = buildEnquiryMessage(values, service)
    const url = buildWhatsAppUrl(message)
    openWhatsApp(url)
    setSubmittedUrl(url)
    setSubmitted(true)
    if (!prefersReducedMotion()) scrollToId('contact')
  }

  const startAgain = () => {
    setValues(EMPTY)
    setErrors({})
    setLoc('idle')
    setSubmitted(false)
  }

  const errFor = (field) => errText(field, errors[field])

  /* ------------------------- SUCCESS SCREEN ------------------------- */
  if (submitted) {
    return (
      <div className="card flex flex-col items-center gap-4 p-8 text-center" aria-live="polite">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-wa-500/12 text-wa-600">
          <CircleCheck size={34} strokeWidth={2} aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold text-ink-950">{f.success.title}</h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate-600">{f.success.text}</p>
        <p className="max-w-sm text-[12px] leading-relaxed text-slate-500">{f.success.blocked}</p>
        <a href={submittedUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
          <WhatsAppIcon size={18} />
          {f.success.again}
        </a>
        <button type="button" onClick={startAgain} className="btn btn-outline btn-sm">
          {f.success.newEnquiry}
        </button>
      </div>
    )
  }

  /* ------------------------------ FORM ------------------------------ */
  const hasErrors = Object.values(errors).some(Boolean)
  const outsideSelected = values.site === 'outside'

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-5 sm:p-7" aria-label={f.submit}>
      <input type="hidden" name="locationLink" value={values.locationLink} readOnly />

      {hasErrors ? (
        <p role="alert" className="mb-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {f.errorSummary}
        </p>
      ) : null}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* name */}
        <div>
          <label htmlFor={FIELD_IDS.name} className="label">
            {f.name} <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id={FIELD_IDS.name}
            className="input"
            type="text"
            autoComplete="name"
            placeholder={f.namePlaceholder}
            value={values.name}
            aria-invalid={!!errFor('name')}
            aria-describedby={errFor('name') ? `${FIELD_IDS.name}-err` : undefined}
            onChange={(e) => set('name', e.target.value)}
          />
          {errFor('name') ? <p id={`${FIELD_IDS.name}-err`} className="field-error">{errFor('name')}</p> : null}
        </div>

        {/* phone */}
        <div>
          <label htmlFor={FIELD_IDS.phone} className="label">
            {f.phone} <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id={FIELD_IDS.phone}
            className="input"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder={f.phonePlaceholder}
            value={values.phone}
            aria-invalid={!!errFor('phone')}
            aria-describedby={errFor('phone') ? `${FIELD_IDS.phone}-err` : undefined}
            onChange={(e) => set('phone', e.target.value)}
          />
          {errFor('phone') ? <p id={`${FIELD_IDS.phone}-err`} className="field-error">{errFor('phone')}</p> : null}
          <p className="mt-1 text-[12px] text-slate-500">{f.phoneHelp}</p>
        </div>

        {/* site location */}
        <div>
          <label htmlFor={FIELD_IDS.site} className="label">
            {f.site} <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <select
            id={FIELD_IDS.site}
            className="input"
            value={values.site}
            aria-invalid={!!errFor('site')}
            aria-describedby={errFor('site') ? `${FIELD_IDS.site}-err` : undefined}
            onChange={(e) => set('site', e.target.value)}
          >
            <option value="">{f.selectSite}</option>
            <option value="inside">{f.inside}</option>
            <option value="outside">{f.outside}</option>
          </select>
          {errFor('site') ? <p id={`${FIELD_IDS.site}-err`} className="field-error">{errFor('site')}</p> : null}
          {outsideSelected ? (
            <p role="status" className="mt-1 rounded-lg border border-teal-600/20 bg-teal-50 px-3 py-2 text-[13px] font-semibold text-teal-800">
              {f.outsideNote}
            </p>
          ) : null}
        </div>

        {/* area */}
        <div>
          <label htmlFor={FIELD_IDS.area} className="label">
            {f.area} <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id={FIELD_IDS.area}
            className="input"
            type="text"
            placeholder={f.areaPlaceholder}
            value={values.area}
            aria-invalid={!!errFor('area')}
            aria-describedby={errFor('area') ? `${FIELD_IDS.area}-err` : undefined}
            onChange={(e) => set('area', e.target.value)}
          />
          {errFor('area') ? <p id={`${FIELD_IDS.area}-err`} className="field-error">{errFor('area')}</p> : null}
        </div>

        {/* pin */}
        <div>
          <label htmlFor={FIELD_IDS.pin} className="label">
            {f.pin} <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <input
            id={FIELD_IDS.pin}
            className="input"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            placeholder={f.pinPlaceholder}
            maxLength={6}
            value={values.pin}
            aria-invalid={!!errFor('pin')}
            aria-describedby={errFor('pin') ? `${FIELD_IDS.pin}-err` : undefined}
            onChange={(e) => set('pin', e.target.value.replace(/\D/g, '').slice(0, 6))}
          />
          {errFor('pin') ? <p id={`${FIELD_IDS.pin}-err`} className="field-error">{errFor('pin')}</p> : null}
        </div>

        {/* service */}
        <div>
          <label htmlFor={FIELD_IDS.serviceId} className="label">
            {f.service} <span aria-hidden="true" className="text-red-600">*</span>
          </label>
          <select
            key={prefill?.nonce}
            id={FIELD_IDS.serviceId}
            className={prefill?.nonce ? 'input enquiry-service-highlight' : 'input'}
            value={values.serviceId}
            aria-invalid={!!errFor('serviceId')}
            aria-describedby={errFor('serviceId') ? `${FIELD_IDS.serviceId}-err` : undefined}
            onChange={(e) => set('serviceId', e.target.value)}
          >
            <option value="">{f.selectService}</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>{tr(s.name)}</option>
            ))}
          </select>
          {errFor('serviceId') ? <p id={`${FIELD_IDS.serviceId}-err`} className="field-error">{errFor('serviceId')}</p> : null}
        </div>

        {/* land type */}
        <div>
          <label htmlFor="enq-landtype" className="label">
            {f.landType}
            <span className="ml-1 rounded-full bg-cream-200 px-1.5 py-0.5 text-[10px] font-bold text-ink-800">
              {t('common.optional')}
            </span>
          </label>
          <select
            id="enq-landtype"
            className="input"
            value={values.landType}
            onChange={(e) => set('landType', e.target.value)}
          >
            <option value="">{f.selectLandType}</option>
            <option value="Agriculture">{f.landTypes.agriculture}</option>
            <option value="House">{f.landTypes.house}</option>
            <option value="Apartment">{f.landTypes.apartment}</option>
            <option value="Plot">{f.landTypes.plot}</option>
            <option value="Commercial">{f.landTypes.commercial}</option>
          </select>
        </div>

        {/* land size */}
        <div>
          <label htmlFor="enq-landsize" className="label">
            {f.landSize}
            <span className="ml-1 rounded-full bg-cream-200 px-1.5 py-0.5 text-[10px] font-bold text-ink-800">
              {t('common.optional')}
            </span>
          </label>
          <input
            id="enq-landsize"
            className="input"
            type="text"
            placeholder={f.landSizePlaceholder}
            value={values.landSize}
            onChange={(e) => set('landSize', e.target.value)}
          />
        </div>

        {/* existing borewell */}
        <fieldset className="sm:col-span-2">
          <legend className="label">{f.existing}</legend>
          <div className="flex gap-2" role="radiogroup" aria-label={f.existing}>
            {['no', 'yes'].map((val) => (
              <button
                key={val}
                type="button"
                role="radio"
                aria-checked={values.existing === val}
                onClick={() => set('existing', val)}
                className={`btn btn-sm flex-1 ${values.existing === val ? 'bg-ink-800 text-white' : 'border-ink-900/15 bg-white text-ink-900 hover:border-teal-600'}`}
              >
                {val === 'yes' ? f.yes : f.no}
              </button>
            ))}
          </div>
        </fieldset>

        {/* existing borewell follow-up */}
        {values.existing === 'yes' ? (
          <>
            <div>
              <label htmlFor="enq-depth" className="label">
                {f.depth}
                <span className="ml-1 rounded-full bg-cream-200 px-1.5 py-0.5 text-[10px] font-bold text-ink-800">
                  {t('common.optional')}
                </span>
              </label>
              <input
                id="enq-depth"
                className="input"
                type="text"
                placeholder={f.depthPlaceholder}
                value={values.depth}
                onChange={(e) => set('depth', e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="enq-problem" className="label">
                {f.problem}
                <span className="ml-1 rounded-full bg-cream-200 px-1.5 py-0.5 text-[10px] font-bold text-ink-800">
                  {t('common.optional')}
                </span>
              </label>
              <input
                id="enq-problem"
                className="input"
                type="text"
                placeholder={f.problemPlaceholder}
                value={values.problem}
                onChange={(e) => set('problem', e.target.value)}
              />
            </div>
          </>
        ) : null}

        {/* visit date */}
        <div>
          <label htmlFor="enq-date" className="label">
            {f.visitDate}
            <span className="ml-1 rounded-full bg-cream-200 px-1.5 py-0.5 text-[10px] font-bold text-ink-800">
              {t('common.optional')}
            </span>
          </label>
          <input
            id="enq-date"
            className="input"
            type="date"
            min={today}
            value={values.visitDate}
            onChange={(e) => set('visitDate', e.target.value)}
          />
        </div>

        {/* message */}
        <div className="sm:col-span-2">
          <label htmlFor="enq-message" className="label">
            {f.message}
            <span className="ml-1 rounded-full bg-cream-200 px-1.5 py-0.5 text-[10px] font-bold text-ink-800">
              {t('common.optional')}
            </span>
          </label>
          <textarea
            id="enq-message"
            className="input min-h-[96px] resize-y"
            placeholder={f.messagePlaceholder}
            value={values.message}
            onChange={(e) => set('message', e.target.value)}
          />
        </div>

        {/* share location */}
        <div className="sm:col-span-2">
          <span className="label">{f.location}</span>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={shareLocation}
              disabled={loc === 'loading' || loc === 'added'}
              className={`btn btn-sm ${loc === 'added' ? 'bg-teal-600 text-white' : 'btn-outline'}`}
            >
              <MapPin size={16} aria-hidden="true" />
              {loc === 'loading' ? f.locating : loc === 'added' ? f.locationShared : t('actions.shareLocation')}
            </button>
            <p className="text-[12px] leading-snug text-slate-500">
              {loc === 'unsupported' ? f.locationUnsupported : loc === 'error' ? f.locationError : f.locationHelp}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-[12px] text-slate-500">{f.requiredHint}</p>

      <button
        type="submit"
        className="btn btn-wa mt-3 w-full"
      >
        <WhatsAppIcon size={18} />
        {f.submit}
      </button>
    </form>
  )
}
