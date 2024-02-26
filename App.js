import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import AddExpenses from './screens/AddExpenses';
import DisplayExpenses from './screens/DisplayExpenses';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses(currentExpenses => [...currentExpenses, expense]);
  };

  const handleDeleteExpense = (index) => {
    setExpenses(currentExpenses => currentExpenses.filter((_, i) => i !== index));
  };

  return (
    <SafeAreaView>
      <ImageBackground source={require('./assets/background.jpg')} style={{height: 100}}>
        <View>
          <AddExpenses onAddExpense={handleAddExpense} />
          <DisplayExpenses expenses={expenses} onDeleteExpense={handleDeleteExpense} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
