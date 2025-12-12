import "./ResultSection.scss";

export default function ResultSection() {
  return (
    <div className="translation-card">
      <div className="card-header">
        <h2 className="title">Translation Results</h2>
        <p className="description">Last X translations</p>
      </div>

      <div className="card-content">
        {/* <p className="empty-message">
          No translations yet. Enter a logical address to begin.
        </p> */}

        <div className={`translation-item fault`}>
          <div className="translation-grid">
            <div className="grid-field">
              <p className="label">Logical Address</p>
              <p className="value">2000</p>
            </div>

            <div className="grid-field">
              <p className="label">Page Number</p>
              <p className="value">1</p>
            </div>

            <div className="grid-field">
              <p className="label">Offset</p>
              <p className="value">976</p>
            </div>

            <div className="grid-field">
              <p className="label">Frame Number</p>
              <p className="value">N/A</p>
            </div>

            <div className="status fault">⚠ Page Fault</div>
          </div>
        </div>
      </div>
    </div>
  );
}
