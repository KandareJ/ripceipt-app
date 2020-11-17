import { Dimensions, StyleSheet } from 'react-native';

export const height = Dimensions.get('window').height / 3;
export const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  bgView: {
    flex: 1,
    backgroundColor: '#ebecf0',
    justifyContent: 'flex-end'
  },
  bgImage: {
    flex: 1,
    backgroundColor: 'black',
    height: null,
    width: null,
    opacity: .75
  },
  bottomView: {
    height: height,
    justifyContent: 'center'
  },
  bottomViewComponents: {
    ...StyleSheet.absoluteFill,
    top: null,
    //justifyContent: 'center',
    height: height
  },
  bottomViewComponentsPadding: {
    marginTop: 0
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: .7
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  closeButtonText: {
    fontSize: 15,
    color: 'black'
  },
  absoluteFill: {
    ...StyleSheet.absoluteFill,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: .5
  },
  closeButton: {
    height: 40,
    width: 40,
    zIndex: 2,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
    left: width / 2 - 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2
  },
  welcome: {
    backgroundColor: 'white',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: .7,
    height: 200,
    position: 'absolute',
    top: height,
    left: 20,
    right: 20
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
});
