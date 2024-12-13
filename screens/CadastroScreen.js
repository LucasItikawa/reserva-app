import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { localEnum } from "../enum/local-enum";
import reservaService from "../services/reservaService";

const CadastroScreen = ({ navigation }) => {
  const [local, setLocal] = useState(1);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const locaisOptions = localEnum.map((local) => ({
    value: local.id,
    label: local.local,
  }));

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  useEffect(() => {
    navigation.setOptions({
      // Defina as opções de navegação aqui
      headerShown: false,
    });
  }, [navigation]);

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
  };

  const handleSubmit = async () => {
    const reserva = {
      local,
      dia: date,
      horario: time,
    };
    try {
      await reservaService.create(reserva);
      alert("Reserva criada com sucesso!");

      navigation.goBack();
    } catch (error) {
      alert("Erro ao criar a reserva.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.headerText}>Cadastro de Reserva</Text>
          <View style={styles.formItem}>
            <Text style={styles.label}>Local</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={local}
                onValueChange={(itemValue) => setLocal(itemValue)}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                mode="dropdown"
              >
                {locaisOptions.map((option) => (
                  <Picker.Item
                    key={option.value}
                    label={option.label}
                    value={option.value}
                  />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.formItem}>
            <Text style={styles.label}>Dia</Text>
            <View style={styles.dateTimePickerContainer}>
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChangeDate}
                style={styles.dateTimePicker}
              />
            </View>
          </View>
          <View style={styles.formItem}>
            <Text style={styles.label}>Horário</Text>
            <View style={styles.dateTimePickerContainer}>
              <DateTimePicker
                value={time}
                mode="time"
                onChange={onChangeTime}
                style={styles.dateTimePicker}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Enviar" onPress={handleSubmit} color="#4CAF50" />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Voltar"
              onPress={() => navigation.goBack()}
              color="#fff"
            />
          </View>
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
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    marginTop: "20%",
    width: "90%",
  },
  headerText: {
    color: "#ffffff",
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  formItem: {
    marginBottom: 20,
  },
  label: {
    color: "#ffffff",
    marginBottom: 5,
    fontSize: 16,
  },
  pickerContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
  },
  pickerItem: {
    textAlign: "center",
  },
  dateTimePickerContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    overflow: "hidden",
  },
  dateTimePicker: {
    width: "100%",
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default CadastroScreen;
