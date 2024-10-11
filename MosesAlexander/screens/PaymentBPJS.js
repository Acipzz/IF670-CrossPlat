import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentBPJS = ({ route, navigation }) => {
  const { bpjsData, bpjsNumber } = route.params; // Terima data dari navigasi

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Konfirmasi Pembayaran</Text>

      {/* Informasi Paket yang Dipilih */}
      <View style={styles.packageInfo}>
        <Text style={styles.customerId}>{bpjsNumber}</Text> {/* Tampilkan nomor BPJS */}
        <Text style={styles.packagePrice}>Rp {bpjsData.price.toLocaleString()}</Text> {/* Tampilkan harga */}
      </View>

      {/* Metode Pembayaran */}
      <View style={styles.paymentMethod}>
        <Text style={styles.methodTitle}>Metode Pembayaran</Text>
        <View style={styles.balanceContainer}>
          <Text>Saldo saya</Text>
          <Text>Rp 900.000</Text>
        </View>
        <Text>Rp {bpjsData.price.toLocaleString()}</Text> {/* Tampilkan total harga */}
      </View>

      {/* Detail Pembayaran */}
      <View style={styles.paymentDetails}>
        <Text style={styles.detailsTitle}>Detail Pembayaran</Text>
        <View style={styles.detailRow}>
          <Text>Harga BPJS</Text>
          <Text>Rp {bpjsData.price.toLocaleString()}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text>Biaya Transaksi</Text>
          <Text>Rp 0</Text>
        </View>
        <View style={styles.totalRow}>
          <Text>Total Pembayaran</Text>
          <Text>Rp {bpjsData.price.toLocaleString()}</Text> {/* Tampilkan total harga */}
        </View>
      </View>

      {/* Tombol Konfirmasi */}
      <TouchableOpacity style={styles.confirmButton} onPress={() => alert('Pembayaran Berhasil!')}>
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  packageInfo: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  customerId: {
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
});

export default PaymentBPJS;
