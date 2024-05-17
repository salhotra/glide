import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';

type RoutineScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'Routine'
>;

// TODO: route prop should be coming from global definition
interface Props {
  route: {
    params: {
      routine: {
        id: string;
        name: string;
      };
    };
  };
}

const RoutineScreen = ({route}: Props) => {
  const {routine} = route.params;
  const navigation = useNavigation<RoutineScreenNavigationProp>();
  const tasks = [
    {id: '1', description: 'Charge your electronics', timeOffset: '1m'},
    {id: '2', description: 'Get ready for meeting', timeOffset: '1m'},
    // Add more tasks here or fetch from the database
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{routine.name}</Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskDescription}>{item.description}</Text>
            <Text style={styles.taskTime}>{item.timeOffset}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.playButtonText}>▶</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('CreateTask', {routineId: routine.id})
        }>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  taskDescription: {
    fontSize: 16,
  },
  taskTime: {
    fontSize: 14,
    color: '#666',
  },
  playButton: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    backgroundColor: '#333',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#333',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default RoutineScreen;
