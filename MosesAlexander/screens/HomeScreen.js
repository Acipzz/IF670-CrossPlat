import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TransactionContext } from './TransactionContext';

const HomeScreen = ({ navigation }) => {
  const { updateTransactionData } = useContext(TransactionContext); // Ambil updateTransactionData dari context

  // Di tempat pemilihan paket, misalnya di HomeScreen.js
const handleOptionSelect = (option) => {
  // Setel selectedPackage berdasarkan pilihan pengguna
  updateTransactionData('selectedPackage', { type: option });
  
  // Setel data yang sesuai berdasarkan pilihan
  if (option === 'pulsa') {
    updateTransactionData('phoneNumber', '08829802093'); // Contoh nomor telepon
  } else if (option === 'listrik') {
    updateTransactionData('plnId', '123456789'); // Contoh PLN ID
  } else if (option === 'bpjs') {
    updateTransactionData('bpjsId', '987654321'); // Contoh BPJS ID
  }
};


  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profile}>
        <View style={styles.nameProf}>
          <Text style={styles.titleProf}>Moses Alexander</Text>
          <Text style={styles.yearProf}>2022</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Tarik Tunai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Transaction Selection */}
      <Text style={styles.title}>Pilih Transaksi</Text>
      <View style={styles.pembayaran}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleOptionSelect('pulsa'); // Setel jenis paket
            navigation.navigate('PulsaData');  // Navigasi ke Pulsa
          }}
        >
          <Text style={styles.buttonText}>Pulsa/Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleOptionSelect('listrik'); // Setel jenis paket
            navigation.navigate('TokenListrik');
          }}
        >
          <Text style={styles.buttonText}>Token Listrik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleOptionSelect('bpjs'); // Setel jenis paket
            navigation.navigate('BPJS');
          }}
        >
          <Text style={styles.buttonText}>BPJS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  profile: {
    width: '90%',
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  nameProf: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  titleProf: {
    fontSize: 18,
    marginBottom: 5,
  },
  yearProf: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
    borderRadius: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  headerButtonText: {
    fontSize: 16,
    color: '#555',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pembayaran: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 15,
    backgroundColor: '#007bff',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
