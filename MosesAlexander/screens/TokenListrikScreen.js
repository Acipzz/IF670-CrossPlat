import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TransactionContext } from './TransactionContext';

const TokenListrikScreen = () => {
  const { transactionData, updateTransactionData } = useContext(TransactionContext);
  const [errorMessage, setErrorMessage] = useState('ID pelanggan tidak valid.');

  const navigation = useNavigation();

  const tokenOptions = [
    { value: '13,2 kWh', price: 20000 },
    { value: '33,1 kWh', price: 50000 },
    { value: '66,2 kWh', price: 100000 },
    { value: '132,3 kWh', price: 200000 },
    { value: '328,9 kWh', price: 500000 },
    { value: '659,7 kWh', price: 1000000 },
  ];

  const handleCustomerIdChange = (input) => {
    updateTransactionData('customerId', input);
    const validationError = validateCustomerId(input);
    setErrorMessage(validationError);
  };

  const renderOption = ({ item }) => (
    <TouchableOpacity 
      style={styles.optionCard} 
      onPress={() => handleOptionPress(item)}
    >
      <Text style={styles.optionValue}>{item.value}</Text>
      <Text style={styles.optionPrice}>Harga Rp {item.price.toLocaleString()}</Text>
    </TouchableOpacity>
  );

  const handleOptionPress = (tokenData) => {
    updateTransactionData('packageData', tokenData);
    navigation.navigate('PaymentToken'); // Navigasi ke halaman pembayaran
  };

  const isValidCustomerId = errorMessage === "";

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Token Listrik</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errorMessage && { borderColor: 'red' }]}
          placeholder="Contoh: 232111074358"
          value={transactionData.customerId}
          onChangeText={handleCustomerIdChange}
        />
      </View>

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {isValidCustomerId && (
        <FlatList
          data={tokenOptions}
          renderItem={renderOption}
          keyExtractor={(item) => item.value}
          numColumns={2}
          contentContainerStyle={styles.grid}
        />
      )}
    </View>
  );
};

// Fungsi Validasi
const validateCustomerId = (customerId) => {
  if (customerId.length > 0 && customerId[0] === '0') {
    return "ID pelanggan tidak boleh diawali dengan angka 0.";
  }
  
  if (customerId.length > 12) {
    return "ID pelanggan maksimal 12 digit.";
  }

  return ""; // Tidak ada error
};

// Styles
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
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  grid: {
    paddingVertical: 10,
  },
  optionCard: {
    flex: 1,
    margin: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionPrice: {
    fontSize: 14,
    color: '#555',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default TokenListrikScreen;
