import React, {useState} from 'react';
import { Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ContainerCenter } from '../components/Containers/ContainerCenter';
import { colors } from '../constants/colors';

// import { Container } from './styles';

const Second: React.FC = () => {
  const [text, setText] = useState("")
  return (
      <ContainerCenter>
          <Text>Second</Text>
          <TextInput style={styles.form} value={text} onChangeText={setText}/>
          <Text>{text || "Nenhum texto digitado..."}</Text>
      </ContainerCenter>
  );
}

export default Second;

const styles = StyleSheet.create({
  form: {
    backgroundColor: colors.white,
    width: '100%',
    padding: 8,
    borderRadius: 8,
  }
})