import React, { useReducer, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    default:
      return state;
  }
};

const AddExpenses = ({ onAdd, onCancel }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [expense, setExpense] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setExpense}
        value={expense}
        placeholder="Enter Expense Entry"
      />
      <Button title="ADD" onPress={() => dispatch({ type: 'ADD_EXPENSE', payload: expense })} />
      <Button title="Cancel" onPress={onCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Styles for your container
  },
  input: {
    // Styles for your TextInput
  },
  // Add other styles if needed
});

export default AddExpenses;