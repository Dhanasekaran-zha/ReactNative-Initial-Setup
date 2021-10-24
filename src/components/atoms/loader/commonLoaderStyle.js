import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

/**
 * Write down all your component styles
 */
export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'},

    loader:{
      backgroundColor:'white',
      padding:10,
      borderRadius:10,
      flexDirection:'row',
      alignItems:'center'
    },
    loadingText:{
      fontSize:16,
      color:'black',
      paddingHorizontal:20,
      paddingVertical:5
    }
})