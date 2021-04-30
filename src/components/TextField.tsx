import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { colors } from "../constants/colors";

interface TextFieldProps {
    value: any;
    onChangeText: any;
}

const TextField = ({value, onChangeText, ...rest}:TextFieldProps) => {
  return (
    <TextInput
      placeholder="Course Goal"
      value={value}
      onChangeText={onChangeText}
      style={styles.formInput}
      {...rest}
    />
  );
};

export default TextField;

const styles = StyleSheet.create({
    formInput: {
        backgroundColor: colors.white,
        borderRadius: 4,
        marginRight: 8,
        padding: 4,
        width: '100%'
      },
});
