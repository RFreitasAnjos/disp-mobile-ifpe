import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ButtonRecover = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Recover")}
      >
        <Text style={styles.buttonText}>Esqueceu a senha?</Text>
        <Ionicons
          name="ios-help-circle-outline"
          size={20}
          color="#000"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
  icon: {
    marginLeft: 8,
  },
});

export default ButtonRecover;
