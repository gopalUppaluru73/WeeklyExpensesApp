import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DisplayExpenses = ({ expenses, onDeleteExpense }) => {
  return (
    <View style={styles.displayExpenses}>
        {expenses.length > 0 && (
            <Text style={styles.heading}>Weekly Expenses So Far</Text>
        )}
      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
        <View style={styles.expenseItem}>
            <Text style={styles.expenseItemText}>{`${item.description}`}</Text>
            <TouchableOpacity onPress={() => onDeleteExpense(index)}>
                <Icon name="delete" size={40} style={{marginLeft: 20}} />
            </TouchableOpacity>
        </View>
        )}
        ListEmptyComponent={<Text style={styles.heading}>No Expenses Yet!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    displayExpenses: {
        padding: 10,
        marginTop: 20,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 5
    },
    expenseItem: {
      display: 'flex',
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginLeft: 20,
      marginVertical: 5,
    },
    expenseItemText: {
      borderRadius: 5,
      borderColor: 'purple',
      borderWidth: 1,
      padding: 16,
      fontSize: 16,
      color: 'black',
      width: 240
    },
});

export default DisplayExpenses;
