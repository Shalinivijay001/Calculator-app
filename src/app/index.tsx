import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [display, setDisplay] = useState("0");
  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["C", "0", "=", "+"],
  ];

  const handlepress = (value: string) => {
    if (value === "=") {
      setDisplay(eval(display).toString());
    } else if (value === "C") {
      setDisplay("0");
    } else {
      if (display === "0") {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={styles.button}
                onPress={() => handlepress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },

  displayContainer: {
    padding: 20,
  },

  displayText: {
    fontSize: 60,
    textAlign: "right",
  },

  buttonContainer: {
    paddingBottom: 30,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 8,
  },

  button: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
