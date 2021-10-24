import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 10,
    alignSelf:'stretch',
    height: hp(5.4),
    borderRadius: 5,
  },
  content: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
