import React, { useState } from "react";
import SIPCalculator from "../../components/SIPCalculator/SIPCalculator.jsx";
import FDCalculator from "./../componentsSIPCalculator/../../components/../../components/FDCalculator/FDCalculator/FDCalculator.jsx";
import CumulativeReturnChart from "../../components/CumulativeReturnChart/CumulativeReturnChart.jsx";

const InvestmentTracker = () => {
  const [cumulativeReturn, setCumulativeReturn] = useState(0);
  const [selectedCalculator, setSelectedCalculator] = useState(null);

  const updateCumulativeReturn = (newReturn) => {
    setCumulativeReturn(cumulativeReturn + newReturn);
  };

  const handleCalculatorChange = (calculator) => {
    setSelectedCalculator(calculator);
  };

  return (
    <div className="App">
      <h1>Investment Tracker</h1>
      <div className="calculator-container">
        <div className="calculator-card">
          <h2>Select Calculator:</h2>
          <select
            value={selectedCalculator}
            onChange={(e) => handleCalculatorChange(e.target.value)}
          >
            <option value="">Select Calculator</option>
            <option value="sip">SIP Calculator</option>
            <option value="fd">FD Calculator</option>
          </select>
          {selectedCalculator === "sip" && (
            <SIPCalculator updateCumulativeReturn={updateCumulativeReturn} />
          )}
          {selectedCalculator === "fd" && (
            <FDCalculator updateCumulativeReturn={updateCumulativeReturn} />
          )}
        </div>
        <div className="cumulative-return-card">
          <CumulativeReturnChart cumulativeReturn={cumulativeReturn} />
        </div>
      </div>
    </div>
  );
};

export default InvestmentTracker;
