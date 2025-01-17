import React, { useState } from "react";
import "./bmi.css";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBmi(bmiValue);
    } else {
      alert("Please enter valid height and weight!");
    }
  };

  return (
    <div className="bmi-page">
  {/* Header Section */}
  <header className="bmi-header">
    <div className="header-logo">💪</div>
    <h1>BMI Calculator</h1>
    <p>Calculate your Body Mass Index to maintain a healthy lifestyle.</p>
  </header>

  {/* Main Content */}
  <div className="bmi-container">
    <div className="bmi-left">
      <h2>Calculate Your BMI</h2>
      <div className="input-group">
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height"
        />
      </div>
      <div className="input-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
        />
      </div>
      <button className="calculate-btn" onClick={calculateBMI}>
        Calculate BMI
      </button>
      {bmi && (
        <div className="bmi-result">
          <h3>Your BMI: {bmi}</h3>
          <p>{getBMICategory(bmi)}</p>
        </div>
      )}
    </div>
    <div className="bmi-right">
      <h2>BMI Categories</h2>
      <ul>
        <li>Underweight: &lt; 18.5</li>
        <li>Normal weight: 18.5–24.9</li>
        <li>Overweight: 25–29.9</li>
        <li>Obesity: BMI 30 or greater</li>
      </ul>
    </div>
  </div>
  <button className="toggle-button margin-center" onClick={() => window.location.href = '/news'}>See Today's News</button>
</div>

  );
};

const getBMICategory = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi >= 18.5 && bmi < 25) return "Normal weight";
  if (bmi >= 25 && bmi < 30) return "Overweight";
  return "Obesity";
};


export default Bmi;
