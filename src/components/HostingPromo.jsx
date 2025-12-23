export default function HostingPromo() {
  return (
    <section className="sectionTight" aria-label="Hosting promo">
      <div className="container">
        <div className="promoRow">
          <div className="promoImg" aria-hidden="true" />
          <div className="promoText">
            <h3>Hosting isn’t only for homeowners</h3>
            <p>
              Airbnb-friendly apartments make it easier to host your home, and earn extra income when you’re away.
            </p>
            <a className="link" href="#" onClick={(e) => e.preventDefault()}>
              Learn more
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
