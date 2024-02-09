import React, { useState } from "react";

function SIPCalculator({ updateCumulativeReturn }) {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [years, setYears] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const calculateSIP = () => {
    const monthlyInvestmentFloat = parseFloat(monthlyInvestment);
    const yearsInt = parseInt(years);
    const interestRateFloat = parseFloat(interestRate);

    if (
      !isNaN(monthlyInvestmentFloat) &&
      !isNaN(yearsInt) &&
      !isNaN(interestRateFloat)
    ) {
      const monthlyInterestRate = interestRateFloat / 12 / 100;
      const totalMonths = yearsInt * 12;
      const futureValue =
        monthlyInvestmentFloat *
        ((Math.pow(1 + monthlyInterestRate, totalMonths) - 1) /
          monthlyInterestRate) *
        (1 + monthlyInterestRate);
      updateCumulativeReturn(futureValue);
    }
  };

  return (
    <div>
      <h2>SIP Calculator</h2>
      <label>
        Monthly Investment:
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
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
      <button onClick={calculateSIP}>Calculate</button>
    </div>
  );
}

export default SIPCalculator;
