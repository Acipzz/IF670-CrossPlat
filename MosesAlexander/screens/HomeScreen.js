import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TransactionContext } from './TransactionContext';
import { Feather, Foundation, MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const { updateTransactionData } = useContext(TransactionContext);

  const handleOptionSelect = (option) => {
    updateTransactionData('selectedPackage', { type: option });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/union.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>All-U-Need</Text>
      </View>
      <View style={styles.profile}>
        <View style={styles.nameProf}>
          <Text style={styles.titleProf}>Moses Alexander</Text>
          <Text style={styles.yearProf}>2022</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.headerButton}>
            <Feather name="arrow-up-circle" size={30} color="#555" />
            <Text style={styles.headerButtonText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Feather name="arrow-down-circle" size={30} color="#555" />
            <Text style={styles.headerButtonText}>Tarik Tunai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Foundation name="indent-more" size={30} color="#555" />
            <Text style={styles.headerButtonText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.title}>Pilih Transaksi</Text>
      <View style={styles.pembayaran}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleOptionSelect('pulsa');
            navigation.navigate('PulsaData');
          }}
        >
          <MaterialIcons name="smartphone" size={30} color="#fff" />  
          <Text style={styles.buttonText}>Pulsa{'\n'}/Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleOptionSelect('listrik');
            navigation.navigate('TokenListrik');
          }}
        >
          <MaterialIcons name="electric-bolt" size={30} color="#fff" />
          <Text style={styles.buttonText}>Token {'\n'} Listrik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleOptionSelect('bpjs');
            navigation.navigate('BPJS');
          }}
        >
          <MaterialIcons name="health-and-safety" size={30} color="#fff" />
          <Text style={styles.buttonText}>BPJS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Promosi}>
        <Image
          source={require('../assets/promosi.png')}
          style={styles.promoImage}
          resizeMode="contain"
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profile: {
    width: '90%',
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  nameProf: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  titleProf: {
    fontSize: 18,
    marginBottom: 5,
  },
  yearProf: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerButton: {
    alignItems: 'center',
    paddingVertical: 10,
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#dcdcdc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  headerButtonText: {
    marginTop: 8, 
    fontSize: 12,
    color: '#555',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pembayaran: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    paddingVertical: 15,
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: '#007bff',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
  },
  Promosi: {
    width: '90%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
  },
  promoImage: {
    width: '100%',
    height: 200,
  },
});

export default HomeScreen;