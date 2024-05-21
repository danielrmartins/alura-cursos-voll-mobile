import { Box, ScrollView, Text, VStack } from "native-base";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";
import { Titulo } from "../components/Titulo";
import { CardConsulta } from "../components/CardConsulta";

export default function Explorar() {
  return (
    <ScrollView flex={1} bgColor='white'>
    <VStack flex={1} p={5}>
    <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
      <EntradaTexto placeholder="Digite a especialidade" label="Especialidade"/>
      <EntradaTexto placeholder="Digite sua localização" label="Localização"/>
      <Botao mt={3} mb={3}>Buscar</Botao>
    </Box>
    <Titulo color="blue.500" alignSelf="center">Resultado da Busca</Titulo>
    {[1, 2 , 3].map((i) => (
      <VStack key={i} flex={1}>
        <CardConsulta especialidade="Cardiologista" foto="https://github.com/andreocunha.png" nome="Romeu"/>
      </VStack>
    ))}
    </VStack>
    </ScrollView>
  );
};