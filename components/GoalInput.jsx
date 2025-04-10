import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { useState } from 'react';

export const GoalInput = ({ onNewGoal }) => {
  const [goalContent, setGoalContent] = useState('');

  const goalInputHandler = (content) => {
    setGoalContent(content);
  };

  const newGoalHandler = () => {
    onNewGoal(goalContent);
    setGoalContent('');
  };

  return (
    <View style={styles.addGoalContainer}>
      <Text style={styles.h1}>Add new goal</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal"
          onChangeText={goalInputHandler}
          value={goalContent}
        />
        <Button title="Confirm" onPress={newGoalHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000028',
    marginBottom: 8,
  },

  addGoalContainer: {
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },

  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 6,
  },
});
