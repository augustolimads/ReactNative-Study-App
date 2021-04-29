import React, { useState } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Container } from "../components/Containers/Container";
import { colors } from "../constants/colors";
import uuid from "react-native-uuid";

interface ListTodo {
  key: string;
  value: string;
}

export function Todo() {
  const [entries, setEntries] = useState("");
  const [listTodo, setListTodo] = useState<ListTodo[]>([]);

  function addItemTodo() {
    if (entries) {
      setListTodo((oldValues) => [
        ...oldValues,
        { key: String(uuid.v4), value: entries },
      ]);
      //   setEntries("");
    }
  }

  return (
    <Container style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Course Goal"
          value={entries}
          onChangeText={setEntries}
          style={styles.formInput}
        />
        <Button title="Add" onPress={addItemTodo} color={colors.orange} />
      </View>
      <FlatList
        data={listTodo}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.cardList}>
            <Text>{item.value}</Text>
          </View>
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
    flexDirection: "row",
    marginBottom: 12,
  },
  formInput: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 4,
    marginRight: 8,
    padding: 4,
  },
  cardList: {
    backgroundColor: colors.white,
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
  },
});
