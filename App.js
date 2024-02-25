import React, { useReducer, useState } from 'react';
import { View, StyleSheet, Modal, Button, ImageBackground } from 'react-native';
import AddExpenses from './screens/AddExpenses';
import DisplayExpenses from './screens/DisplayExpenses';

const App = () => {
  const [expenses, dispatch] = useReducer(reducer, initialState);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAdd = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
    setModalVisible(false);
  };

  return (
    // <ImageBackground  style={styles.bg}>
    //   <Modal
    //     animationType="slide"
    //     transparent={true}
    //     visible={modalVisible}
    //     onRequestClose={() => setModalVisible(!modalVisible)}
    //   >
    //     <View style={styles.modalView}>
    //       <AddExpenses onAdd={handleAdd} onCancel={() => setModalVisible(false)} />
    //       {/* <DisplayExpenses expenses={expenses} /> */}
    //     </View>
    //   </Modal>
    //   <Button title="My Expenses" onPress={() => setModalVisible(true)} />
    // </ImageBackground>
    
    <View  style={styles.container}>
      <AddExpenses onAdd={handleAdd} onCancel={() => setModalVisible(false)} />
      <DisplayExpenses expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    // Apply other styles if needed
  },
  modalView: {
    // Style your modal view
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  // Add other styles if needed
});


export default App;