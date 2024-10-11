import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BPJSScreen = () => {
  const [bpjsNumber, setBpjsNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('Nomor BPJS tidak valid.'); // Pesan error default

  const navigation = useNavigation(); // Gunakan useNavigation untuk navigasi

  // Data pilihan nominal BPJS
  const bpjsOptions = [
    { value: '1 Bulan - Rp 50.000', price: 50000 },
    { value: '2 Bulan - Rp 100.000', price: 100000 },
    { value: '3 Bulan - Rp 150.000', price: 150000 },
    { value: '4 Bulan - Rp 200.000', price: 200000 },
    { value: '5 Bulan - Rp 250.000', price: 250000 },
    { value: '6 Bulan - Rp 300.000', price: 300000 },
    // Tambahkan lebih banyak bulan sesuai kebutuhan
  ];

  // Fungsi untuk memvalidasi nomor BPJS
  const handleBpjsNumberChange = (input) => {
    setBpjsNumber(input);
    const validationError = validateBpjsNumber(input);
    setErrorMessage(validationError); // Set pesan error jika ada
  };

  // Fungsi untuk navigasi ke halaman konfirmasi
  const handleOptionPress = (bpjsData) => {
    navigation.navigate('PaymentBPJS', { bpjsData, bpjsNumber });
  };

  // Fungsi untuk merender kartu BPJS
  const renderOption = ({ item }) => (
    <TouchableOpacity style={styles.optionCard} onPress={() => handleOptionPress(item)}>
      <Text style={styles.optionValue}>{item.value}</Text>
      <Text style={styles.optionPrice}>Harga Rp {item.price.toLocaleString()}</Text>
    </TouchableOpacity>
  );

  // Tampilkan komponen jika nomor valid
  const isValidBpjsNumber = errorMessage === "";

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Pembayaran BPJS</Text>

      {/* Input Nomor BPJS */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errorMessage && { borderColor: 'red' }]} // Warnai merah jika error
          placeholder="Contoh: 0123456789012"
          value={bpjsNumber}
          onChangeText={handleBpjsNumberChange}
          keyboardType="numeric"
        />
      </View>

      {/* Tampilkan Pesan Error Jika Ada */}
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      {/* Render pilihan nominal hanya jika ID BPJS valid */}
      {isValidBpjsNumber && (
        <FlatList
          data={bpjsOptions}
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
const validateBpjsNumber = (bpjsNumber) => {
  // Harus diawali dengan angka nol (0)
  if (bpjsNumber.length > 0 && bpjsNumber[0] !== '0') {
    return "Nomor BPJS harus diawali dengan angka 0.";
  }
  
  // Jumlah digit harus 13
  if (bpjsNumber.length !== 13) {
    return "Nomor BPJS harus terdiri dari 13 digit.";
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

export default BPJSScreen;
