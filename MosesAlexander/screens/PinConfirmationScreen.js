import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Keyboard, TouchableOpacity } from 'react-native';
import { TransactionContext } from './TransactionContext';
import { useNavigation } from '@react-navigation/native'; 
import { Feather } from '@expo/vector-icons'; 


const PinConfirmationScreen = () => {
  const { transactionData, updateTransactionData } = useContext(TransactionContext);
  const maxPinLength = 6; // Panjang PIN maksimal
  const correctPin = '080604'; // PIN yang benar
  const [isError, setIsError] = useState(false); // Menyimpan status kesalahan PIN
  const inputRef = useRef(null); // Reference untuk TextInput
  const navigation = useNavigation(); // Gunakan untuk navigasi ke layar lain

  useEffect(() => {
    // Mengecek PIN ketika panjang PIN mencapai 6 angka
    if (transactionData.pin.length === maxPinLength) {
      handleConfirm(transactionData.pin);
    }
  }, [transactionData.pin]);

  useEffect(() => {
    // Reset PIN ketika screen PinConfirmationScreen dilepaskan/unmounted
    return () => {
      updateTransactionData('pin', ''); // Reset PIN ketika keluar dari layar
    };
  }, []); // Array kosong untuk memastikan ini dijalankan saat unmount

  const handlePinChange = (input) => {
    // Reset error state ketika pengguna mulai memasukkan PIN baru
    if (isError) setIsError(false);
    
    // Hanya simpan angka selama kurang dari atau sama dengan 6 digit
    if (input.length <= maxPinLength) {
      updateTransactionData('pin', input);
    }
  };

  const handleConfirm = (enteredPin) => {
    if (enteredPin === correctPin) {
      Alert.alert('Pembayaran berhasil!', 'Transaksi Anda telah berhasil diproses.');
      updateTransactionData('transactionStatus', 'success');
      Keyboard.dismiss(); // Menyembunyikan keyboard setelah PIN benar

      // Setelah PIN benar, Anda bisa melakukan navigasi ke layar lain atau reset context di sini
      navigation.goBack(); // Atau navigasi ke layar lain
    } else {
      setIsError(true); // Set status kesalahan ke true
      setTimeout(() => {
        updateTransactionData('pin', ''); // Reset PIN setelah beberapa saat
        setIsError(false); // Reset status kesalahan setelah reset PIN
        if (inputRef.current) {
          inputRef.current.focus(); // Fokus kembali ke input setelah error direset
        }
      }, 1500); // Waktu delay 1,5 detik sebelum mereset PIN
    }
  };

  return (
    <View style={styles.container}>
      {/* Icon panah kiri untuk navigasi kembali */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Feather name="arrow-left" size={32} color="#000" />
      </TouchableOpacity>

      <Text style={styles.header}>Masukkan PIN Anda</Text>
      <Text style={isError ? styles.errorText : styles.instruction}>
        {isError ? 'PIN salah. Silahkan coba lagi.' : 'Masukkan PIN aplikasi Anda.'}
      </Text>

      <View style={styles.pinContainer}>
        {/* Indikator lingkaran untuk setiap angka yang dimasukkan */}
        {Array.from({ length: maxPinLength }).map((_, index) => (
          <View
            key={index}
            style={index < transactionData.pin.length
              ? isError ? styles.errorCircle : styles.filledCircle
              : styles.emptyCircle}
          />
        ))}
      </View>

      {/* TextInput digunakan untuk menangkap input, namun diberi ukuran kecil agar tidak terlihat */}
      <TextInput
        ref={inputRef} // Menggunakan ref untuk memanggil fokus pada TextInput
        style={styles.hiddenInput}
        value={transactionData.pin}
        onChangeText={handlePinChange}
        keyboardType="numeric" // Menampilkan keypad numerik bawaan
        maxLength={maxPinLength} // Batasan input maksimal 6 digit
        autoFocus={true} // Fokus otomatis pada input
        secureTextEntry={true} // Agar input terlihat seperti PIN (disembunyikan)
        editable={!isError} // Mematikan input saat sedang dalam mode error
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40, // Adjust sesuai kebutuhan layout
    left: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    marginBottom: 20,
    color: 'orange', // Ubah teks jadi oranye ketika PIN salah
    textAlign: 'center',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  filledCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#007bff',
    margin: 10,
  },
  emptyCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#dcdcdc',
    margin: 10,
  },
  errorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'orange', // Warna oranye ketika PIN salah
    margin: 10,
  },
  hiddenInput: {
    width: 1, // Ukuran input dibuat kecil agar tidak terlihat
    height: 1, // Ukuran input dibuat kecil agar tidak terlihat
    opacity: 0.01, // Agar tetap menerima input namun tidak terlihat
  },
});

export default PinConfirmationScreen;
