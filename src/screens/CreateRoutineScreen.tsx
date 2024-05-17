import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CreateRoutineScreen = () => {
  const navigation = useNavigation();
  const [days, setDays] = useState('Weekday');
  const [startPoint, setStartPoint] = useState('');
  const [reminderEnabled, setReminderEnabled] = useState(false);

  const handleSave = () => {
    // Save the routine to the database
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ex) Morning Routine</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Days</Text>
        <TextInput
          style={styles.input}
          placeholder="Weekday"
          value={days}
          onChangeText={setDays}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Start Point</Text>
        <TextInput
          style={styles.input}
          placeholder="(Required) 8:00 / Wake up"
          value={startPoint}
          onChangeText={setStartPoint}
        />
        {startPoint === '' && (
          <Text style={styles.errorText}>(Required) 8:00 / Wake up</Text>
        )}
      </View>

      <View style={styles.notificationContainer}>
        <Text style={styles.sectionTitle}>Notification</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Reminder</Text>
          <Switch
            value={reminderEnabled}
            onValueChange={setReminderEnabled}
            thumbColor={reminderEnabled ? '#4CAF50' : '#f4f3f4'}
            trackColor={{false: '#767577', true: '#81b0ff'}}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Reminder Custom</Text>
        <TextInput
          style={styles.input}
          placeholder="Let's start now!"
          value="Let's start now!"
          editable={reminderEnabled}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Times</Text>
        <TextInput
          style={styles.input}
          placeholder="1 time"
          value="1 time"
          editable={reminderEnabled}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Timer type</Text>
        <TextInput
          style={styles.input}
          placeholder="Default sound/vibration"
          value="Default sound/vibration"
          // editable={false}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    color: '#ccc',
  },
  closeButton: {
    fontSize: 24,
    color: '#ccc',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  notificationContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

export default CreateRoutineScreen;
