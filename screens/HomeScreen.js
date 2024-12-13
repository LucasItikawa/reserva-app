import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen = ({ navigation }) => {
  const [steps, setSteps] = useState(0);
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderForm = () => {
    
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <View style={styles.innerContainer}>
        <View style={styles.card}>
          {steps === 0 ? (
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
          ) : (
            <Button title="Voltar" onPress={() => setSteps(0)} />
          )}
          {renderForm()}
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
    width: "80%",
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    color: "#ffffff",
    fontSize: 24,
  },
  card: {
    backgroundColor: "#333333",
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: { marginVertical: 10 },
  buttonWrapper: {
    marginBottom: 10,
    backgroundColor: "#1890ff",
    borderRadius: 5,
    overflow: "hidden",
  },
  buttonLista: {
    marginBottom: 10,
    backgroundColor: "#52c41a",
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default HomeScreen;
