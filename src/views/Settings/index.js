import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { logout, setView, filter } from '../../actions';
import Button from '../../components/Button';
import Topbar from '../../components/Topbar';
import RadioButton from '../../components/RadioButton';

const Settings = ({ username, logout, view, setView, curFilter, filter }) => {
  const [staySignedIn, setStaySignedIn] = React.useState(false);

  const handleLogout = async () => {
    await AsyncStorage.setItem(`SIGNEDIN:USER`, '');
    logout();
  }

  const setLoginOption = async (option) => {
    if (option) await AsyncStorage.setItem(`SIGNEDIN:USER`, username);
    else await AsyncStorage.setItem(`SIGNEDIN:USER`, '');
    setStaySignedIn(option);
  }

  const loadLoginOption = async () => {
    let signedIn = await AsyncStorage.getItem(`SIGNEDIN:USER`);
    setStaySignedIn((signedIn) ? true : false);
  }

  React.useEffect(() => {
    loadLoginOption();
  }, []);

  return (
    <Topbar title='Settings'>
      <View style={styles.bg}>
        <ScrollView style={{height: '100%'}}>
          <View style={styles.block}>
            <View style={styles.section}>
              <Text style={styles.radioText}>Signed in as {username}</Text>
              <Button title='Sign Out' onPress={() => {handleLogout()}}/>
            </View>
          </View>

          <View style={styles.block}>
            <View style={styles.section}>
              <Text style={styles.sectionText}>Current View:</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => setView('Card')}>
              <View style={styles.radio}>
                <RadioButton color="rgb(78,107,52)" active={view === 'Card'} />
                <Text style={styles.radioText}>Card View</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => setView('List')}>
              <View style={styles.radio}>
                <RadioButton color="rgb(78,107,52)" active={view === 'List'} />
                <Text style={styles.radioText}>List View</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.block}>
            <View style={styles.section}>
              <Text style={styles.sectionText}>List View:</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => filter('DateNO')}>
              <View style={styles.radio}>
                <RadioButton color="rgb(78,107,52)" active={curFilter === 'DateNO'} />
                <Text style={styles.radioText}>Date (Newest to Oldest)</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => filter('DateON')}>
              <View style={styles.radio}>
                <RadioButton color="rgb(78,107,52)" active={curFilter === 'DateON'} />
                <Text style={styles.radioText}>Date (Oldest to Newest)</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => filter('Store')}>
              <View style={styles.radio}>
                <RadioButton color="rgb(78,107,52)" active={curFilter === 'Store'} />
                <Text style={styles.radioText}>Store (A-Z)</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => filter('AmountHL')}>
              <View style={styles.radio}>
                <RadioButton color="rgb(78,107,52)" active={curFilter === 'AmountHL'} />
                <Text style={styles.radioText}>Amount Spent (High to Low)</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => filter('AmountLH')}>
              <View style={styles.radio}>
                <RadioButton color="rgb(78,107,52)" active={curFilter === 'AmountLH'} />
                <Text style={styles.radioText}>Amount Spent (Low to High)</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>



          <View style={styles.block}>
            <View style={styles.section}>
              <Text style={styles.sectionText}>Sign In Option</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => {setLoginOption(true)}}>
              <View style={styles.radio}>
                <RadioButton color="rgb(78,107,52)" active={staySignedIn} />
                <Text style={styles.radioText}>Stay Signed In</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {setLoginOption(false)}}>
              <View style={styles.radio}>
                <RadioButton color="rgb(78,107,52)" active={!staySignedIn} />
                <Text style={styles.radioText}>Require Sign In</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>





        </ScrollView>
      </View>
    </Topbar>
  );
}

const styles = StyleSheet.create({
  bg: {
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  radioText: {
    marginLeft: 10,
    fontSize: 18
  },
  sectionText: {
    fontSize: 20,
    fontWeight: '500'
  },
  block: {
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: .4
  }
});

const mapStateToProps = (state) => {
  return {
    username: state.login.username,
    view: state.view,
    curFilter: state.filter
  };
}

export default connect(mapStateToProps, { logout, setView, filter })(Settings);
