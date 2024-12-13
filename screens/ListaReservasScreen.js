import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

const ListaReservasScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>Minhas Reservas</Text>
        {/* Adicione aqui a lista de reservas */}
        <Button title="Voltar" onPress={() => navigation.goBack()} />
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
    width: "80%",
  },
  headerText: {
    color: "#ffffff",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
});

export default ListaReservasScreen;
