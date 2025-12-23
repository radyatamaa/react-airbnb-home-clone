export default function EasyListSection() {
  return (
    <section className="section" aria-label="Easy to list">
      <div className="container">
        <h2 className="h2">It’s easy to list your home on Airbnb</h2>

        <div className="phoneRow" aria-hidden="true">
          <div className="phoneMock">
            <div className="notch" />
            <div className="phoneContent">
              <div className="phonePanel">
                <p className="phonePanelTitle">Tell guests what your place has to offer</p>
                <div className="phoneTileGrid">
                  <div className="phoneTile" />
                  <div className="phoneTile" />
                  <div className="phoneTile" />
                  <div className="phoneTile" />
                  <div className="phoneTile" />
                  <div className="phoneTile" />
                </div>
              </div>
              <div className="phoneScene">
                <h4>Tell us about your place</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="featureRow">
          <div className="feature">
            <div className="featureIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <p className="featureTitle">Create a listing for your place in just a few steps</p>
            <p className="featureDesc">Add photos, set a price, and publish when you’re ready.</p>
          </div>

          <div className="feature">
            <div className="featureIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 4h10a2 2 0 0 1 2 2v14l-4-3H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <p className="featureTitle">Go at your own pace, and make changes whenever</p>
            <p className="featureDesc">You control availability, rules, and listing details.</p>
          </div>

          <div className="feature">
            <div className="featureIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21a9 9 0 1 0-9-9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 12V7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M3 12h4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="featureTitle">Get 1:1 support from experienced hosts at any time</p>
            <p className="featureDesc">Use the app to message, manage bookings, and get help.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
