import React, { useState } from "react";

function FDCalculator({ updateCumulativeReturn }) {
  const [principalAmount, setPrincipalAmount] = useState("");
  const [years, setYears] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const calculateFD = () => {
    const principalAmountFloat = parseFloat(principalAmount);
    const yearsInt = parseInt(years);
    const interestRateFloat = parseFloat(interestRate);

    if (
      !isNaN(principalAmountFloat) &&
      !isNaN(yearsInt) &&
      !isNaN(interestRateFloat)
    ) {
      const futureValue =
        principalAmountFloat * (1 + (interestRateFloat / 100) * yearsInt);
      updateCumulativeReturn(futureValue);
    }
  };

  return (
    <div>
      <h2>FD Return Calculator</h2>
      <label>
        Principal Amount:
        <input
          type="number"
          value={principalAmount}
          onChange={(e) => setPrincipalAmount(e.target.value)}
        />
      </label>
      <label>
        Investment Duration (in years):
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </label>
      <label>
        Expected Annual Interest Rate (%):
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </label>
      <button onClick={calculateFD}>Calculate</button>
    </div>
  );
}

export default FDCalculator;
