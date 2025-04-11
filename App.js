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
import { AddGoalModal } from './components/AddGoalModal';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  // const [goalList, setGoalList] = useState(
  //   Array.from({ length: 1000 }, (_, i) => `Goal ${i + 1}`)
  // );

  const newGoalHandler = (newGoal) => {
    if (newGoal.trim() === '') {
      return;
    }
    setGoalList((currentGoalList) => [...currentGoalList, newGoal]);
  };

  const deleteGoalHandler = (goalId) => {
    setGoalList((currentGoalList) =>
      currentGoalList.filter((_, idx) => idx !== goalId)
    );
  };

  const openModalHandler = () => {
    setIsVisibleModal(true);
  };

  const closeModalHandler = () => {
    setIsVisibleModal(false);
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#00ADEF" onPress={openModalHandler} />
      <AddGoalModal
        isVisible={isVisibleModal}
        onNewGoal={newGoalHandler}
        onCancel={closeModalHandler}
      />
      <View style={styles.goalListContainer}>
        <Text style={styles.h1}>List of goals</Text>
        <View>
          <FlatList
            data={goalList}
            renderItem={({ item, index }) => {
              return (
                <GoalItem
                  index={index}
                  item={item}
                  onPress={() => {
                    deleteGoalHandler(index);
                  }}
                />
              );
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
    flex: 1,

    backgroundColor: 'white',

    padding: 80,
    paddingHorizontal: 16,
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
