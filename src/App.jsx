import "./App.scss";
import MemorySimulation from "./components/Memory Simulation/MemorySimulation";
import PageSection from "./components/Page Section/PageSection";
import ResultSection from "./components/Result Section/ResultSection";

function App() {
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
            />
            <button className="button w-full">
              Translate Address
            </button>
          </div>
        </div>

        {/* body section */}
        <div className="body-section">
          <PageSection />
          <MemorySimulation />
        </div>
        <ResultSection />
      </div>
    </div>
  );
}

export default App;
