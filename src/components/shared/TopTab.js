// import React from 'react';
// import { View, TouchableOpacity, StyleSheet} from 'react-native';
// import Color from '../../utils/colors/Color';
// import PrimaryText from '../../components/shared/PrimaryText';
// import Back from '../../../assets/icon/Back.svg';
// import { scale, verticalScale, moderateScale } from 'react-native-size-matters';



// const HeaderCom = ({ style,navigation }) => {

//   return (
   
//       <View style={styles.nav}>
//         <TouchableOpacity style={[styles.buttonnav,style]} onPress={() => navigation.navigate('SighnUp')}>
//           <PrimaryText type='subtitle' style={[styles.buttonText,style]}>لوحة المهام</PrimaryText>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <PrimaryText style={[styles.buttonText,style]} type='subtitle'>المتصدرين</PrimaryText>
//         </TouchableOpacity>
//       </View>

//   );
// };

// const styles = StyleSheet.create({
// buttonnav:{
//   borderBottomWidth:scale(2),
//   paddingBottom:scale(2),
//   borderBottomColor:Color.LightBlue,
// },
//   nav: {
//     backgroundColor:Color.LightBlack,
//     height: verticalScale(44),
//     width: scale(230),
//     borderRadius: (50),
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     alignSelf: 'center',
//     flexDirection: 'row',
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 16,
//   },
// });

// export default HeaderCom;
