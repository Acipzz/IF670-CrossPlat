import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Keyboard, TouchableOpacity } from 'react-native';
import { TransactionContext } from './TransactionContext';
import { useNavigation } from '@react-navigation/native'; 
import { Feather } from '@expo/vector-icons'; 

const PinConfirmationScreen = () => {
  const { transactionData, updateTransactionData, addTransactionToHistory } = useContext(TransactionContext); 
  const maxPinLength = 6;
  const correctPin = '080604';
  const [isError, setIsError] = useState(false);
  const inputRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (transactionData.pin.length === maxPinLength) {
      handleConfirm(transactionData.pin);
    }
  }, [transactionData.pin]);

  const handleConfirm = (enteredPin) => {
    if (enteredPin === correctPin) {
      const newTransaction = {
        id: Math.random().toString(),
        traceNo: Date.now().toString().slice(-6),
        type: transactionData.packageData?.value,
        date: new Date().toLocaleString(),
        amount: `Rp ${transactionData.packageData?.price.toLocaleString()}`,
        status: 'Berhasil',
      };

      addTransactionToHistory(newTransaction); // Tambahkan transaksi ke riwayat

      Alert.alert('Pembayaran berhasil!', 'Transaksi Anda telah berhasil diproses.');
      updateTransactionData('transactionStatus', 'success');
      Keyboard.dismiss();
      navigation.navigate('TransactionSuccess');
    } else {
      setIsError(true); // Tampilkan error
      setTimeout(() => {
        updateTransactionData('pin', ''); // Reset PIN
        setIsError(false); // Reset status error
        inputRef.current?.focus(); // Fokus ulang ke input
      }, 1000); 
    }
  };

  const handlePinChange = (input) => {
    if (isError) setIsError(false); // Reset status error
    if (input.length <= maxPinLength) {
      updateTransactionData('pin', input);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Feather name="arrow-left" size={32} color="#000" />
      </TouchableOpacity>

      <Text style={styles.header}>Masukkan PIN Anda</Text>
      <Text style={isError ? styles.errorText : styles.instruction}>
        {isError ? 'PIN salah. Silahkan coba lagi.' : 'Masukkan PIN aplikasi Anda.'}
      </Text>

      <View style={styles.pinContainer}>
        {Array.from({ length: maxPinLength }).map((_, index) => (
          <View
            key={index}
            style={
              index < transactionData.pin.length
                ? isError ? styles.errorCircle : styles.filledCircle
                : styles.emptyCircle
            }
          />
        ))}
      </View>

      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        value={transactionData.pin}
        onChangeText={handlePinChange}
        keyboardType="numeric"
        maxLength={maxPinLength}
        autoFocus
        secureTextEntry
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  filledCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#007bff',
    margin: 10,
  },
  emptyCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#dcdcdc',
    margin: 10,
  },
  errorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    margin: 10,
  },
  hiddenInput: {
    width: 1,
    height: 1,
    opacity: 0.01,
  },
});

export default PinConfirmationScreen;
