import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TokenListrikScreen = () => {
  const [customerId, setCustomerId] = useState('');
  const [errorMessage, setErrorMessage] = useState('ID pelanggan tidak valid.'); // Pesan error default

  const navigation = useNavigation(); // Gunakan useNavigation untuk navigasi

  // Data pilihan token listrik
  const tokenOptions = [
    { value: '20.000', price: 21500 },
    { value: '50.000', price: 51500 },
    { value: '100.000', price: 101500 },
    { value: '200.000', price: 201500 },
    { value: '500.000', price: 501500 },
  ];

  // Fungsi untuk memvalidasi ID pelanggan
  const handleCustomerIdChange = (input) => {
    setCustomerId(input);
    const validationError = validateCustomerId(input);
    setErrorMessage(validationError); // Set pesan error jika ada
  };

  // Fungsi untuk navigasi ke halaman konfirmasi
  const handleOptionPress = (tokenData) => {
    navigation.navigate('PaymentToken', { tokenData, customerId });
  };

  // Fungsi untuk merender kartu token listrik
  const renderOption = ({ item }) => (
    <TouchableOpacity style={styles.optionCard} onPress={() => handleOptionPress(item)}>
      <Text style={styles.optionValue}>{item.value}</Text>
      <Text style={styles.optionPrice}>Harga Rp {item.price.toLocaleString()}</Text>
    </TouchableOpacity>
  );

  // Tampilkan komponen jika nomor valid
  const isValidCustomerId = errorMessage === "";

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Token Listrik</Text>

      {/* Input ID Pelanggan */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errorMessage && { borderColor: 'red' }]} // Warnai merah jika error
          placeholder="Contoh : 232111074358"
          value={customerId}
          onChangeText={handleCustomerIdChange}
          keyboardType="numeric"
        />
      </View>

      {/* Tampilkan Pesan Error Jika Ada */}
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      {/* Render pilihan token listrik hanya jika ID pelanggan valid */}
      {isValidCustomerId && (
        <FlatList
          data={tokenOptions}
          renderItem={renderOption}
          keyExtractor={(item) => item.value}
          numColumns={2} // Menampilkan dalam dua kolom
          contentContainerStyle={styles.grid}
        />
      )}
    </View>
  );
};

// Fungsi Validasi
const validateCustomerId = (customerId) => {
  // Harus diawali dengan angka selain nol
  if (customerId.length > 0 && customerId[0] === '0') {
    return "ID pelanggan tidak boleh diawali dengan angka 0.";
  }
  
  // Jumlah digit harus maksimal 12
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
