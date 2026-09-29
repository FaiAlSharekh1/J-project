// شعار مرصاد (نسخة SVG تقريبية) — لاستخدام شعارك الأصلي: ضع logo.png في public/ وبدّل <Logo/> بـ <img src="logo.png"/>
export default function Logo({ size = 120, showText = true, tagline = false }) {
  const g = '#1E5B4C', l = '#5FA88F'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
        <path d="M120 14 A78 78 0 0 1 176 72" stroke={l} strokeWidth="9" strokeLinecap="round" />
        <path d="M100 30C62 30 40 58 40 90c0 26 22 44 60 82 38-38 60-56 60-82 0-32-22-60-60-60Z" stroke={g} strokeWidth="12" />
        <circle cx="100" cy="82" r="24" fill={g} /><circle cx="108" cy="72" r="5" fill="#fff" />
        <g fill={l}><rect x="80" y="110" width="12" height="28" /><rect x="94" y="100" width="8" height="38" /><rect x="104" y="116" width="14" height="22" /></g>
        <path d="M58 168l16-24h52l16 24z" fill="none" stroke={g} strokeWidth="9" strokeLinejoin="round" />
      </svg>
      {showText && <div style={{ fontFamily: 'Cairo', fontWeight: 800, fontSize: size * 0.4, color: g, lineHeight: 1 }}>مرصاد</div>}
      {tagline && <div style={{ color: '#5b6b66', fontSize: 14 }}>منصة ذكية لربط البلديات وتقليل الجولات الميدانية</div>}
    </div>
  )
}
