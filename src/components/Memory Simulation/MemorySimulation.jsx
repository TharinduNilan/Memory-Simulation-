import "./MemorySimulation.scss";

export default function MemorySimulation({ pageTable }) {
  const totalFrames = 4;
  const PAGE_SIZE = 1024;

  // Create a reverse mapping of frame to page
  const frameToPage = {};
  for (let i = 0; i < totalFrames; i++) {
    frameToPage[i] = null;
  }
  Object.entries(pageTable).forEach(([page, frame]) => {
    if (frame !== null) {
      frameToPage[frame] = Number.parseInt(page);
    }
  });

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
            {Array.from({ length: totalFrames }).map((_, frameNum) => {
              const pageNum = frameToPage[frameNum];
              const isLoaded = pageNum !== null;
              const startAddr = frameNum * PAGE_SIZE;
              const endAddr = startAddr + PAGE_SIZE - 1;

              return (
                <div class="frame-block">
                  <div class="frame-meta">
                    <span class="frame-number">Frame {frameNum}</span>
                    <span class="frame-range">{startAddr}-{endAddr}</span>
                  </div>
                  <div class="frame-box loaded">{isLoaded ? `Page ${pageNum}` : "Empty"}</div>
                </div>
              );
            })}
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
