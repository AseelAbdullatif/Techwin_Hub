import React from 'react';
import { View, StyleSheet, } from 'react-native';
import Color from '../../../utils/colors/Color';
import PrimaryText from '../../shared/PrimaryText';
import { scale, verticalScale, moderateScale, s } from 'react-native-size-matters';


const BadgesRankcom = ({ count, label, bordercolor, style }) => {

  return (
    <View style={[styles.mainbar]}>
      <View>
        <PrimaryText type="graytitle" style={styles.graytitle}>
          {label}
        </PrimaryText>
        <PrimaryText type="subtitle" style={styles.buttonText}>
          {count}
        </PrimaryText>
      </View>

      <View style={{ height: verticalScale(60), width: scale(1), backgroundColor: Color.Grey }}></View>

      <View>
        <PrimaryText type="graytitle" style={styles.graytitle}>
          {label}
        </PrimaryText>
        <PrimaryText type="subtitle" style={styles.buttonText}>
          {count}
        </PrimaryText>
      </View>


      <View style={{ height: verticalScale(60), width: scale(1), backgroundColor: Color.Grey }}></View>
      <View>
        <PrimaryText type="graytitle" style={styles.graytitle}>
          {label}
        </PrimaryText>
        <PrimaryText type="subtitle" style={styles.buttonText}>
          {count}
        </PrimaryText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainbar: {
    backgroundColor: Color.LightBlack,
    height: verticalScale(80),
    flexDirection: 'row',
    // width: scale(600),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: verticalScale(10),

    marginHorizontal: scale(10),
    marginVertical: verticalScale(25)
  },

  graytitle: {
    color: Color.Grey,
  },

  buttonText: {
    color: Color.NormalBlue,
    fontSize: 16,
    paddingTop: verticalScale(5),
  },

});

export default BadgesRankcom;
