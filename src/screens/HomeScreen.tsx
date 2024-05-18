import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import RoutineCard from '../components/RoutineCard';
import AddButton from '../components/AddButton';
import {RootStackParamList} from '../types/navigation';
import {Days} from '../constants';

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

function getRandomQuote(): string {
  // List of motivational quotes.
  const quotes = [
    'If I want to change, I need to know why I do certain things.',
    'The secret of getting ahead is getting started.',
    'The best way to predict the future is to create it.',
    'Don’t watch the clock; do what it does. Keep going.',
    'The only way to do great work is to love what you do.',
    'The best preparation for tomorrow is doing your best today.',
    'The future depends on what you do today.',
    'The only limit to our realization of tomorrow will be our doubts of today.',
    'Don’t let yesterday take up too much of today.',
    'It’s not whether you get knocked down, it’s whether you get up.',
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function HomeScreen(): JSX.Element {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const routines = [
    {
      id: '1',
      name: 'Morning Routine',
      time: '9:45am - 9:47am',
      days: Days,
    },
    {
      id: '2',
      name: 'Gym Routine',
      time: '9:45am - 9:47am',
      days: Days,
    },
    {
      id: '3',
      name: 'Night Routine',
      time: '9:45am - 9:47am',
      days: Days,
    },
    // Add more routines here or fetch from the database
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={routines}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Text style={styles.greeting}>{getRandomQuote()}</Text>
        }
        renderItem={({item}) => (
          <RoutineCard
            name={item.name}
            time={item.time}
            days={item.days}
            onPress={() => navigation.navigate('Routine', {routine: item})}
          />
        )}
      />
      <AddButton onPress={() => navigation.navigate('CreateRoutine', {})} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  greeting: {
    fontSize: 22,
    color: '#333',
    marginBottom: 20,
    lineHeight: 30,
    fontWeight: '600',
  },
});

export default HomeScreen;
