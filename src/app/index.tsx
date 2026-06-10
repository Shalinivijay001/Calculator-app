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
  //console.log("Calculator opened in android");

  const operators = ["+", "-", "*", "/"];

  const handlepress = (value: string) => {
    const lastChar = display[display.length - 1];
    if (value === "=") {
      try {
        const result = eval(display).toString();
        setDisplay(result);
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("0");
    } else {
      if (display === "0" || display === "Error") {
        setDisplay(value);
      } else {
        if (operators.includes(lastChar) && operators.includes(value)) {
          setDisplay(display.slice(0, -1) + value);
        } else {
          setDisplay(display + value);
        }
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
                style={[
                  styles.button,
                  ["+", "-", "*", "/", "="].includes(button) &&
                    styles.operatorButton,

                  button === "C" && styles.clearButton,
                ]}
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
    backgroundColor: "#000",
    justifyContent: "flex-end",
  },

  displayContainer: {
    padding: 20,
  },

  displayText: {
    fontSize: 70,
    textAlign: "right",
    color: "white",
    fontWeight: "300",
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
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },

  operatorButton: {
    backgroundColor: "#ff9500",
  },

  clearButton: {
    backgroundColor: "#a5a5a5",
  },
});
