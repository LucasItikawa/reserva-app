import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
  ScrollView,
} from "react-native";
import dayjs from "dayjs";
import { localEnum } from "../enum/local-enum";
import reservaService from "../services/reservaService";

const ListaReservasScreen = ({ navigation }) => {
  const [reservas, setReservas] = useState([]);
  const fetchReservas = async () => {
    const resp = await reservaService.getAll();

    setReservas(resp);
  };
  useEffect(() => {
    fetchReservas();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleDelete = async (id) => {
    const updatedReservas = await reservaService.delete(id);
    console.log(updatedReservas);

    fetchReservas();
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          {reservas?.map((reserva) => (
            <View key={reserva.id} style={styles.card}>
              <Text style={styles.cardTitle}>
                {localEnum.find((l) => l.id === reserva.local).local}
              </Text>
              <Text style={styles.cardText}>
                <Text style={styles.boldText}>Dia:</Text>{" "}
                {dayjs(reserva.dia).format("DD/MM/YYYY HH:mm")}
              </Text>
              <Text style={styles.cardText}>
                <Text style={styles.boldText}>Horário:</Text>{" "}
                {dayjs(reserva.horario).format("HH:mm")}
              </Text>
              <Button
                title="Excluir"
                onPress={() => handleDelete(reserva.id)}
                color="#ff6347"
              />
            </View>
          ))}
          <Button
            title="Voltar"
            onPress={() => navigation.goBack()}
            color="#fff"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    width: "100%",
    height: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    marginTop: "20%",
    width: "100%",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#2a2a2a",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: "90%",
  },
  cardTitle: {
    color: "#ffffff",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  cardText: {
    color: "#d3d3d3",
    fontSize: 16,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default ListaReservasScreen;
