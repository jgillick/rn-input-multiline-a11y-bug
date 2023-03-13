import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Multi-line TextInput Accessibility Bug</Text>
      <Text style={styles.text}>
        To test this, enable iOS VoiceOver and then activate the next two
        fields:
      </Text>

      <View style={styles.fieldContainer}>
        <Text style={styles.text}>Single-line text field works</Text>
        <TextInput style={styles.input} placeholder="Single-line text field" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.text}>
          Multi-line text field never announces "is editing" or "insertion
          point"
        </Text>
        <TextInput
          style={[styles.input, styles.inputMultiLine]}
          multiline={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 100,
    gap: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    marginBottom: 5,
  },
  fieldContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  inputMultiLine: {
    minHeight: 40,
  },
});
