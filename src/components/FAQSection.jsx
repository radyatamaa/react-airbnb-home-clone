import { useMemo, useState } from 'react'
import faqData from '../data/faq.json'

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .18s ease' }}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function FAQSection() {
  const items = useMemo(() => {
    // Flatten into a simple accordion list (matches screenshot list feel).
    const out = []
    for (const sec of faqData.sections) {
      out.push({ type: 'section', id: sec.id, title: sec.title })
    }
    return out
  }, [])

  const [openId, setOpenId] = useState(null)

  return (
    <section className="section" aria-label="FAQ">
      <div className="container">
        <h2 className="h2">Your questions, answered</h2>

        <div className="faqWrap">
          <div className="accordion" role="presentation">
            {faqData.sections.map((sec) => {
              const open = openId === sec.id
              return (
                <div className="accItem" key={sec.id}>
                  <button
                    type="button"
                    className="accBtn"
                    onClick={() => setOpenId(open ? null : sec.id)}
                    aria-expanded={open}
                    aria-controls={`panel-${sec.id}`}
                  >
                    {sec.title}
                    <span style={{ width: 22, height: 22, display: 'inline-block' }}>
                      <Chevron open={open} />
                    </span>
                  </button>

                  {open ? (
                    <div className="accPanel" id={`panel-${sec.id}`}>
                      {sec.items.map((it, idx) => (
                        <div key={idx} style={{ paddingTop: idx === 0 ? 0 : 14 }}>
                          <div style={{ fontWeight: 800, color: '#2a2a2a' }}>{it.q}</div>
                          <div style={{ marginTop: 6 }}>{it.a}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>

          <div className="ctaBox">
            <div style={{ fontWeight: 800, marginBottom: 8, color: '#2a2a2a' }}>Still have questions?</div>
            Click “Ask a host” to connect with a local host.
            <div className="centerBtnRow" style={{ marginTop: 14 }}>
              <button className="pill pillDark" type="button">
                Ask a host
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
