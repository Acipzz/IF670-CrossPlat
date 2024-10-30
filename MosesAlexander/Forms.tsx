import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Text } from 'react-native';
import { updatePost } from './services/axios';

const Forms = ({ route, navigation }) => {
  const { post } = route.params;
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleUpdate = async () => {
    try {
      await updatePost(post.id, title, body);
      navigation.navigate('Home', { updatedPost: { id: post.id, title, body } });
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Update Post</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Update Title"
          style={styles.input}
        />
        <TextInput
          value={body}
          onChangeText={setBody}
          placeholder="Update Body"
          multiline
          style={styles.inputBody}
        />
        <Button title="Update Post" onPress={handleUpdate} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30, // Menjauhkan dari atas layar
    paddingHorizontal: 20, // Memberikan jarak horizontal
  },
  scrollContainer: {
    paddingBottom: 40, // Menambah ruang di bawah untuk scroll
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Jarak antara header dan input
    textAlign: 'center', // Memusatkan teks
    color: '#333', // Warna header
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    height: 50, // Tinggi input untuk title
    backgroundColor: '#f9f9f9', // Warna latar belakang input
  },
  inputBody: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    height: 150, // Tinggi input untuk body
    backgroundColor: '#f9f9f9', // Warna latar belakang input
  },
});

export default Forms;
