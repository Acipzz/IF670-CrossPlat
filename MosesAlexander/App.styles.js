import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    display: "flex",
    fontFamily: "Roboto_400Regular",
  },
  card: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    width: 325,
    gap: 8,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 999,
  },
  boldText: {
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
  },
  description: {
    width: "100%",
    display: "flex",
    gap: 2,
    fontFamily: "Roboto_400Regular",
  },
});


export default styles;