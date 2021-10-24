import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 15,
    marginVertical: hp(40),
    marginHorizontal: wp(15),
    width: wp(70),
    minHeight: hp(25),
    padding: 10,
   
  },

  title: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 5,
    padding: 5,
  },
  description: {
    color: 'black',
    fontSize: 16,
    padding: 5,
  },
  button: {
    color: 'black',
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal:30,
    padding: 5,
  },
  buttonsContainer: {
    flexDirection: 'row-reverse',
    position:'absolute',
    bottom:0,
    alignSelf:'center'
  },

  modal:{
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width:wp(100),
    height:hp(100)
  }
});
