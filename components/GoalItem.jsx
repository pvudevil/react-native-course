import { StyleSheet, Text, Pressable } from 'react-native';
export const GoalItem = ({ index, item, onPress }) => {
  const deleteGoalhandler = () => {
    onPress();
  };

  return (
    <Pressable
      android_ripple={{ color: 'blue', radius: 2.5 }}
      onPress={deleteGoalhandler}
      style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
    >
      <Text key={`${index}`} style={styles.goalItem}>
        {item}
      </Text>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    color: 'white',
    padding: 10,
    marginVertical: 10,

    backgroundColor: '#00ADEF',
    borderRadius: 6,
  },
});
