import "./ResultSection.scss";

export default function ResultSection({translations}) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Translation Results</h3>
        <p className="card-description">
          Last {translations.length} translations
        </p>
      </div>

      <div className="card-content">
        {translations.length === 0 ? (
          <p className="empty-message">
            No translations yet. Enter a logical address to begin.
          </p>
        ) : (
          <div className="translations-list">
            {translations.map((trans) => (
              <div
                key={trans.id}
                className={`translation-item ${
                  trans.pageFault ? "fault" : "loaded"
                }`}
              >
                <div className="translation-grid">
                  <div className="field">
                    <p className="label">Logical Address</p>
                    <p className="value">{trans.logicalAddress}</p>
                  </div>

                  <div className="field">
                    <p className="label">Page Number</p>
                    <p className="value">{trans.pageNumber}</p>
                  </div>

                  <div className="field">
                    <p className="label">Offset</p>
                    <p className="value">{trans.offset}</p>
                  </div>

                  <div className="field">
                    <p className="label">Frame Number</p>
                    <p className="value">
                      {trans.frameNumber !== null ? trans.frameNumber : "N/A"}
                    </p>
                  </div>

                  {trans.physicalAddress !== null && (
                    <div className="field">
                      <p className="label">Physical Address</p>
                      <p className="value">{trans.physicalAddress}</p>
                    </div>
                  )}

                  <div
                    className={`status ${trans.pageFault ? "fault" : "loaded"}`}
                  >
                    {trans.pageFault ? "⚠ Page Fault" : "✓ Page Loaded"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
