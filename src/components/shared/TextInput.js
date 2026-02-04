import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Color from '../../utils/colors/Color';
const Input = ({

  error,
  password,
  onFocus = () => { },
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? Color.NormalRed
              : isFocused
                ? Color.NormalBlue
                : Color.DarkGray,
            alignItems: 'center',
          },
        ]}>

        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: Color.NormalBlue, flex: 1 }}
          {...props}
        />

      </View>
      {error && (
        <Text style={{ marginTop: 7, color: Color.NormalRed, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({

  inputContainer: {
    height:verticalScale (52),
    width: scale(358),
    borderRadius: 12,
    backgroundColor: Color.LightBlack,
    // flexDirection: 'row',
    padding :moderateScale(15),
     margin:moderateScale( 12),
    borderWidth: 0.5,
    color: '#ffffff',
  },

});

export default Input;