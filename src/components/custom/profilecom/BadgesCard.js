


import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Color from '../../../utils/colors/Color';
import PrimaryText from '../../shared/PrimaryText';
import { scale, verticalScale, moderateScale, s } from 'react-native-size-matters';
import LockKeyhole from '../../../../assets/icon/LockKeyhole.svg'
import House from '../../../../assets/icon/House.svg'
import Award from '../../../../assets/icon/Award.svg'
// import Group from '../../../../assets/icon/Group.svg'
// import House from '../../../../assets/icon/House.svg'
// import House from '../../../../assets/icon/House.svg'
// import House from '../../../../assets/icon/House.svg'
// import House from '../../../../assets/icon/House.svg'


const BadgesCard = ({ islocked, label, style, icon: Icon, iconfill, iconcolor, content }) => {

  return (

    <View
      style={islocked ? styles.lockeditem : styles.item}
    // activeOpacity={0.8}
    >

      <View style={styles.lockedicon} >
        {islocked && (<LockKeyhole width={scale(12)} height={verticalScale(12)} color={Color.White} />)}</View>
      <Icon width={scale(25)} height={verticalScale(25)} fill={islocked ? Color.Grey : iconcolor} color={islocked ? Color.Grey : iconcolor} />

      {/* اسم المهمة */}
      <PrimaryText
        type={islocked ? "graytitle" : "selectedcardtitle"}
        style={styles.text}
      >
        {label}
      </PrimaryText>
      {!islocked && (
        <PrimaryText PrimaryText
          type={"graytitle"}
          style={styles.content}
        >
          {content}
        </PrimaryText>)}

    </View >


  );
};
{/* <Text style={{ fontSize: 30 }}>●</Text> */ }

export default BadgesCard;


const styles = StyleSheet.create({
  lockeditem: {
    // flex: 1,
    marginVertical: verticalScale(5),
    // marginHorizontal: scale(3),
    height: verticalScale(115),
    width: scale(95),
    borderRadius: moderateScale(8),
    borderWidth: scale(1),
    borderColor: Color.DarkGrey,
    backgroundColor: Color.CardColor,
    justifyContent: 'center',
    alignItems: 'center',
  },


  item: {
    // flex: 1,4
    marginVertical: verticalScale(5),
    marginHorizontal: scale(2),
    height: verticalScale(115),
    width: scale(95),
    borderRadius: moderateScale(8),
    // borderWidth: scale(0.5),
    borderColor: Color.LightGrey,
    backgroundColor: Color.LightBlack,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Color.LightBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },

  text: {
    textAlign: 'center',
    marginTop: verticalScale(8),
  },
  content: {
    textAlign: 'center',
    marginTop: verticalScale(3),
  },
  lockedicon: {
    alignSelf: 'flex-start',
    paddingLeft: scale(4)
  },
});
//  bingocontainer: {
//     backgroundColor: Color.LightBlack,
//     borderRadius: moderateScale(12),
//     marginHorizontal: scale(12),
//     height: verticalScale(380),
//     padding: moderateScale(5),
//     marginBottom: verticalScale(20),
//   },