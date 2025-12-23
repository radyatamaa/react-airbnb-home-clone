function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 7 10 17l-5-5"
        stroke="#111"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function AirCoverSection() {
  return (
    <section className="sectionTight" aria-label="AirCover">
      <div className="container">
        <div className="brandTag">aircover</div>
        <h2 className="h2">However you host, you’re protected</h2>
        <p className="pCenter">Top-to-bottom protection, included every time you host your home on Airbnb.</p>

        <div className="checkList" role="list">
          <div className="checkRow" role="listitem">
            <span>Up to $3M damage protection</span>
            <span className="check" aria-hidden="true">
              <CheckIcon />
            </span>
          </div>
          <div className="checkRow" role="listitem">
            <span>Up to $1M liability insurance</span>
            <span className="check" aria-hidden="true">
              <CheckIcon />
            </span>
          </div>
          <div className="checkRow" role="listitem">
            <span>24-hour safety line</span>
            <span className="check" aria-hidden="true">
              <CheckIcon />
            </span>
          </div>
        </div>

        <div className="centerBtnRow">
          <button className="pill pillDark" type="button">
            Learn about AirCover
          </button>
        </div>

        <p className="smallNote">
          This is a UI-only clone for an interview task. Coverage limits and availability may differ by region.
        </p>
      </div>
    </section>
  )
}
