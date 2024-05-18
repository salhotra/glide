import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';

type CreateRoutineScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'CreateRoutine'
>;

const CreateRoutineScreen = () => {
  const navigation = useNavigation<CreateRoutineScreenNavigationProp>();
  const [name, setName] = useState('');
  const [days, setDays] = useState('Select');
  const [startPoint, _setStartPoint] = useState('');
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderCustom, setReminderCustom] = useState("Let's start now!");
  const [times, setTimes] = useState('1 time');
  const [showDaysPicker, setShowDaysPicker] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [showTimesPicker, setShowTimesPicker] = useState(false);

  const handleSave = () => {
    // Save the routine to the database
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollableContainer}>
        <TextInput
          style={styles.nameInput}
          placeholder="ex) Morning Routine"
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity
          onPress={() => setShowDaysPicker(true)}
          style={styles.inputContainer}>
          <Text style={styles.label}>Days</Text>
          <Text style={styles.input}>{days}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('StartPoint')}
          style={styles.inputContainer}>
          <Text style={styles.label}>Start Point</Text>
          <Text style={[styles.input, !startPoint && styles.placeholder]}>
            {startPoint || '(Required) 8:00 / Wake up'}
          </Text>
        </TouchableOpacity>

        <View style={styles.notificationContainer}>
          <Text style={styles.sectionTitle}>Notification</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.label}>Reminder</Text>
            <Switch
              value={reminderEnabled}
              onValueChange={setReminderEnabled}
              thumbColor={reminderEnabled ? '#f5dd4b' : '#f4f3f4'}
              trackColor={{false: '#767577', true: '#81b0ff'}}
            />
          </View>
        </View>

        <TouchableOpacity
          disabled={!reminderEnabled}
          onPress={() => setShowReminderModal(true)}
          style={StyleSheet.compose(
            styles.inputContainer,
            !reminderEnabled && {opacity: 0.5},
          )}>
          <Text style={styles.label}>Reminder Custom</Text>
          <Text style={styles.input}>{reminderCustom}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!reminderEnabled}
          onPress={() => setShowTimesPicker(true)}
          style={StyleSheet.compose(
            styles.inputContainer,
            !reminderEnabled && {opacity: 0.5},
          )}>
          <Text style={styles.label}>Times</Text>
          <Text style={styles.input}>{times}</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Timer type</Text>
          <Text style={styles.input}>Default sound/vibration</Text>
        </View>

        {/* Days Picker Modal */}
        <Modal
          transparent
          visible={showDaysPicker}
          onDismiss={() => setShowDaysPicker(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={days}
                onValueChange={value => setDays(value)}>
                <Picker.Item label="Select" value="Select" />
                <Picker.Item label="Weekday" value="Weekday" />
                <Picker.Item label="Weekend" value="Weekend" />
                <Picker.Item label="Everyday" value="Everyday" />
              </Picker>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setShowDaysPicker(false)}>
                <Text style={styles.modalButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Reminder Custom Modal */}
        <Modal visible={showReminderModal} transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.reminderModalContent}>
              <Text style={styles.modalTitle}>Reminder Custom</Text>
              <TextInput
                style={styles.modalInput}
                value={reminderCustom}
                onChangeText={setReminderCustom}
                maxLength={30}
              />
              <View style={styles.modalActions}>
                <TouchableOpacity onPress={() => setShowReminderModal(false)}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowReminderModal(false)}>
                  <Text style={styles.modalButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Times Picker Modal */}
        <Modal visible={showTimesPicker} transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={times}
                onValueChange={value => setTimes(value)}>
                <Picker.Item label="1 time" value="1 time" />
                <Picker.Item
                  label="5 times (1 min intervals)"
                  value="5 times (1 min intervals)"
                />
                <Picker.Item
                  label="5 times (5 min intervals)"
                  value="5 times (5 min intervals)"
                />
              </Picker>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setShowTimesPicker(false)}>
                <Text style={styles.modalButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollableContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },
  nameInput: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 20,
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
    color: '#333',
  },
  placeholder: {
    color: '#ccc',
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
    borderRadius: 50,
    alignItems: 'center',
    margin: 12,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  modalButton: {
    marginTop: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  reminderModalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CreateRoutineScreen;
