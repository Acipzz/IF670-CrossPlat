import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PulsaDataScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeTab, setActiveTab] = useState('Pulsa'); // Pulsa or Paket Data
  const [errorMessage, setErrorMessage] = useState('Nomor pelanggan tidak valid.'); // Pesan error default

  const navigation = useNavigation(); // Gunakan useNavigation untuk navigasi

  // Data pilihan pulsa
  const pulsaOptions = [
    { value: '5.000', price: 6500 },
    { value: '10.000', price: 11500 },
    { value: '15.000', price: 16500 },
    { value: '20.000', price: 21500 },
    { value: '25.000', price: 26500 },
    { value: '30.000', price: 31500 },
    { value: '40.000', price: 41500 },
    { value: '50.000', price: 51500 },
    { value: '75.000', price: 76500 },
    { value: '100.000', price: 101500 },
  ];

  // Data pilihan paket data
  const dataPackages = [
    { value: '1 GB', price: 10000 },
    { value: '3 GB', price: 25000 },
    { value: '5 GB', price: 40000 },
    { value: '10 GB', price: 75000 },
    { value: '20 GB', price: 130000 },
    { value: '50 GB', price: 250000 },
  ];

  // Fungsi untuk memvalidasi nomor ponsel
  const handlePhoneNumberChange = (input) => {
    setPhoneNumber(input);
    const validationError = validatePhoneNumber(input);
    setErrorMessage(validationError); // Set pesan error jika ada
  };

  // Fungsi untuk navigasi ke halaman konfirmasi
  const handleOptionPress = (packageData) => {
    navigation.navigate('PaymentPulsa', { packageData, phoneNumber });
  };

  // Fungsi untuk merender kartu pulsa/paket data
  const renderOption = ({ item }) => (
    <TouchableOpacity style={styles.optionCard} onPress={() => handleOptionPress(item)}>
      <Text style={styles.optionValue}>{item.value}</Text>
      <Text style={styles.optionPrice}>Harga Rp {item.price.toLocaleString()}</Text>
    </TouchableOpacity>
  );

  // Tampilkan komponen jika nomor valid
  const isValidPhoneNumber = errorMessage === "";

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Pulsa & Paket Data</Text>

      {/* Input Nomor Ponsel */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errorMessage && { borderColor: 'red' }]} // Warnai merah jika error
          placeholder="Contoh : 082370323318"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
        <TouchableOpacity style={styles.iconButton}>
          <Text>📱</Text>
        </TouchableOpacity>
      </View>

      {/* Tampilkan Pesan Error Jika Ada */}
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      {/* Render Tab hanya jika nomor valid */}
      {isValidPhoneNumber && (
        <>
          {/* Tab Selector: Isi Pulsa & Paket Data */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'Pulsa' && styles.activeTab]}
              onPress={() => setActiveTab('Pulsa')}
            >
              <Text style={activeTab === 'Pulsa' ? styles.activeTabText : styles.tabText}>
                Isi Pulsa
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'Paket Data' && styles.activeTab]}
              onPress={() => setActiveTab('Paket Data')}
            >
              <Text style={activeTab === 'Paket Data' ? styles.activeTabText : styles.tabText}>
                Paket Data
              </Text>
            </TouchableOpacity>
          </View>

          {/* Render pilihan sesuai dengan tab aktif */}
          <FlatList
            data={activeTab === 'Pulsa' ? pulsaOptions : dataPackages}
            renderItem={renderOption}
            keyExtractor={(item) => item.value}
            numColumns={2} // Menampilkan dalam dua kolom
            contentContainerStyle={styles.grid}
          />
        </>
      )}
    </View>
  );
};

// Daftar Prefix Operator Resmi di Indonesia
const validPrefixes = [
  '0811', '0812', '0813', '0821', '0822', '0823', // Telkomsel
  '0852', '0853', '0814', '0815', '0816', // Indosat
  '0851', '0855', '0856', '0857', '0858', // XL
  '0895', '0896', '0897', '0898', '0899', // Tri
  '0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889', // Smartfren
];

// Fungsi Validasi
const validatePhoneNumber = (phoneNumber) => {
  // Harus diawali dengan '08'
  if (!phoneNumber.startsWith('08')) {
    return "Nomor harus diawali dengan 08.";
  }
  
  // Jumlah digit harus antara 10 hingga 13
  if (phoneNumber.length < 10 || phoneNumber.length > 13) {
    return "Nomor harus terdiri dari 10 hingga 13 digit.";
  }

  // Cek prefix operator resmi
  const prefix = phoneNumber.slice(0, 4); // Ambil 4 digit awal
  if (!validPrefixes.includes(prefix)) {
    return "Prefix nomor tidak dikenali sebagai operator resmi.";
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  iconButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    color: '#555',
    fontSize: 16,
  },
  activeTabText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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

export default PulsaDataScreen;
