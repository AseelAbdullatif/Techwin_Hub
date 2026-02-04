import React from 'react';
import { Text, StyleSheet, I18nManager } from 'react-native';
import Color from '../../utils/colors/Color';
import { moderateScale } from 'react-native-size-matters';

const PrimaryText = ({ preset = 'body', children, style, color }) => {

  const textStyle = styles[preset] || styles.body;

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
    paddingVertical: 20,
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: Color.White,
    textAlign: 'center',
    fontWeight: '500',
  },
  body: {
    fontSize: moderateScale(14),
    color: Color.LightGrey,
    
     textAlign: 'right',
  },
});

export default PrimaryText;
