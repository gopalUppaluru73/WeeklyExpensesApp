import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DisplayExpenses = ({ expenses }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Expenses So Far</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item}</Text> // Customize this as needed
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Styles for your container
  },
  title: {
    // Styles for your title
  },
  // Add other styles if needed
});

export default DisplayExpenses;