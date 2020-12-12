import React from 'react';
import { View, TextInput, Text, StyleSheet, Button as Btn } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../../components/Button';
import { login } from '../../actions';

const Form = ({ login }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errorText, setErrorText] = React.useState('');
  const [view, setView] = React.useState('login');

  React.useEffect(() => {
    loadLoginOption();
  }, []);

  const loadLoginOption = async () => {
    let signedIn = await AsyncStorage.getItem(`SIGNEDIN:USER`);
    if (signedIn) {
      let receipts = await AsyncStorage.getItem(`${signedIn}:RECEIPTS`);
      login(signedIn, 'saved', JSON.parse(receipts));
    }
  };

  const authorize = async () => {
    let savedPassword = await AsyncStorage.getItem(`USER:${username}`);
    if (savedPassword === password) {
      let receipts = await AsyncStorage.getItem(`${username}:RECEIPTS`);
      login(username, password, JSON.parse(receipts));
    }
    else setErrorText('Username and password do not match.');
  };

  const register = async () => {
    let notAvailable = await AsyncStorage.getItem(`USER:${username}`);
    if (notAvailable) setErrorText('Username already taken.')
    else if (password !== confirmPassword) setErrorText(`Passwords don't match`);
    else {
      await AsyncStorage.setItem(`USER:${username}`, password);
      await AsyncStorage.setItem(`${username}:RECEIPTS`, JSON.stringify([]));
      login(username, password, []);
    }
  }

  if (view === 'login') {
    return (
      <View style={styles.bg}>
        <View style={styles.inputView}>
          <Text style={styles.label}>Username:</Text>
          <View style={styles.input}>
            <TextInput style={styles.inputText} value={username} onChangeText={text => setUsername(text)} textContentType="username"/>
          </View>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Password:</Text>
          <View style={styles.input}>
            <TextInput style={styles.inputText} value={password} secureTextEntry={true} onChangeText={text => setPassword(text)} textContentType="password"/>
          </View>
        </View>

        <View style={styles.errorTextView}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>

        <View style={styles.button}>
          <Btn title='Sign Up' color='rgb(78,107,52)' onPress={() => {setView('signup'); setErrorText('');}}/>
          <Button title='Sign In' onPress={() => { if (username && password) authorize(); else setErrorText('Please fill in all fields.') }}/>
        </View>
      </View>
    );
  }
  else {
    return (
      <View style={styles.bg}>
        <View style={styles.inputView2}>
          <Text style={styles.label}>Username:</Text>
          <View style={styles.input}>
            <TextInput style={styles.inputText} value={username} onChangeText={text => setUsername(text)} textContentType="username"/>
          </View>
        </View>

        <View style={styles.inputView2}>
          <Text style={styles.label}>Password:</Text>
          <View style={styles.input}>
            <TextInput style={styles.inputText} value={password} secureTextEntry={true} onChangeText={text => setPassword(text)} textContentType="password"/>
          </View>
        </View>

        <View style={styles.inputView2}>
          <Text style={styles.label}>Confirm Password:</Text>
          <View style={styles.input}>
            <TextInput style={styles.inputText} value={confirmPassword} secureTextEntry={true} onChangeText={text => setConfirmPassword(text)} textContentType="password"/>
          </View>
        </View>

        <View style={styles.errorTextView}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>

        <View style={styles.button2}>
          <Btn title='Sign In' color='rgb(78,107,52)' onPress={() => {setView('login'); setErrorText('');}}/>
          <Button title='Sign Up' onPress={() => { if (username && password && confirmPassword) register(); else setErrorText('Please fill in all fields.') }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#ebecf0',
    width: '100%',
    height: '100%'
  },
  inputView: {
    marginTop: 25,
  },
  inputView2: {
    marginTop: 10,
  },
  label: {
    marginBottom: 3,
    fontSize: 15
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button2: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: .4
  },
  inputText: {
    fontSize: 20,
    marginHorizontal: 7,
    paddingVertical: 3
  },
  errorTextView: {
    marginTop: 5
  },
  errorText: {
    color: 'red'
  }
});

export default connect(null, { login })(Form);
