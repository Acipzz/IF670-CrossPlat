import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


// Data notifikasi
const notifications = [
  {
    id: '1',
    title: 'Saldo 7RB-mu Bisa Jadi iPhone 15',
    message: 'Mulai pk. 00.00 WIB, Kak! Ambil juga Gratis Ongkir Rp0 & Diskon 50% s/d 100RB-mu di Gajian Sale 👉',
    time: '3 menit lalu',
  },
  {
    id: '2',
    title: 'Promo Diskon 70% di Flash Sale!',
    message: 'Jangan ketinggalan, Kak! Flash Sale dimulai jam 12.00 siang, dapatkan barang impianmu sekarang!',
    time: '10 menit lalu',
  },
  {
    id: '3',
    title: 'Voucher Gratis Ongkir Sudah Aktif',
    message: 'Gunakan voucher ini sebelum habis! Berlaku sampai jam 23.59 WIB malam ini.',
    time: '30 menit lalu',
  },
  {
    id: '4',
    title: 'Update Status Pesananmu',
    message: 'Pesananmu sedang dalam perjalanan, Kak! Siap-siap untuk menerima barangnya.',
    time: '1 jam lalu',
  },
  {
    id: '5',
    title: 'Hanya Hari Ini! Cashback 20%',
    message: 'Gunakan kode VOUCH20 dan dapatkan cashback 20% hingga 50RB.',
    time: '2 jam lalu',
  },
  {
    id: '6',
    title: 'Barang Impianmu Ada di Flash Sale!',
    message: 'Flash Sale dimulai pukul 18.00 WIB. Siap-siap cek aplikasi!',
    time: '5 jam lalu',
  },
  {
    id: '7',
    title: 'Saldo Minim, Top-Up Sekarang!',
    message: 'Isi saldo sekarang untuk menikmati lebih banyak promo eksklusif.',
    time: '6 jam lalu',
  },
];

const Notifikasi = () => {
  const navigation = useNavigation();

  const renderNotification = (notification) => (
    <View key={notification.id} style={styles.notificationCard}>
      <View style={styles.notificationHeader}>
        <Text style={styles.notificationTitle}>{notification.title}</Text>
        <Text style={styles.notificationTime}>{notification.time}</Text>
      </View>
      <Text style={styles.notificationMessage}>{notification.message}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Notifikasi</Text>
      </View>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {notifications.map(renderNotification)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    paddingRight: 30,
  },
  backButton: {
    paddingLeft: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  notificationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    marginRight: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#888',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
    lineHeight: 20,
  },
});

export default Notifikasi;