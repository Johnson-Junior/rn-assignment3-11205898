import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';

const personImage = require('./assets/person.png');
const womanImage = require('./assets/woman.png'); 
const Icon = require('./assets/Group 2.png'); 

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

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
        <Image source={Icon} ></Image>
           <Text style={{fontWeight:'bold', fontSize: 24 ,marginBottom:15}}>Categories</Text>
        
       <View style={{width:189, height:192,padding:5, backgroundColor:'#fff', borderRadius:15}}>
            <Text style={{fontWeight:'bold', fontSize:18}}>Study</Text>
             <Text>12 Task</Text>
            <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Image source={womanImage} style={styles.buttonImage} />
            </TouchableOpacity>
      </View>
       
       
       <FlatList
          data={tasks}
          renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e2d3',
    padding:10
    
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginLeft:10,
    marginRight:10
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
     alignSelf:'flex-end',
    marginBottom: 10,
  },
  buttonImage: {
    width: 100,
    height: 110,
  },
  task: {
    fontSize: 16,
    marginBottom: 10,
  },
});
