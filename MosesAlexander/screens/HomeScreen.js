import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <Text style={styles.titleProf}>Moses Alexander</Text>
            <Text style={styles.yearProf}>2022</Text>
        </View>
        <Text style={styles.title}>Pilih Transaksi</Text>
        <View style={styles.pembayaran}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('TokenListrik')}
                >
                <Text style={styles.buttonText}>Token Listrik</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Pulsa')}
                >
                <Text style={styles.buttonText}>Pulsa</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('BPJS')}
                >
                <Text style={styles.buttonText}>BPJS</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profile:{
    width: '60%',
    height: 120,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  titleProf:{
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
  },

  yearProf:{
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 5,
  },
  pembayaran: {
    width: '20%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '30%',
    padding: 15,
    backgroundColor: '#007bff',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
