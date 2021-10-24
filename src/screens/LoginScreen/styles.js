import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  blackContainer: {
    height: hp(50),
    backgroundColor: 'black',
  },
  titleContent: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    margin:5,
  },
  subtitleContent: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    margin: 15,
  },
  loginCOntainer: {
    position: 'absolute',
    top: hp(25),
  },
  mobileContainer: {
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: wp(10),
  },
  container: {
    height: hp(100),
    width: wp(100),
  },
  button: {
    margin: 10,
    width: wp(30),
    alignSelf:'center'
  },
});
