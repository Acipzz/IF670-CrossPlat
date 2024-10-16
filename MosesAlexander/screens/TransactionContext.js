import React, { createContext, useState } from 'react';

// Membuat context
export const TransactionContext = createContext();

// Membuat provider untuk TransactionContext
export const TransactionProvider = ({ children }) => {
  const [transactionData, setTransactionData] = useState({
    phoneNumber: '',  // Data untuk layar telepon
    bpjsId: '',       // Data untuk layar BPJS
    plnId: '',        // Data untuk layar token listrik
    selectedPackage: null, // Paket/token yang dipilih
    pin: '', // Tambahkan field untuk menyimpan PIN
    transactionStatus: '',
    transactionType: 'SALE', 
    cardType: 'Kartu UNIONPAY CREDIT', 
    cardNumber: '', // Menambahkan cardNumber
    batch: '', // Menambahkan batch
    referenceNo: '', // Menambahkan referenceNo
    approvalCode: '', // Menambahkan approvalCode
  });

  const [transactionHistory, setTransactionHistory] = useState([]); // Riwayat transaksi

  const updateTransactionData = (key, value) => {
    setTransactionData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const addTransactionToHistory = (transaction) => {
    setTransactionHistory((prevHistory) => [transaction, ...prevHistory]);
  };

  // // Fungsi untuk menangani pemilihan paket/token dan menyimpannya di context
  // const handleOptionPress = (packageData, navigation) => {
  //   updateTransactionData('packageData', packageData); // Simpan packageData
  //   navigation.navigate('PaymentPulsa'); // Arahkan ke layar pembayaran
  // };

  return (
    <TransactionContext.Provider
      value={{
        transactionData,
        updateTransactionData,
        transactionHistory,
        addTransactionToHistory,
        // handleOptionPress, // Tambahkan handleOptionPress ke provider
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};