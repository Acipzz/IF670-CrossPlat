import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style = {styles.header}> Data saya dan teman-teman saya</Text>
      {data.map((data, index) =>
        <View key={index} style={styles.card}>
          <Image source={{ uri: data.foto }} style={styles.image} />
          <Text style={styles.name}>{data.nama}</Text>
          <Text style={styles.email}>{data.email}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
  },

  card: {
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
  },

  email: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: "center",
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: 10,
    marginTop: 10,
  },
});
