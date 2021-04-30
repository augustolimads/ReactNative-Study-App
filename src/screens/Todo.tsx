import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Container } from "../components/Containers/Container";
import { colors } from "../constants/colors";
import TextField from "../components/TextField";
import uuid from "react-native-uuid";

interface ListTodo {
  key: string;
  value: string;
}

export function Todo() {
  const [entries, setEntries] = useState("");
  const [listTodo, setListTodo] = useState<ListTodo[]>([]);
  const [showModal, setShowModal] = useState(false);

  function addItemTodo() {
    const newKey = uuid.v4();

    if (entries) {
      setListTodo((oldValues) => [
        ...oldValues,
        { key: String(newKey), value: entries },
      ]);
      setEntries("");
      setShowModal(false);
    }
  }

  function deleteItemTodo(key: string) {
    Alert.alert("Deletar item", "Deseja deletar o item?", [
      { text: "Cancelar", style: "cancel", onPress: () => {} },
      {
        text: "Deletar",
        style: "destructive",
        onPress: () => confirmDelete(key),
      },
    ]);
  }

  function confirmDelete(key: string) {
    const newList = listTodo.filter((item) => item.key !== key);
    setListTodo(newList);
  }

  return (
    <Container style={styles.container}>
      <Modal visible={showModal} animationType="slide">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.form}>
            <View style={styles.textField}>
              <TextField value={entries} onChangeText={setEntries} />
            </View>
            <View style={styles.buttonGroup}>
              <View style={styles.button}>
                <Button
                  title="Cancel"
                  onPress={() => {
                    setShowModal(false);
                  }}
                  color={colors.orange}
                />
              </View>
              <View style={styles.button}>
                <Button title="Add" onPress={addItemTodo} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View>
        <Button
          title="Add"
          onPress={() => {
            setShowModal(true);
          }}
        />
      </View>
      <FlatList
        data={listTodo}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.cardList}
            onPress={() => deleteItemTodo(item.key)}
          >
            <Text>{item.value}</Text>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  form: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: "center",
    padding: 20,
    width: "100%",
    backgroundColor: colors.background,
  },
  textField: {
    marginBottom: 20,
  },
  cardList: {
    backgroundColor: colors.white,
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
  },
  buttonGroup: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
