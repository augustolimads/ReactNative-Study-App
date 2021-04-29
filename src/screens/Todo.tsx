import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Container } from "../components/Containers/Container";
import { colors } from "../constants/colors";

export function Todo() {
  const [entries, setEntries] = useState("");
  const [listTodo, setListTodo] = useState<string[]>([]);

  function addItemTodo() {
    if (entries) {
      setListTodo((currentList) => [...currentList, entries]);
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {listTodo &&
          listTodo.map((goal, index) => (
            <View key={index} style={styles.cardList}>
              <Text>{goal}</Text>
            </View>
          ))}
      </ScrollView>
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
