import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        padding:10,
       
    },
    title:{
        fontSize:12,
        color:'black',
        paddingHorizontal:4
    },
    textInput:{
        borderBottomColor:'black',
        fontSize:16,
        paddingHorizontal:4,
        borderBottomWidth:0.5,
        alignSelf:'stretch',
        height: hp(5.4),
        color:'black'
    }
})