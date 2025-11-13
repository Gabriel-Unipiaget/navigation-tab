import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import axios from "axios";

import styles from '../css/style';

export default function MenuScreen() {

  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const API_URL = "http://192.168.1.5:3000/tarefas"; // 👈 coloque o IP da sua máquina

  // 🔹 Buscar tarefas
  const carregarTarefas = async () => {
    const res = await axios.get(API_URL);
    setTarefas(res.data);
  };

  // 🔹 Criar nova tarefa
  const adicionarTarefa = async () => {
    if (!titulo) return;
    await axios.post(API_URL, { titulo });
    setTitulo("");
    carregarTarefas();
  };

  // 🔹 Deletar tarefa
  const deletarTarefa = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    carregarTarefas();
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
  <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 22, marginBottom: 10 }}>📝 Minhas Tarefas</Text>

      <TextInput
        placeholder="Nova tarefa..."
        placeholderTextColor="#aaa"
        value={titulo}
        onChangeText={setTitulo}
        style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
        }}
      />

      <Button title="Adicionar" onPress={adicionarTarefa} />

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#222",
              padding: 10,
              marginVertical: 5,
              borderRadius: 8,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#fff" }}>{item.titulo}</Text>
            <Text style={{ color: "tomato" }} onPress={() => deletarTarefa(item._id)}>
              ❌
            </Text>
          </View>
        )}
      />
    </View>
  );
}