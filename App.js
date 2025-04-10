import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  // const [goalList, setGoalList] = useState(
  //   Array.from({ length: 1000 }, (_, i) => `Goal ${i + 1}`)
  // );

  const newGoalHandler = (newGoal) => {
    if (newGoal.trim() === '') {
      return;
    }
    setGoalList((currentGoalList) => [...currentGoalList, newGoal]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onNewGoal={newGoalHandler} />
      <View style={styles.goalListContainer}>
        <Text style={styles.h1}>List of goals</Text>
        <View>
          <FlatList
            data={goalList}
            renderItem={({ item, index }) => {
              return <GoalItem key={index} item={item} />;
            }}
            keyExtractor={(item, idx) => `${item}-${idx}`}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'white',

    padding: 80,
    paddingHorizontal: 16,

    flex: 1,
  },

  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000028',
    marginBottom: 8,
  },

  h2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000028',
  },

  goalListContainer: {
    flex: 6,
    paddingVertical: 10,
  },
});
