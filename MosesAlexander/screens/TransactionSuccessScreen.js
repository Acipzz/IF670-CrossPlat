import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TransactionContext } from './TransactionContext';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const TransactionSuccessScreen = () => {
  const { transactionData, updateTransactionData } = useContext(TransactionContext);
  const navigation = useNavigation();

  // Pastikan packageData memiliki nilai default
  const packageData = transactionData.packageData || { price: 0, value: 'N/A' };

  const handleClose = () => {
    updateTransactionData('pin', ''); // Reset PIN saat transaksi selesai
    updateTransactionData('packageData', {}); // Reset data transaksi
    navigation.navigate('HomeScreen'); // Kembali ke Home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Pembelian Berhasil!</Text>

      <View style={styles.iconContainer}>
        <MaterialIcons name="check-circle" size={120} color="green" />
      </View>

      <Text style={styles.paymentText}>Pembayaran sebesar</Text>
      <Text style={styles.amountText}>
        Rp {(packageData.price ?? 0).toLocaleString('id-ID')}
      </Text>
      <Text style={styles.dateText}>
        Tanggal Pembelian: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
      </Text>

      <Text style={styles.balanceText}>
        Kamu telah membeli paket sebesar {packageData.value}.
      </Text>

      <TouchableOpacity 
        style={styles.closeButton} 
        onPress={handleClose} // Gunakan fungsi baru
      >
        <Text style={styles.closeButtonText}>Tutup</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Riwayat')}>
        <Text style={styles.detailText}>Lihat detail</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7a7a7a', // Warna abu-abu seperti pada gambar
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  iconContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 20,
    marginBottom: 20,
  },
  paymentText: {
    fontSize: 16,
    color: '#f0f0f0',
    marginBottom: 5,
  },
  amountText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#f0f0f0',
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 30,
  },
  closeButton: {
    backgroundColor: '#cfcfcf', // Warna tombol tutup
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#000',
  },
  detailText: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default TransactionSuccessScreen;