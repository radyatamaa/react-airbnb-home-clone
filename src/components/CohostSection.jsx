import cohosts from '../data/cohosts.json'

function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 17.4 6.6 20l1-6L3 9.8l6.2-.9L12 3.5l2.8 5.4 6.2.9-4.6 4.2 1 6-5.4-2.6Z"
        fill="#111"
      />
    </svg>
  )
}

export default function CohostSection() {
  return (
    <section className="section" aria-label="Co-hosts">
      <div className="container">
        <h2 className="h2">A co-host can help you get started</h2>
        <p className="pCenter">
          Now you can hire a local co-host to help create your listing, get your space ready, and more.
        </p>

        <div className="cohostGridWrap">
          <div className="cohostGrid" data-testid="cohost-grid">
            {cohosts.map((c) => (
              <div className="card" key={c.id}>
                <div className="avatar" style={{ background: c.avatarColor }} aria-hidden="true" />
                <p className="cardName">{c.name}</p>
                <p className="cardLoc">{c.location}</p>
                <div className="cardMetaRow">
                  <span className="metaStrong" aria-label="rating">
                    <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
                      <span style={{ width: 14, height: 14, display: 'inline-block' }}>
                        <Star />
                      </span>
                      {c.rating.toFixed(2)}
                    </span>
                  </span>
                  <span>{c.reviews} reviews</span>
                </div>
                <div className="cardMetaRow" style={{ borderTop: 'none', paddingTop: 8 }}>
                  <span className="metaStrong">{c.price}</span>
                  <span>per night</span>
                </div>
              </div>
            ))}
          </div>

          <div className="centerBtnRow">
            <button className="pill pillDark" type="button">
              Find a co-host
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
