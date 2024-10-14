import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TransactionContext } from './TransactionContext';

const TransactionHistoryScreen = ({ navigation }) => {
  const { transactionHistory } = useContext(TransactionContext); // Ambil riwayat transaksi
  const [searchQuery, setSearchQuery] = useState(''); // State pencarian

  const filteredTransactions = transactionHistory.filter(transaction =>
    transaction.traceNo.includes(searchQuery)
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.transactionItem} 
      onPress={() => navigation.navigate('Detail', { transaction: item })}
    >
      <View style={styles.transactionDetails}>
        <Text style={styles.traceNo}>Trace No. {item.traceNo}</Text>
        <Text style={styles.transactionType}>Paket. {item.type}</Text>
        <Text style={styles.status}>
          {item.status === 'success' ? 'Pembayaran Berhasil!' : item.status}
        </Text>
      </View>
      <View style={styles.transactionMeta}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={32} color="#000" />
        </TouchableOpacity>

        <Text style={styles.header}>Riwayat Transaksi</Text>
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#aaa" />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari no trace..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredTransactions}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
    paddingTop: 30, 
  },
  backButton: {
    paddingRight: 10, 
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  transactionItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingVertical: 10, 
  },
  transactionDetails: { 
    flex: 1, 
  },
  traceNo: { 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
  transactionType: { 
    fontSize: 14, 
    color: '#555', 
  },
  status: { 
    fontSize: 14, 
    color: 'green', 
  },
  transactionMeta: { 
    alignItems: 'flex-end', 
  },
  date: { 
    fontSize: 12, 
    color: '#888', 
  },
  amount: { 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
  separator: { 
    height: 1, 
    backgroundColor: '#ddd', 
    marginVertical: 5, 
  },
});

export default TransactionHistoryScreen;
