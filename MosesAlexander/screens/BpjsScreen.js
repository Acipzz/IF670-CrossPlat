import React, { useContext, useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TransactionContext } from './TransactionContext';
import { Feather } from '@expo/vector-icons';

const BpjsScreen = () => {
  const { transactionData, updateTransactionData } = useContext(TransactionContext); // Gunakan context
  const [errorMessage, setErrorMessage] = useState('Nomor BPJS tidak valid.'); // Pesan error default
  
  const navigation = useNavigation(); // Gunakan useNavigation untuk navigasi

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


  // Data pilihan nominal BPJS (kelipatan Rp50.000)
  const bpjsOptions = Array.from({ length: 12 }, (_, i) => ({
    price: (i + 1 ) * 50000, // Harga dalam rupiah
    value: i + 1 + " Bulan" // Menunjukkan bulan untuk pembayaran
  }));

  // Fungsi untuk memvalidasi nomor BPJS
  const handleBpjsIdChange = (input) => {
    updateTransactionData('bpjsId', input);
    const validationError = validateBpjsId(input);
    setErrorMessage(validationError);
  };

  const renderOption = ({ item }) => (
    <TouchableOpacity 
      style={styles.optionCard} 
      onPress={() => handleOptionPress(item, navigation, 'PaymentBPJS')}
    >
      <Text style={styles.optionValue}>{item.value}</Text>
      <Text style={styles.optionPrice}>Rp {item.price.toLocaleString()}</Text>
    </TouchableOpacity>
  );
  

  const handleOptionPress = (nominalData) => {
    updateTransactionData('packageData', nominalData); // Simpan nominal yang dipilih di context
    navigation.navigate('PaymentBPJS'); // Navigasi ke halaman pembayaran BPJS
  };

  const isValidBpjsId = errorMessage === "";

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>BPJS</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errorMessage && { borderColor: 'red' }]} // Warnai merah jika error
          placeholder="Contoh: 0123456789012"
          value={transactionData.bpjsId}
          onChangeText={handleBpjsIdChange}
          keyboardType="numeric"
        />
      </View>

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {isValidBpjsId && (
        <FlatList
          data={bpjsOptions} // Gunakan bpjsOptions yang baru
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
const validateBpjsId = (bpjsId) => {
  // Jumlah digit harus 13 dan diawali dengan angka nol
  if (bpjsId.length !== 13) {
    return "Nomor BPJS harus terdiri dari 13 digit.";
  }
  if (bpjsId[0] !== '0') {
    return "Nomor BPJS harus diawali dengan angka 0.";
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
    paddingTop: 20,
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

export default BpjsScreen;
