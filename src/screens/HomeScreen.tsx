import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import RoutineCard from '../components/RoutineCard';
import AddButton from '../components/AddButton';
import {RootStackParamList} from '../types/navigation';

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const routines = [
    {
      id: '1',
      name: 'Morning Routine',
      time: '9:45am - 9:47am',
      days: 'S, M, T, W, T, F, S',
    },
    // Add more routines here or fetch from the database
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Nice to meet you, touch the screen to get down!
      </Text>
      <FlatList
        data={routines}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <RoutineCard
            name={item.name}
            time={item.time}
            days={item.days}
            onPress={() => navigation.navigate('Routine', {routine: item})}
          />
        )}
      />
      <AddButton onPress={() => navigation.navigate('CreateRoutine')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  greeting: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
});

export default HomeScreen;
