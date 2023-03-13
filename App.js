import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.text}>Single-line text field works</Text>
      <TextInput style={styles.input} />

      <Text style={styles.text}>
        Multi-line text field never announces "is editing" or "insertion point"
      </Text>
      <TextInput style={styles.input} multiline={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  text: {
    marginBottom: 5,
  },
  input: {
    width: "100%",
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
