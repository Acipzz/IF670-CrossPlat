import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getPosts } from './services/axios';
import Forms from './Forms';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();

    // Listener untuk mendapatkan callback saat kembali dari Forms
    const unsubscribe = navigation.addListener('focus', () => {
      fetchPosts(); // Memperbarui data saat kembali ke Home
    });

    return unsubscribe; // Cleanup listener
  }, [navigation]);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handlePress = (post) => {
    navigation.navigate('Forms', { post });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {posts.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handlePress(item)} style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postBody}>{item.body}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  postContainer: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, // Untuk efek bayangan di Android
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postBody: {
    fontSize: 14,
    color: '#333',
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Forms" 
          component={Forms} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
