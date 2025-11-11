import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native/types_generated/index';

export default function App() {

  const [email, setEmail] = useState('mail');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text>Usuário</Text>
      <TextInput placeholder="Digite seu e-mail"></TextInput>
      <Text>Senha</Text>
      <TextInput placeholder="Digite sua senha"></TextInput>
      <Button title="Entrar"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
