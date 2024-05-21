import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';

import Logo from './assets/Logo.png';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';

export default function Login({ navigation }) {
  const onPress = () => {
    navigation.navigate('Cadastro');
  };

  const onPressLogin = () => {
    navigation.navigate('Tabs');
  };

  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo" />
      <Titulo>Faça Login em sua conta</Titulo>
      <Box w="100%">
        <EntradaTexto label="Email" placeholder="Digite seu email" />
        <EntradaTexto label="Senha" placeholder="Digite sua senha" type='password'/>
      </Box>
      <Botao onPress={onPressLogin}>Entrar</Botao>
      <Link mt={2} color="blue.300" >Esqueceu sua senha?</Link>
      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text  color="gray.500">Não tem uma conta? </Text>
        <TouchableOpacity onPress={onPress}><Text color="blue.500">Registre-se</Text></TouchableOpacity>
      </Box>
    </VStack>
  );
}
