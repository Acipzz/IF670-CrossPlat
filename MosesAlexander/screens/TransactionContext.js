import React, { createContext, useState } from 'react';

// Membuat context
export const TransactionContext = createContext();

// Membuat provider untuk TransactionContext
export const TransactionProvider = ({ children }) => {
  const [transactionData, setTransactionData] = useState({
    phoneNumber: '',  // Data untuk layar telepon
    bpjsId: '',       // Data untuk layar BPJS
    plnId: '',        // Data untuk layar token listrik
    selectedPackage: null, // Paket/token yang dipilih, bisa untuk semua transaksi
    pin: '', // Tambahkan field untuk menyimpan PIN
    transactionStatus: '',
  });

  const updateTransactionData = (key, value) => {
    setTransactionData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <TransactionContext.Provider value={{ transactionData, updateTransactionData }}>
      {children}
    </TransactionContext.Provider>
  );
};
