export default function Header() {
  return (
    <header className="header" data-testid="header">
      <div className="container headerInner">
        <div className="brand" aria-label="Airbnb">
          <svg className="brandMark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path
              d="M16 2c4.7 0 7.4 3.6 9 6.8 1.7 3.4 3.9 7.7 3.9 12.1 0 4.9-3.9 9.1-12.9 9.1S3.1 25.8 3.1 20.9c0-4.4 2.2-8.7 3.9-12.1C8.6 5.6 11.3 2 16 2Zm0 5.3c-2.1 0-3.8 2-4.9 4.3-1.1 2.2-2.6 5.1-2.6 7.7 0 2.8 2.3 5.1 7.5 5.1s7.5-2.3 7.5-5.1c0-2.6-1.5-5.5-2.6-7.7-1.1-2.3-2.8-4.3-4.9-4.3Z"
              fill="#FF385C"
            />
          </svg>
        </div>

        <button className="pill pillPrimary" type="button">
          Get started
        </button>
      </div>
    </header>
  )
}
