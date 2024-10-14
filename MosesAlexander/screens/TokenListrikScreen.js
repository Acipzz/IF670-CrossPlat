import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TransactionContext } from './TransactionContext';
import { Feather } from '@expo/vector-icons';

const TokenListrikScreen = () => {
  const { transactionData, updateTransactionData } = useContext(TransactionContext);
  const [errorMessage, setErrorMessage] = useState('ID pelanggan tidak valid.');
  const navigation = useNavigation();

  useEffect(() => {
    // Menyembunyikan bottom navbar ketika masuk ke layar PulsaDataScreen
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' }
    });

    // Mengembalikan bottom navbar saat keluar dari layar PulsaDataScreen
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined
      });
    };
  }, [navigation]);


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
      onPress={() => handleOptionPress(item, navigation, 'PaymentToken')}
    >
      <Text style={styles.optionValue}>{item.value}</Text>
      <Text style={styles.optionPrice}>Rp {item.price.toLocaleString()}</Text>
    </TouchableOpacity>
  );
  

  const handleOptionPress = (tokenData) => {
    updateTransactionData('packageData', tokenData);
    navigation.navigate('PaymentToken'); // Navigasi ke halaman pembayaran
  };

  const isValidCustomerId = errorMessage === "";

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Token Listrik</Text>
      </View>

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
  headerContainer: {
    flexDirection: 'row', // Mengatur back button dan header dalam satu baris
    alignItems: 'center', // Memastikan mereka sejajar secara vertikal
    marginBottom: 20,
    paddingTop: 30,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, // Membuat teks berada di tengah dengan fleksibilitas
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
