import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Button,
  Text,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <View style={styles.innerContainer}>
        <View style={styles.card}>
          <Text style={styles.headerText}>Bem-vindo ao Reserva App</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <Button
                title="Cadastrar reserva"
                onPress={() => navigation.navigate("Cadastro")}
                color="#ffffff"
              />
            </View>
            <View style={styles.buttonLista}>
              <Button
                title="Minhas reservas"
                onPress={() => navigation.navigate("ListaReservas")}
                color="#ffffff"
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    width: "100%",
    height: "100%",
  },
  innerContainer: {
    marginTop: "20%",
    width: "90%",
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    color: "#ffffff",
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#2a2a2a",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
  },
  buttonContainer: {
    marginVertical: 20,
    width: "100%",
  },
  buttonWrapper: {
    marginBottom: 15,
    backgroundColor: "#1890ff",
    borderRadius: 5,
    overflow: "hidden",
  },
  buttonLista: {
    backgroundColor: "#52c41a",
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default HomeScreen;
