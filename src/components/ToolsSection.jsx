export default function ToolsSection() {
  return (
    <section className="section" aria-label="Tools in the app">
      <div className="container">
        <h2 className="h2">All the tools you need to host, all in one app</h2>

        <div className="toolsRow" data-testid="tools-row">
          <div>
            <div className="toolPhone" aria-hidden="true">
              <div className="toolNotch" />
              <div className="toolBody">
                <div className="toolWidget" />
              </div>
            </div>
            <p className="toolTitle">Listing editor</p>
            <p className="toolDesc">Showcase your place and update your listing anytime.</p>
          </div>

          <div>
            <div className="toolPhone" aria-hidden="true">
              <div className="toolNotch" />
              <div className="toolBody">
                <div className="toolWidget" />
              </div>
            </div>
            <p className="toolTitle">Calendar</p>
            <p className="toolDesc">Manage availability and pricing in a few taps.</p>
          </div>

          <div>
            <div className="toolPhone" aria-hidden="true">
              <div className="toolNotch" />
              <div className="toolBody">
                <div className="toolWidget" />
              </div>
            </div>
            <p className="toolTitle">Messages</p>
            <p className="toolDesc">Quickly message guests and get support.</p>
          </div>
        </div>

        <div className="centerBtnRow">
          <button className="pill pillDark" type="button">
            Download the Airbnb app
          </button>
        </div>
      </div>
    </section>
  )
}
