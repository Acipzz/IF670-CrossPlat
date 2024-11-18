import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Platform,
  PermissionsAndroid,
} from "react-native";
import Geolocation from "@react-native-community/geolocation";

export default function App() {
  const [coords, setCoords] = useState(null);

  const getLocation = async () => {
    console.log("Checking permissions...");
    const hasPermission = await hasLocationPermission();
  
    if (!hasPermission) {
      console.log("Permission not granted!");
      Alert.alert("Error", "Location permission not granted");
      return;
    }
  
    console.log("Fetching location...");
    Geolocation.getCurrentPosition(
      (position) => {
        console.log("Position fetched: ", position);
        setCoords(position.coords);
      },
      (error) => {
        console.error("Error fetching position: ", error.message);
        Alert.alert("Error", error.message);
      },
      {
        accuracy: {
          android: "high",
        },
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      }
    );
  };
  

  const hasLocationPermission = async () => {
    if (Platform.OS === "android" && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      console.log("Location permission denied by user.");
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      console.log("Location permission denied by user.");
    }

    return false;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Moses Alexander - 00000069818</Text>
      <Button title="GET GEO LOCATION" onPress={getLocation} />
      {coords && (
        <View style={styles.locationContainer}>
          <Text>Longitude: {coords.longitude}</Text>
          <Text>Latitude: {coords.latitude}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  text: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
  },
  locationContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
