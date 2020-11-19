import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import { login } from '../../actions';

const Form = ({ login }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

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

      <View style={styles.button}>
        <Button title='Sign In' onPress={() => { if (username && password) login(username, password); }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  inputView: {
    marginTop: 25,
  },
  label: {
    marginBottom: 3,
    fontSize: 15
  },
  button: {
    marginTop: 20,
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'white',
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: .4
  },
  inputText: {
    fontSize: 20,
    marginHorizontal: 7
  }
});

export default connect(null, { login })(Form);
