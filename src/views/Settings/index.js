import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { logout } from '../../actions';
import Button from '../../components/Button';
import Topbar from '../../components/Topbar';

const Settings = ({ username, logout }) => {
  return (
    <Topbar title='Settings'>
      <View style={styles.bg}>
        <View style={styles.block}>
          <View style={styles.section}>
            <Text>Signed in as {username}</Text>
            <Button title='Sign Out' onPress={logout}/>
          </View>
        </View>
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
    username: state.login.username
  };
}

export default connect(mapStateToProps, { logout })(Settings);
