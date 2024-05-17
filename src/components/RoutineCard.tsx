import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface RoutineCardProps {
  name: string;
  time: string;
  days: string;
  onPress: () => void;
}

const RoutineCard: React.FC<RoutineCardProps> = ({
  name,
  time,
  days,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardContent}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.daysContainer}>
          {days.split(', ').map((day, index) => (
            <Text key={index} style={styles.day}>
              {day}
            </Text>
          ))}
        </View>
        <Text style={styles.elipse}>...</Text>
        {/* <Ionicons name="ellipsis-horizontal" size={24} color="#999" /> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  daysContainer: {
    flexDirection: 'row',
  },
  day: {
    fontSize: 12,
    color: '#999',
    marginRight: 5,
  },
  elipse: {
    color: '#999',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default RoutineCard;
