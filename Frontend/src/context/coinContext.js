// src/context/CoinContext.js
import React, { createContext, useContext, useState } from 'react';

const CoinContext = createContext();

export const useCoin = () => useContext(CoinContext);

export const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState(0);

  const addCoins = (amount) => {
    setCoins((prev) => prev + amount);
  };

  const redeemCoins = (amount) => {
    if (coins >= amount) {
      setCoins(coins - amount);
      return true;
    }
    return false;
  };

  return (
    <CoinContext.Provider value={{ coins, addCoins, redeemCoins }}>
      {children}
    </CoinContext.Provider>
  );
};

