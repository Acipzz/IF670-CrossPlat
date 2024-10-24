import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Bayar = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Bayar</Text>
      </View>

      <Image
        source={require('../assets/qris.png')} // Ubah path ini sesuai dengan lokasi logo QRIS Anda
        style={styles.qrisLogo}
        resizeMode="contain"
      />

      <View style={styles.rekeningContainer}>
        <Text style={styles.rekeningLabel}>Rekening Sumber Dana</Text>
        <TextInput style={styles.rekeningText} editable={false} value="Moses Alexander" />
      </View>

        <Text style={styles.qrText}>Tunjukkan QR ini pada kasir</Text>
      <View style={styles.qrPlaceholder}>
        <Image
        source={require('../assets/qr.png')}
        style ={styles.qr} // Ubah path ini sesuai dengan lokasi logo QRIS Anda
        resizeMode="contain"
      />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Pastikan nominal transaksi sudah sesuai. Transaksi dengan QRIS akan langsung mendebet rekening Anda.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    paddingRight: 30,
  },
  qrisLogo: {
    width: 200,
    height: 30,
    alignSelf: 'center',
    marginBottom: 20,
  },
  rekeningContainer: {
    marginVertical: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  rekeningLabel: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  rekeningText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  qrPlaceholder: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 8,
    paddingTop: 10,
  },
  qr: {
    width: 200,
    height: 200,
  },
  qrText: {
    fontSize: 14,
    color: '#000000',
    paddingTop: 10,
  },
  timerText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  infoContainer: {
    marginTop: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});

export default Bayar;
