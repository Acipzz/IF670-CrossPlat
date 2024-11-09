import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

export default function App() {
  const [uri, setUri] = useState("");

  const openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setUri(result.assets[0].uri);
    }
  };

  const handleCameraLaunch = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setUri(imageUri);
    }
  };

  const saveToGallery = async () => {
    if (!uri) {
      Alert.alert("No image selected", "Please select an image first.");
      return;
    }

    try {
      const filename = uri.split('/').pop(); // Extract filename from the URI
      const destinationUri = `${FileSystem.documentDirectory}${filename}`;

      // Copy the image to a permanent location
      await FileSystem.copyAsync({
        from: uri,
        to: destinationUri,
      });

      Alert.alert("Success", "Image saved to gallery!");

      // Reset the URI after saving
      setUri("");
    } catch (error) {
      console.log("Error saving photo:", error);
      Alert.alert("Error", "Failed to save photo to gallery.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Select an image from camera or gallery</Text>
      <Button title="Open Image Picker" onPress={openImagePicker} />
      <Button title="Launch Camera" onPress={handleCameraLaunch} />
      {uri ? (
        <>
          <Image source={{ uri }} style={styles.image} />
          <Button title="Save to Gallery" onPress={saveToGallery} />
        </>
      ) : (
        <Text>No image selected</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
