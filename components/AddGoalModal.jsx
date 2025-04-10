import { Button, StyleSheet, Text, TextInput, View, Modal } from 'react-native';

import { useState } from 'react';

export const AddGoalModal = ({ isVisible, onNewGoal, onCancel }) => {
  const [goalContent, setGoalContent] = useState('');

  const goalInputHandler = (content) => {
    setGoalContent(content);
  };

  const closeModalHandler = () => {
    onCancel();
    setGoalContent('');
  };
  const newGoalHandler = () => {
    onNewGoal(goalContent);
    closeModalHandler();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.h1}>Add new goal</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your goal"
            onChangeText={goalInputHandler}
            value={goalContent}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Confirm" onPress={newGoalHandler} />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={closeModalHandler} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000028',
    marginBottom: 8,
  },

  modalContainer: {
    flex: 1,
    padding: 36,
  },

  inputContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    gap: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 6,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },

  button: {
    flexBasis: '40%',
    flexGrow: 0,
    flexShrink: 1,
  },
});
