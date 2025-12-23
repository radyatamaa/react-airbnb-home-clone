import footerData from '../data/footer.json'

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="container">
        <div className="footerGrid">
          {footerData.columns.map((col) => (
            <div key={col.title}>
              <div className="footerTitle">{col.title}</div>
              {col.links.map((l) => (
                <a
                  key={l}
                  className="footerLink"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footerBottom">
          <div>{footerData.bottom[0]}</div>
          <div className="footerBottomLinks" aria-label="Footer links">
            {footerData.bottom.slice(1).map((l) => (
              <a key={l} href="#" onClick={(e) => e.preventDefault()}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
