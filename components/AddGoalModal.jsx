import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Dimensions,
  Image,
} from 'react-native';

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
        <Image style={styles.image} source={require('../assets/goal.png')} />
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

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#008BBF',
    width: screenWidth,

    flex: 1,
    alignItems: 'center',

    padding: 36,
  },

  h1: {
    fontSize: 30,
    fontWeight: 'bold',

    color: 'white',
    marginBottom: 8,

    flex: 1,
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  inputContainer: {
    flex: 1.5,
    justifyContent: 'flex-start',
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
  },
});
