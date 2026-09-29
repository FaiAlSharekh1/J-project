import { useState } from 'react'
import Logo from './Logo.jsx'
import { CATEGORIES, FACILITIES, STATUS } from './data.js'

// شارة الحالة / Status badge
const Badge = ({ s, big }) => {
  const st = STATUS[s]
  return <span className={'badge' + (big ? ' big' : '')} style={{ color: st.color, background: st.bg }}>{st.icon} {st.ar}</span>
}

export default function App() {
  // شاشات: welcome → home → category → facility
  const [screen, setScreen] = useState('welcome')
  const [cat, setCat] = useState(null)
  const [fac, setFac] = useState(null)
  const [q, setQ] = useState('')

  const results = FACILITIES.filter(f =>
    (!cat || f.cat === cat.id) && (f.name + f.branch).includes(q.trim()))

  // 1) الواجهة الترحيبية / Welcome
  if (screen === 'welcome') return (
    <div className="page center" onClick={() => setScreen('home')}>
      <Logo size={190} tagline />
      <div className="gov">🌴 ابتكار حكومي · Government Innovation</div>
      <button className="cta">ابدأ · Start</button>
    </div>
  )

  // 3) صفحة فئة / Category list
  // 4) تفاصيل المنشأة / Facility details
  return (
    <div className="page">
      <header className="top">
        {(cat || fac) && <button className="back" onClick={() => (fac ? setFac(null) : (setCat(null), setQ('')))}>→</button>}
        <div className="brand" onClick={() => { setCat(null); setFac(null); setQ('') }}><Logo size={44} showText={false} /><b>مرصاد</b></div>
      </header>

      {fac ? <Detail f={fac} /> : (
        <>
          {/* 2) الواجهة الأساسية / Home */}
          <h2>{cat ? `${cat.icon} ${cat.ar}` : 'مرحباً 👋 معاً لمدن أكثر تنظيماً'}</h2>
          <input className="search" placeholder="ابحث عن منشأة… مثال: اللؤلؤة الربوة · Search facility"
                 value={q} onChange={e => setQ(e.target.value)} />

          {!cat && !q && (
            <div className="grid">
              {CATEGORIES.map(c => (
                <button key={c.id} className="tile" onClick={() => setCat(c)}>
                  <span className="ico" style={{ background: c.color }}>{c.icon}</span>
                  <span>{c.ar}</span><small>{c.en}</small>
                </button>
              ))}
            </div>
          )}

          {(cat || q) && (
            <div className="list">
              {results.length === 0 && <p className="muted">لا توجد نتائج · No results</p>}
              {results.map(f => (
                <button key={f.id} className="row" onClick={() => setFac(f)}>
                  <div><b>{f.name}</b> <span className="muted">{f.branch}</span>
                    <div className="muted">{f.type} · {f.dist} كم</div></div>
                  <Badge s={f.badge} />
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

function Detail({ f }) {
  const st = STATUS[f.badge]
  return (
    <div className="detail">
      <div className="hero" style={{ borderColor: st.color, background: st.bg }}>
        <h2>{f.name} <span className="muted">{f.branch}</span></h2>
        <Badge s={f.badge} big />
        <div className="stars">⭐ {f.rating} / 5</div>
        {f.badge === 'warn' && <p>لديك مهلة <b>{f.hoursLeft}</b> ساعة من أصل 48 لتدارك الوضع · Fix within 48h</p>}
        {f.badge === 'bad' && <p>لم يتم التعاون — قد يتم سحب رخصة مرصاد · License at risk</p>}
      </div>

      <h3>قراءات الحساسات · Live sensors</h3>
      {f.sensors.map(s => (
        <div key={s.en} className="sensor" style={{ borderColor: s.ok ? '#1E9E5A' : '#D93025' }}>
          <span>{s.ar} <small className="muted">{s.en}</small></span>
          <b style={{ color: s.ok ? '#1E9E5A' : '#D93025' }}>{s.v} {s.ok ? '✅' : '❗'}</b>
        </div>
      ))}

      <h3>كيف يظهر للمستهلك في الخرائط · Shown in Maps</h3>
      <div className="maps">📍 {f.name} — {f.branch}<br /><Badge s={f.badge} /> ⭐ {f.rating}</div>
    </div>
  )
}
