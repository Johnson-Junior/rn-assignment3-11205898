import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';

const personImage = require('./assets/person.png');
const womanImage = require('./assets/woman.png');
const Icon = require('./assets/Group 2.png');

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([
    'Mobile App Development',
    'Web Development',
    'Push ups',
    'API integration',
    'Market Research and Analysis',
    'UI/UX Design',
    'Front-end development',
    'Back-end development',
    'Authentication and Security',
    'Requirement Gathering',
    'Database Design and Implementation',
    'Deployment',
    'Hosting',
    'Marketing and Promotion',
    'Maintenance',
  ]);

  const handleAddTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.heading}>
            <Text style={styles.header}>Hello Devs,</Text>
            <Text style={{ fontWeight: 'bold' }}>12 Task</Text>
          </View>
          <Image source={personImage} style={styles.logo} />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter your task"
          value={task}
          onChangeText={setTask}
        />
        <Image source={Icon} />

        <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 15 }}>
          Categories
        </Text>

        <View style={styles.categoryButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Image source={womanImage} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Study</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={womanImage} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Work</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={womanImage} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Personal</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 15 }}>
          Ongoing Tasks
        </Text>

        <FlatList
          data={ongoingTasks}
          renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
          keyExtractor={(item) => item}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e2d3',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'pace-between',
    alignItems: 'center',
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  heading: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  buttonImage: {
    width: 100,
    height: 110,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  task: {
    fontSize: 16,
    marginBottom: 10,
  },
  categoryButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});