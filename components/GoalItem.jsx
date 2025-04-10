import { StyleSheet, Text } from 'react-native';
export const GoalItem = ({ index, item }) => {
  return (
    <Text key={`${index}`} style={styles.goalItem}>
      {item}
    </Text>
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
