import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const TransactionDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { transaction } = route.params; // Ambil data transaksi dari parameter

  // Tambahkan console log untuk memeriksa data transaksi
  console.log("Transaction Data:", transaction);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.merchantName}>Detail Transaksi</Text>
        <View style={styles.detailRow}>
          <Text>Trace No:</Text>
          <Text>{transaction.traceNo}</Text>
        </View>
        <View style={styles.detailRow}>
            <Text>Reference No:</Text>
            <Text>{transaction.referenceNo}</Text>
        </View>
        <View style={styles.detailRow}>
            <Text>Transaction Type:</Text>
            <Text>{transaction.transactionType}</Text>
        </View>
        <View style={styles.detailRow}>
            <Text>Card Type:</Text>
            <Text>{transaction.cardType}</Text>
        </View>
        <View style={styles.detailRow}>
            <Text>Card Number:</Text>
            <Text>{transaction.cardNumber}</Text>
        </View>
        <View style={styles.detailRow}>
            <Text>Batch:</Text>
            <Text>{transaction.batch}</Text>
        </View>
        <View style={styles.detailRow}>
            <Text>Approval Code:</Text>
            <Text>{transaction.approvalCode}</Text>
        </View>
        
        {/* Tampilkan informasi ID yang sesuai berdasarkan jenis transaksi */}
        <View style={styles.detailRow}>
          {transaction.transactionType === 'Pulsa' && (
            <>
              <Text>Phone Number:</Text>
              <Text>{transaction.transactionIdentifier}</Text>
            </>
          )}
          {transaction.transactionType === 'Listrik' && (
            <>
              <Text>PLN ID:</Text>
              <Text>{transaction.transactionIdentifier}</Text>
            </>
          )}
          {transaction.transactionType === 'BPJS' && (
            <>
              <Text>BPJS ID:</Text>
              <Text>{transaction.transactionIdentifier}</Text>
            </>
          )}
        </View>

        <View style={styles.detailRow}>
          <Text>Type:</Text>
          <Text>{transaction.type}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text>Date:</Text>
          <Text>{transaction.date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text>Amount:</Text>
          <Text>{transaction.amount}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  merchantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TransactionDetailScreen;
