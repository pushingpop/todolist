import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { Task } from "../components/Task";
import Logo from "../../../assets/logo.png";
import Plus from "../../../assets/plus.png";
import Clipboard from "../../../assets/clipboard.png";

import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<{ name: string; check: boolean }[]>([]);
  const [taskName, setTaskName] = useState("");

  function handleTaskAdd() {
    setTasks((prevState) => [...prevState, { name: taskName, check: false }]);
    setTaskName("");
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Remover a task ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task.name !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleTaskCheck(name: string) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.name === name) {
          return { ...task, check: !task.check };
        } else {
          return task;
        }
      })
    );
  }

  function getTaskDone() {
    return tasks.filter((task) => task.check).length;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Image source={Logo} />
        </View>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>
            <Image source={Plus} />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksCount}>
        <View style={styles.taskCountContainer}>
          <Text style={styles.taskCountCreated}>Criadas</Text>
          <Text style={styles.taskCountCreatedNumber}>{tasks.length}</Text>
        </View>
        <View style={styles.taskCountContainer}>
          <Text style={styles.taskCountFinished}>Concluídas</Text>
          <Text style={styles.taskCountCreatedNumber}>{getTaskDone()}</Text>
        </View>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item, i) => item.name + i}
        renderItem={({ item }) => (
          <Task
            key={item.name}
            name={item.name}
            onRemove={() => handleTaskRemove(item.name)}
            onCheck={() => handleTaskCheck(item.name)}
            isCheck={item.check}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyContainer}>
            <View style={styles.divider} />
            <Image source={Clipboard} />
            <Text style={styles.listEmptyTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
