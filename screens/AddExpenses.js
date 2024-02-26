import React, { useReducer } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const initialState = {
  description: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DESCRIPTION':
      return { ...state, description: action.payload };
    case 'RESET_DESCRIPTION':
      return { ...state, description: '' };
    default:
      return state;
  }
};

const AddExpenses = ({ onAddExpense }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = () => {
    onAddExpense({ description: state.description });
    dispatch({ type: 'RESET_DESCRIPTION' });
  };

  const handleCancel = () => {
    dispatch({ type: 'RESET_DESCRIPTION' });
  };

  return (
    <View style={styles.addExpenses}>
      <TextInput 
        style={styles.input}
        placeholder="Description"
        value={state.description}
        onChangeText={text => dispatch({ type: 'SET_DESCRIPTION', payload: text })}
      />
       <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', borderBottomWidth: 5, borderColor: 'black', width: '80%', paddingBottom: 20 }}>
          <TouchableOpacity style={styles.button}  onPress={handleAdd}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={handleCancel}>
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addExpenses: {
    padding: 10,
    marginTop: 90,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    padding: 20,
    backgroundColor: 'blue',
    borderRadius: 15,
    width: 120,
    marginTop: 40,
    borderColor: 'black',
    borderWidth: 3
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 20,
    borderRadius: 10,
    width: 200,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default AddExpenses;
