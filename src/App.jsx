import { useState } from "react";
import "./App.scss";
import MemorySimulation from "./components/Memory Simulation/MemorySimulation";
import PageSection from "./components/Page Section/PageSection";
import ResultSection from "./components/Result Section/ResultSection";

function App() {
  const [logicalAddress, setLogicalAddress] = useState("");
  const [translations, setTranslations] = useState([]);
  const [pageTable, setPageTable] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
  });

  const handleLoadPage = (pageNum, frameNum) => {
    setPageTable((prev) => ({
      ...prev,
      [pageNum]: frameNum,
    }));
  };

  const handleTranslate = () => {
    if (!logicalAddress.trim()) return;

    const logAddr = Number.parseInt(logicalAddress, 10);

    if (isNaN(logAddr) || logAddr < 0 || logAddr >= 8191) {
      alert("Please enter a valid logical address (0-8191)");
      return;
    }

    const PAGE_SIZE = 1024; // 1 KB
    const pageNum = Math.floor(logAddr / PAGE_SIZE);
    const offset = logAddr % PAGE_SIZE;

    const frameNum = pageTable[pageNum];
    const isPageFault = frameNum === null;

    const translation = {
      id: Date.now(),
      logicalAddress: logAddr,
      pageNumber: pageNum,
      offset,
      frameNumber: frameNum,
      pageFault: isPageFault,
      physicalAddress: isPageFault ? null : frameNum * PAGE_SIZE + offset,
    };

    setTranslations((prev) => [translation, ...prev].slice(0, 10));

    if (isPageFault) {
      // Simulate page load
      const availableFrames = [];
      for (let i = 0; i < 4; i++) {
        const isFrameUsed = Object.values(pageTable).includes(i);
        if (!isFrameUsed) availableFrames.push(i);
      }

      if (availableFrames.length > 0) {
        const frameToUse = availableFrames[0];
        setTimeout(() => {
          handleLoadPage(pageNum, frameToUse);
        }, 500);
      }
    }

    setLogicalAddress("");
  };

  return (
    <div className="main-container">
      <div className="main-frame">
        {/* Hero section */}
        <div className="header-section">
          <h1>Virtual Memory Simulator</h1>
          <p>
            Demonstrate basic virtual memory operation with paging and page
            fault handling
          </p>
        </div>

        {/* Main content section */}
        <div className="card-container">
          <div className="card-header">
            <h2 className="card-title">Address Translation</h2>
            <p className="card-description">Enter logical addresses (0-8191)</p>
          </div>
          <div className="card-content">
            <input
              className="input w-full"
              type="number"
              min="0"
              max="8191"
              placeholder="Enter logical address"
              value={logicalAddress}
              onChange={(e) => setLogicalAddress(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleTranslate()}
            />
            <button className="button w-full" onClick={handleTranslate}>
              Translate Address
            </button>
          </div>
        </div>

        {/* body section */}
        <div className="body-section">
          <PageSection pageTable={pageTable} />
          <MemorySimulation pageTable={pageTable}  />
        </div>
        <ResultSection translations={translations}/>
      </div>
    </div>
  );
}

export default App;
