import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import PrimaryText from '../../components/shared/PrimaryText';
import Color from '../../utils/colors/Color';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const BingoCard = ({ item, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={isSelected ? styles.selectedItem : styles.item}
      activeOpacity={0.8}
    >
      {/* اسم المهمة */}
      <PrimaryText
        type={isSelected ? "selectedcardtitle" : "graytitle"}
        style={styles.text}
      >
        {item.task}
      </PrimaryText>

      {/* النقاط */}
      <PrimaryText
        type={isSelected ? "selectedcardtitle" : "graytitle"}
        style={styles.text}
      >
        +{item.score}
      </PrimaryText>
    </TouchableOpacity>
  );
};

export default BingoCard;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: moderateScale(4),
    height: verticalScale(100),
    borderRadius: moderateScale(8),
    borderWidth: scale(1),
    borderColor: Color.Grey,
    backgroundColor: Color.CardColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedItem: {
    flex: 1,
    margin: moderateScale(4),
    height: verticalScale(100),
    borderRadius: moderateScale(8),
    borderWidth: scale(1),
    borderColor: Color.NormalBlue,
    backgroundColor: Color.LightBlack,
    justifyContent: 'center',
    alignItems: 'center',

    
    shadowColor: Color.NormalBlue,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },

  text: {
    textAlign: 'center',
    marginVertical: scale(2),
  },
});