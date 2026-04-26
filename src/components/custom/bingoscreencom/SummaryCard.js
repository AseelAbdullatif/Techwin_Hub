import React from 'react';
import { View, StyleSheet, } from 'react-native';
import Color from '../../../utils/colors/Color';
import PrimaryText from '../../shared/PrimaryText';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const SummaryCard = ({ icon: Icon, count, label, fillcolor, iconcolor, bordercolor, style }) => {

  return (
    <View style={[styles.mainbar, style, {
      borderBottomWidth: scale(1),
      paddingBottom: verticalScale(2),
      borderBottomColor: bordercolor
    }]}>
      <Icon width={scale(22)} height={verticalScale(22)} color={iconcolor} />
      <PrimaryText type="subtitle" style={styles.buttonText}>
        {count}
      </PrimaryText>
      <PrimaryText type="graytitle" style={styles.graytitle}>
        {label}
      </PrimaryText>
    </View>
  );
};

const styles = StyleSheet.create({
  mainbar: {
    backgroundColor: Color.LightBlack,
    height: verticalScale(80),
    width: scale(100),
    borderRadius: moderateScale(4),
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: verticalScale(10),
  },

  graytitle: {
    color: Color.Grey,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    paddingTop: verticalScale(5),
  },

});

export default SummaryCard;
