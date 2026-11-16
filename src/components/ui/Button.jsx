import './Button.css'

/** variant: 'primary' | 'secondary' | 'ghost' · size: 'md' | 'lg' */
export default function Button({ href = '#', variant = 'primary', size = 'md', children, ...rest }) {
  return (
    <a href={href} className={`btn btn--${variant} btn--${size}`} {...rest}>
      <span>{children}</span>
      {variant === 'primary' && (
        <svg className="btn__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      )}
    </a>
  )
}
