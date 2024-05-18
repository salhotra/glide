import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CircularBox from './CircularContainer';
import {Days} from '../constants';

interface RoutineCardProps {
  name: string;
  time: string;
  days: typeof Days;
  onPress: () => void;
}

function isToday(day: string): boolean {
  const today = new Date().toLocaleString('en-us', {weekday: 'short'});
  return day === today;
}

function dayToSingleLetter(day: string): string {
  return day.charAt(0);
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
        <Text style={styles.elipse}>...</Text>
      </View>
      <View>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.daysContainer}>
          {days.map((day, index) => {
            const isTodayDay = isToday(day);
            return (
              <CircularBox
                key={index}
                size={20}
                backgroundColor={isTodayDay ? '#000' : '#fff'}>
                <Text
                  style={StyleSheet.compose(
                    styles.day,
                    isTodayDay
                      ? {
                          color: '#fff',
                        }
                      : {},
                  )}>
                  {dayToSingleLetter(day)}
                </Text>
              </CircularBox>
            );
          })}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fafafa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: '200',
    color: '#333',
  },
  time: {
    fontSize: 12,
    fontWeight: '200',
    color: '#888',
  },
  cardFooter: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  daysContainer: {
    flexDirection: 'row',
  },
  day: {
    fontSize: 10,
    color: '#999',
  },
  elipse: {
    color: '#999',
    fontSize: 24,
    fontWeight: '500',
  },
});

export default RoutineCard;
