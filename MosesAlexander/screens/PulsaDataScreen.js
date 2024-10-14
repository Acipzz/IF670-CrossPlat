import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TransactionContext } from './TransactionContext';
import { Feather } from '@expo/vector-icons';

const PulsaDataScreen = () => {
  const { transactionData, updateTransactionData } = useContext(TransactionContext);
  const [errorMessage, setErrorMessage] = useState('Nomor pelanggan tidak valid.');
  const [activeTab, setActiveTab] = useState('Pulsa');
  const navigation = useNavigation();

  useEffect(() => {

    const parentNavigator = navigation.getParent();
    if (parentNavigator) {
      parentNavigator.setOptions({
        tabBarStyle: { display: 'none' }
      });
    }

    // Mengembalikan bottom navbar saat keluar dari layar PulsaDataScreen
    return () => {
      if (parentNavigator) {
        parentNavigator.setOptions({
          tabBarStyle: undefined
        });
      }
    };
  }, [navigation]);


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

  const handlePhoneNumberChange = (input) => {
    updateTransactionData('phoneNumber', input);
    const validationError = validatePhoneNumber(input);
    setErrorMessage(validationError);
  };

  const renderOption = ({ item }) => (
    <TouchableOpacity 
      style={styles.optionCard} 
      onPress={() => handleOptionPress(item)}
    >
      <Text style={styles.optionValue}>{item.value}</Text>
      <Text style={styles.optionPrice}>Rp {item.price.toLocaleString()}</Text>
    </TouchableOpacity>
  );

  const handleOptionPress = (packageData) => {
    updateTransactionData('packageData', packageData); // Simpan packageData di context
    navigation.navigate('PaymentPulsa'); // Navigasi tanpa parameter
  };

  const isValidPhoneNumber = errorMessage === "";

  return (
    <View style={styles.container}>
      {/* Ikon panah kiri di posisi absolut */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Feather name="arrow-left" size={30} color="#000" />
      </TouchableOpacity>

      {/* Teks "Pulsa & Paket Data" di tengah layar */}
      <Text style={styles.header}>Pulsa & Paket Data</Text>

      <Text style={styles.text1}> Nomor Ponsel </Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errorMessage && { borderColor: 'red' }]}
          placeholder="Contoh: 082370323318"
          value={transactionData.phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
      </View>
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Pulsa' && styles.activeTab]}
          onPress={() => setActiveTab('Pulsa')}
        >
          <Text style={activeTab === 'Pulsa' ? styles.activeTabText : styles.tabText}>Isi Pulsa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Paket Data' && styles.activeTab]}
          onPress={() => setActiveTab('Paket Data')}
        >
          <Text style={activeTab === 'Paket Data' ? styles.activeTabText : styles.tabText}>Paket Data</Text>
        </TouchableOpacity>
      </View>

      {isValidPhoneNumber && (
        <FlatList
          data={activeTab === 'Pulsa' ? pulsaOptions : dataPackages} // Pilih data berdasarkan tab aktif
          renderItem={renderOption}
          keyExtractor={(item) => item.value}
          numColumns={2}
          contentContainerStyle={styles.grid}
        />
      )}
    </View>
  );
};

// Validasi Nomor Telepon
const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber.startsWith('08')) {
    return "Nomor harus diawali dengan 08.";
  }
  if (phoneNumber.length < 10 || phoneNumber.length > 13) {
    return "Nomor harus terdiri dari 10 hingga 13 digit.";
  }
  return ""; // Kembalikan string kosong jika valid
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    left: 10, // Jarak kiri dari layar
    top: 50,  // Jarak dari atas
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Tetap berada di tengah layar
    marginTop: 40, // Jarak dari atas untuk menyesuaikan dengan ikon
    marginBottom: 20,
  },
  text1: {
    fontSize: 12,
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    color: '#555',
  },
  activeTabText: {
    color: '#fff',
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
