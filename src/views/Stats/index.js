import React from 'react';
import { Text, View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

const Stats = ({ receipts }) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
      <View style={styles.card}>
        <View style={styles.col}>
          <ImageBackground source={require('../../../assets/img/receipt.png')} style={styles.receipt} />
        </View>
        <View style={styles.col}>
          <Text style={styles.text}>You have {receipts} digital receipts saved!</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.col}>
          <ImageBackground source={require('../../../assets/img/tree.png')} style={styles.tree}>
            <View style={{flex: tree-receipts%tree, backgroundColor: 'rgba(255,255,255,.7)'}}/>
            <View style={{flex: receipts%tree}}/>
          </ImageBackground>
        </View>
        <View style={styles.col}>
          <Text style={styles.text}>You have saved a total of {(receipts/tree).toFixed(3)} trees!</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.col}>
          <ImageBackground source={require('../../../assets/img/water.png')} style={styles.water}>
            <View style={{flex: water-receipts%water, backgroundColor: 'rgba(255,255,255,.7)'}}/>
            <View style={{flex: receipts%water}}/>
          </ImageBackground>
        </View>
        <View style={styles.col}>
          <Text style={styles.text}>You have saved a total of {(receipts/water).toFixed(2)} gallons of water!</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const tree = 7500;
const water = 3;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 15,
    marginTop: 30,
    borderRadius: 10,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: .3,
    flexDirection: 'row'
  },
  tree: {
    height: 253 * .9,
    width: 199 * .9
  },
  water: {
    height: 295 * .8,
    width: 171 * .8
  },
  col: {
    alignItems: 'center',
    flex: 1
  },
  text: {
    textAlign: 'center'
  },
  receipt: {
    height: 295 * .8,
    width: 171 * .8
  }
});

const mapStateToProps = (state) => {
  return {
    receipts: state.receipts.length
  };
}

export default connect(mapStateToProps)(Stats);
