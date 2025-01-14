// src/components/CurrencySelector.js
import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const CurrencySelector = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <select value={currency} onChange={handleChange}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="INR">INR</option>
      <option value="AUD">AUD</option>
    </select>
  );
};

export default CurrencySelector;
