import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    input: {
        height: 60, 
        width: '100%', 
        borderRadius: 6, 
        paddingLeft: 36, 
        paddingRight: 36,
        borderWidth: 1,
        zIndex: 1,
    },
    label: {
      position: 'absolute',
      top: 19,
      left: 35,
      fontSize: 14,
      paddingHorizontal: 5,
    },
    icon: {
      position:'absolute', 
      top: 19,
      marginStart: 10
    },
});