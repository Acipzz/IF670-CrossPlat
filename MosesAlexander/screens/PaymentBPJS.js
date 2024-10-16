import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TransactionContext } from './TransactionContext';
import { Feather } from '@expo/vector-icons';

const PaymentBPJS = ({ navigation }) => {
  const { transactionData } = useContext(TransactionContext); // Ambil data dari context

  console.log('Transaction Data:', transactionData);

  const { packageData, bpjsId } = transactionData; // Ambil data BPJS dan paket dari context

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Konfirmasi Pembayaran</Text>
      </View>

      <View style={styles.packageInfo}>
        <Text style={styles.packageLabel}>ID BPJS: {bpjsId}</Text>
        <Text style={styles.packagePrice}>Paket: {packageData.value}</Text>
        <Text style={styles.packagePrice}>Rp {packageData.price.toLocaleString()}</Text>
      </View>

      {/* Metode Pembayaran */}
      <View style={styles.paymentMethod}>
        <Text style={styles.methodTitle}>Metode Pembayaran</Text>
        <View style={styles.balanceContainer}>
          <Text>Saldo saya</Text>
          <Text>Rp 900.000</Text>
        </View>
        <Text>Total Pembayaran: Rp {packageData.price.toLocaleString()}</Text>
      </View>

      {/* Detail Pembayaran */}
      <View style={styles.paymentDetails}>
        <Text style={styles.detailsTitle}>Detail Pembayaran</Text>
        <View style={styles.detailRow}>
          <Text>Harga Voucher</Text>
          <Text>Rp {packageData.price.toLocaleString()}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text>Biaya Transaksi</Text>
          <Text>Rp 0</Text>
        </View>
        <View style={styles.totalRow}>
          <Text>Total Pembayaran</Text>
          <Text>Rp {packageData.price.toLocaleString()}</Text>
        </View>
      </View>

      {/* Tombol Konfirmasi */}
      <TouchableOpacity 
        style={styles.confirmButton} 
        onPress={() => { 
          navigation.navigate('PinConfirmation'); // Arahkan ke halaman konfirmasi PIN
        }}
      >
        <Text style={styles.confirmButtonText}>Konfirmasi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingRight: 30,
  },
  
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  packageInfo: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  packageLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  packagePrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
  paymentMethod: {
    marginBottom: 20,
  },
  methodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  paymentDetails: {
    marginBottom: 20,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    fontWeight: 'bold',
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

export default PaymentBPJS;