import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TransactionContext } from './TransactionContext';
import { Feather } from '@expo/vector-icons';

const logos = {
  Telkomsel: require('../assets/Telkomsel.png'),
  Indosat: require('../assets/indosat.png'),
  XL: require('../assets/XL.png'),
  Tri: require('../assets/Tri.png'),
  Smartfren: require('../assets/Smartfren.png'),
};

const PaymentPulsa = ({ navigation }) => {
  const { transactionData } = useContext(TransactionContext); // Ambil data dari context
  
  // Debug: Log data dari context
  console.log('Transaction Data:', transactionData);

  // Mengambil informasi paket dan nomor telepon dari transactionData
  const { packageData, phoneNumber } = transactionData; 

  // Debug: Cek apakah data sudah terisi
  if (!packageData || !phoneNumber) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Data transaksi belum diisi.</Text>
      </View>
    );
  }

  const operator = getOperatorLabel(phoneNumber);
  const logo = logos[operator];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Konfirmasi Pembayaran</Text>
      </View>

      <View style={styles.packageInfo}>
        <Image source={logo} style={{ width: 100, height: 100 }} resizeMode="contain" />
        <Text style={styles.packageLabel}>Operator: {getOperatorLabel(phoneNumber)}</Text> 
        <Text style={styles.phoneNumber}>Nomor Telepon: {phoneNumber}</Text>
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
        <View style={styles.totalRow}>
          <Text>Total Pembayaran</Text>
          <Text>Rp {packageData.price.toLocaleString()}</Text>
        </View>
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

// Helper function to determine the operator based on the phone number prefix
const getOperatorLabel = (phoneNumber) => {
  const validPrefixes = {
    Telkomsel: ['0811', '0812', '0813', '0821', '0822', '0823'],
    Indosat: ['0852', '0853', '0814', '0815', '0816'],
    XL: ['0851', '0855', '0856', '0857', '0858'],
    Tri: ['0895', '0896', '0897', '0898', '0899'],
    Smartfren: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'],
  };

  const prefix = phoneNumber.slice(0, 4); // Ambil 4 digit pertama

  for (const [operator, prefixes] of Object.entries(validPrefixes)) {
    if (prefixes.includes(prefix)) {
      return operator;
    }
  }
  
  return 'Unknown Operator'; // Default jika tidak ditemukan
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
  phoneNumber: {
    fontSize: 16,
    marginVertical: 10,
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
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default PaymentPulsa;