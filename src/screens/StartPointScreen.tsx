import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';

type StartPointScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'CreateRoutine'
>;

const StartPointScreen = () => {
  const navigation = useNavigation<StartPointScreenNavigationProp>();
  const [selectedDatetime, setSelectedDatetime] = useState<Date>(new Date());

  const handleSave = () => {
    // Pass the selected time back to the previous screen
    navigation.navigate('CreateRoutine', {
      startPoint: selectedDatetime.toTimeString().slice(0, 5),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start Point</Text>
      <View style={styles.pickerContainer}>
        <TouchableOpacity style={styles.pickerButtonActive}>
          <Text style={styles.pickerButtonTextActive}>Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pickerButtonDisabled}>
          <Text style={styles.pickerButtonTextDisabled}>Free-form</Text>
        </TouchableOpacity>
      </View>
      <DateTimePicker
        value={selectedDatetime}
        onChange={e => {
          const datetime = new Date(e.nativeEvent.timestamp);
          setSelectedDatetime(datetime);
        }}
        mode="time"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Done</Text>
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
    textAlign: 'center',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  pickerButtonActive: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  pickerButtonDisabled: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  pickerButtonTextActive: {
    color: '#fff',
    fontSize: 16,
  },
  pickerButtonTextDisabled: {
    color: '#fff',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default StartPointScreen;
