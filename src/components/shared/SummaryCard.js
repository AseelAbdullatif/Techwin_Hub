import React from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Dimensions, } from 'react-native';
//*** */
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import StarFill from '../../../assets/icon/StarFill.svg';


const SummaryCard = ({icon:Icon,count,label,iconcolor,bordercolor,style}) => {

  return (
     <View style={[styles.mainbar,style, {
          borderBottomWidth: scale(1),
          paddingBottom: scale(2),
          borderBottomColor:bordercolor }]}>
          <Icon width={22} height={22} color={iconcolor} />
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
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: scale(10),
  },

 graytitle: {
    color: Color.Grey,
  },

   buttonText: {
    color: '#FFF',
    fontSize: 16,
    paddingTop: scale(5),
  },

});

export default SummaryCard;
