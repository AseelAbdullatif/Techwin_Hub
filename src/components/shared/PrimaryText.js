import React from 'react';
import { Text, StyleSheet, I18nManager } from 'react-native';
import Color from '../../utils/colors/Color';
import {Font} from '../../../assets/fonts/Fonts';
import { moderateScale, scale } from 'react-native-size-matters';

const PrimaryText = ({ type = 'body', children, style, color }) => {

  const textStyle = styles[type] || styles.body;

  return (
    <Text 

      style={[
        
        textStyle,
        { color: color || textStyle.color },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(20),
    color: Color.NormalBlue,
    textAlign: 'center',
    fontFamily:Font.PrimaryFontBold,
  },
  subtitle: {
    fontSize: moderateScale(14),
    color: Color.White,
    textAlign: 'center',
    fontFamily: Font.PrimaryFontSemiBold,
  },
selectedcardtitle:{
    
    fontSize: moderateScale(12),
    color: Color.White,
    textAlign: 'center', 
    fontFamily: Font.PrimaryFontSemiBold,
  

  },

  graytitle:{
    
    fontSize: moderateScale(12),
    color: Color.Grey,
    textAlign: 'center', 
    fontFamily: Font.PrimaryFontSemiBold,
  

  },
  body: {
    fontSize: moderateScale(14),
    color: Color.LightGrey,
    textAlign: 'left',
    fontFamily: Font.PrimaryFont,
  },
  textboton: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 20,
    
    fontFamily: Font.PrimaryFontBold,
  },

  errormassage: {
    marginVertical:scale(7),
    color: Color.NormalRed,
    fontSize: 12,
    textAlign:'left',
    fontFamily: Font.PrimaryFontLight,
  },
});

export default PrimaryText;

