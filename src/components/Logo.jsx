export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Automatiza360">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#6d7bff" /><stop offset="1" stopColor="#2ee6d0" /></linearGradient></defs>
        <rect width="32" height="32" rx="9" fill="url(#lg)" />
        <path d="M9 20l5-8 4 6 5-8" stroke="#06101a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span>Automatiza<b>360</b></span>
    </a>
  )
}
