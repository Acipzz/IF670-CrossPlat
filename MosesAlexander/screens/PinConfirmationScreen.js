import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { TransactionContext } from './TransactionContext';

const PinConfirmationScreen = () => {
  const { transactionData, updateTransactionData } = useContext(TransactionContext);
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 3;

  const handlePinChange = (input) => {
    updateTransactionData('pin', input); // Simpan PIN yang dimasukkan ke dalam transactionData
  };

  const handleConfirm = () => {
    const correctPin = '080604'; // Tanggal lahir 08-06-04
    const enteredPin = transactionData.pin; // Ambil PIN dari transactionData

    if (attempts < maxAttempts) {
      if (enteredPin === correctPin) {
        Alert.alert('Pembayaran berhasil!', 'Transaksi Anda telah berhasil diproses.');
        updateTransactionData('transactionStatus', 'success'); // Set status transaksi menjadi sukses
        setAttempts(0); // Reset attempts jika berhasil
      } else {
        setAttempts(attempts + 1);
        if (attempts + 1 >= maxAttempts) {
          Alert.alert('Transaksi gagal', 'Terlalu banyak percobaan yang salah. Transaksi Anda tetap terbuat namun gagal.');
          updateTransactionData('transactionStatus', 'failed'); // Set status transaksi menjadi gagal
        } else {
          Alert.alert('PIN salah', `Silakan coba lagi. Sisa percobaan: ${maxAttempts - (attempts + 1)}`);
        }
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Menghindari penempatan keyboard
      keyboardVerticalOffset={80} // Mengatur offset untuk keyboard
    >
      <Text style={styles.header}>Konfirmasi PIN</Text>
      <Text style={styles.instruction}>Masukkan PIN Anda untuk melanjutkan transaksi:</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Masukkan PIN"
        onChangeText={handlePinChange} // Simpan input ke context
        keyboardType="numeric"
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Konfirmasi</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PinConfirmationScreen;
