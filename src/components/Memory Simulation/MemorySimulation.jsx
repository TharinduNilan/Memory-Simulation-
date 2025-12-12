import "./MemorySimulation.scss";

export default function MemorySimulation() {
  return (
    <div className="visualization-section">
      <div class="physical-memory-card">
        <div class="card-header">
          <h2 class="title">Physical Memory Visualization</h2>
          <p class="description">4 frames of 1 KB each (4 KB total)</p>
        </div>

        <div class="card-content">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div class="frame-block">
              <div class="frame-meta">
                <span class="frame-number">Frame 0</span>
                <span class="frame-range">0-1023</span>
              </div>
              <div class="frame-box loaded">Page 0</div>
            </div>

            <div class="frame-block">
              <div class="frame-meta">
                <span class="frame-number">Frame 1</span>
                <span class="frame-range">1024-2047</span>
              </div>
              <div class="frame-box empty">Empty</div>
            </div>
            <div class="frame-block">
              <div class="frame-meta">
                <span class="frame-number">Frame 1</span>
                <span class="frame-range">1024-2047</span>
              </div>
              <div class="frame-box empty">Empty</div>
            </div>
            <div class="frame-block">
              <div class="frame-meta">
                <span class="frame-number">Frame 1</span>
                <span class="frame-range">1024-2047</span>
              </div>
              <div class="frame-box empty">Empty</div>
            </div>
          </div>

          <div class="legend">
            <p class="legend-title">Paging System:</p>
            <ul class="legend-list">
              <li>• Logical address space: 8 KB (8 pages)</li>
              <li>• Physical address space: 4 KB (4 frames)</li>
              <li>• Page size: 1 KB (1024 bytes)</li>
              <li>• Paging level: One-level paging</li>
              <li>• Page replacement: None (simulation only)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
