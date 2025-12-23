import { useMemo, useState } from 'react'

function formatUSD(value) {
  return '$' + Math.round(value).toLocaleString('en-US')
}

export default function HeroEstimate() {
  const [nights, setNights] = useState(7)
  const [location, setLocation] = useState('South Jakarta')

  // This is dummy logic to mimic the “earning estimate” feel.
  const estimate = useMemo(() => {
    const basePerNight = 130
    const locationMultiplier = location.toLowerCase().includes('jak') ? 1.0 : 0.92
    const seasonal = 1.03
    return nights * basePerNight * locationMultiplier * seasonal
  }, [nights, location])

  return (
    <section className="hero" aria-label="Earnings estimate">
      <div className="container">
        <div className="heroGrid">
          <div className="heroCard">
            <p className="heroSub" style={{ marginTop: 0 }}>
              Estimate your earnings
            </p>
            <h1 className="heroTitle">Your home could make {formatUSD(estimate)} on Airbnb</h1>
            <p className="heroSub">
              Start with a quick estimate. Adjust the nights and your location to see the number change.
            </p>

            <div className="estimateRow" data-testid="estimate-row">
              <div>
                <p className="estimateValue" aria-label="Estimated earnings">
                  {formatUSD(estimate)}
                </p>
                <p className="estimateMeta">{nights} nights · Entire place · 1 guest</p>
              </div>
              <button className="pill pillDark" type="button">
                Explore
              </button>
            </div>

            <input
              className="slider"
              aria-label="Nights slider"
              type="range"
              min="1"
              max="30"
              value={nights}
              onChange={(e) => setNights(Number(e.target.value))}
            />

            <div className="searchRow">
              <input
                className="input"
                aria-label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
              <button className="iconBtn" type="button" aria-label="Search">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm8.2 1.1-3.6-3.6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <div className="mapHint" />
            <div className="pin p1" />
            <div className="pin p2" />
            <div className="pin p3" />
          </div>
        </div>
      </div>
    </section>
  )
}
