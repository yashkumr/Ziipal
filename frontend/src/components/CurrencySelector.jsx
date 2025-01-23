// src/components/CurrencySelector.js
import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const CurrencySelector = () => {
  const { currency, setCurrency, rates } = useContext(CurrencyContext);
  console.log(rates);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <select
      value={currency}
      onChange={handleChange}
      className="currency-select"
    >
      {Object.keys(rates).map((rate, index) => (
        <option key={index} value={rate}>
          {rate}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;
