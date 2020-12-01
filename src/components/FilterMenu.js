import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import RadioButton from './RadioButton';
import { setView, filter } from '../actions';

const FilterMenu = ({ view, setView, filter, curFilter }) => {
  return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Current View:</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => {setView('Card')}}>
        <View style={styles.item}>
          <RadioButton active={view === 'Card'} />
          <Text style={styles.itemText}>Card View</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {setView('List')}}>
        <View style={styles.item}>
          <RadioButton active={view === 'List'} />
          <Text style={styles.itemText}>List View</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.header}>
        <Text style={styles.headerText}>Filter by:</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => {filter('DateNO')}}>
        <View style={styles.item}>
          <RadioButton active={(curFilter === 'DateNO')} />
          <Text style={styles.itemText}>Date (Newest to Oldest)</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {filter('DateON')}}>
        <View style={styles.item}>
          <RadioButton active={(curFilter === 'DateON')} />
          <Text style={styles.itemText}>Date (Oldest to Newest)</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {filter('Store')}}>
        <View style={styles.item}>
          <RadioButton active={(curFilter === 'Store')} />
          <Text style={styles.itemText}>Store (A-Z)</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {filter('AmountHL')}}>
        <View style={styles.item}>
          <RadioButton active={(curFilter === 'AmountHL')} />
          <Text style={styles.itemText}>Amount Spent (High to Low)</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {filter('AmountLH')}}>
        <View style={styles.item}>
          <RadioButton active={(curFilter === 'AmountLH')} />
          <Text style={styles.itemText}>Amount Spent (Low to High)</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: 'rgb(78,107,52)'
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  item: {
    backgroundColor: 'rgb(78,107,52)',
    paddingHorizontal: 15,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 20
  },
  bg: {
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: .3,
    zIndex: 1
  }
});

const mapStateToProps = (state) => {
  return {
    view: state.view,
    curFilter: state.filter
  };
}

export default connect(mapStateToProps, { setView, filter })(FilterMenu);
