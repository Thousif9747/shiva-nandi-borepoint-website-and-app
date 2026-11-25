/**
 * Official business logo (Shiva Nandi emblem) supplied by the owner.
 * Rendered as an image; size prop keeps the old SVG call sites unchanged.
 */
export default function Logo({ size = 40, className = '' }) {
  return (
    <img
      src="/images/logo.png"
      alt=""
      width={size}
      height={size}
      aria-hidden="true"
      className={`shrink-0 rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
