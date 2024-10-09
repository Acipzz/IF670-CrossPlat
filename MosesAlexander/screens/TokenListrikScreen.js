import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TokenListrikScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeTab, setActiveTab] = useState('Pulsa'); // Pulsa or Paket Data

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Pulsa & Paket Data</Text>

      {/* Input Nomor Ponsel */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contoh : 082370323318"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TouchableOpacity style={styles.iconButton}>
          {/* Icon bisa ditambahkan di sini */}
          <Text>📱</Text>
        </TouchableOpacity>
      </View>

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

      {/* Pesan Peringatan */}
      <View style={styles.warningContainer}>
        <Text style={styles.warningText}>
          Isi ID Pelanggan yang valid untuk menampilkan menu pembelian.
        </Text>
      </View>
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
  warningContainer: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  warningText: {
    color: '#333',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default TokenListrikScreen;
