import { Divider, ScrollView, VStack } from "native-base";

import { CardConsulta } from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import { Botao } from "../components/Botao";

export default function Consultas() {
  return (
    <ScrollView p={5}>
      <Titulo color="blue.500" mb={5}>Minhas consultas</Titulo>
      <Botao mt={5} mb={5}>Agendar nova consulta</Botao>
      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
      <CardConsulta nome='Dr. Andre' especialidade='Cardiologista' foto='https://github.com/andreocunha.png' data='20/04/2023' foiAgendado />
      <Divider mt={5} />
      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
      <CardConsulta nome='Dr. Andre' especialidade='Cardiologista' foto='https://github.com/andreocunha.png' data='20/04/2023' foiAtendido />
      <CardConsulta nome='Dr. Andre' especialidade='Cardiologista' foto='https://github.com/andreocunha.png' data='20/04/2023' foiAtendido />
    </ScrollView>
  );
};