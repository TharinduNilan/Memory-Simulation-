import "./PageSection.scss";

export default function PageSection() {
  return (
    <div className="page-section">
      {/* Configuration details */}
      <div className="memory-card">
        <div className="memory-card-header">
          <h2 className="memory-card-title">Memory Configuration</h2>
        </div>

        <div className="memory-card-content">
          <div className="item-row">
            <span className="label">Logical Memory:</span>
            <span className="value">8 KB</span>
          </div>

          <div className="item-row">
            <span className="label">Physical Memory:</span>
            <span className="value">4 KB</span>
          </div>

          <div className="item-row">
            <span className="label">Page Size:</span>
            <span className="value">1 KB</span>
          </div>

          <div className="item-row">
            <span className="label">Pages:</span>
            <span className="value">8</span>
          </div>

          <div className="item-row">
            <span className="label">Frames:</span>
            <span className="value">4</span>
          </div>
        </div>
      </div>

      {/* Page Table */}
      <div className="page-table-card">
        <div className="page-table-header">
          <h2 className="title">Page Table</h2>
          <p className="description">8 pages x 1 KB each</p>
        </div>

        <div className="page-table-content">
          
          <div className="row">
            <span className="page-label">Page 0</span>
            <span className="frame-tag not-loaded">Frame 0</span>
          </div>

          <div className="row">
            <span className="page-label">Page 1</span>
            <span className="frame-tag not-loaded">Not Loaded</span>
          </div>
          <div className="row">
            <span className="page-label">Page 1</span>
            <span className="frame-tag not-loaded">Not Loaded</span>
          </div>
          <div className="row">
            <span className="page-label">Page 1</span>
            <span className="frame-tag not-loaded">Not Loaded</span>
          </div>
          <div className="row">
            <span className="page-label">Page 1</span>
            <span className="frame-tag not-loaded">Not Loaded</span>
          </div>
          <div className="row">
            <span className="page-label">Page 1</span>
            <span className="frame-tag not-loaded">Not Loaded</span>
          </div>
          <div className="row">
            <span className="page-label">Page 1</span>
            <span className="frame-tag not-loaded">Not Loaded</span>
          </div>
        </div>
      </div>
    </div>
  );
}
