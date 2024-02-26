import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addExpensesContainer: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  expensesListContainer: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    marginTop: 20,
    width: '100%',
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'purple',
    borderRadius: 5,
  },
  expenseText: {
    color: 'white',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'skyblue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default styles;
