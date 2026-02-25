import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Color from '../../utils/colors/Color';
import { PrimaryText } from '../shared/PrimaryText';
import { Font } from '../../../assets/fonts/Fonts';
import Eye_slash from '../../../assets/icon/Eye_slash.svg';
import Eye from '../../../assets/icon/Eye.svg';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';



const UserInput =
  ({
    placholder,
    keypordtype,
    error,
    password,
    onFocus = () => { },
    ...props
  }) => {
    const [hidePassword, setHidePassword] = useState(password);
    const [isFocused, setIsFocused] = useState(false);
    return (
      <View style={style.container}>
        <View
          style={[
            style.inputContainer,
            {
              borderColor: error
                ? Color.NormalRed
                : isFocused
                  ? Color.NormalBlue
                  : Color.DarkGrey,

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
          {password && (
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              {hidePassword ? (
                              <Eye_slash width={20} height={20} />

              ) : (
                  <Eye  width={20} height={20}  color={Color.Grey}/>
              )}
            </TouchableOpacity>
          )}


        </View>
        {error && (
          <Text style={style.errormassage}>
            {/* <PrimaryText style={styles.text} type="errormassage">{error}</PrimaryText> */}


            {error}
          </Text>

        )}
      </View>
    );
  };

const style = StyleSheet.create({

  inputContainer: {
    height: verticalScale(42),
    width: scale(330),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.LightGrey,
    backgroundColor: Color.LightBlack,
    borderRadius: 12,
    color: Color.White,
    paddingHorizontal:scale(10),
    fontFamily: Font.PrimaryFontLight,

  },
  container: {
    // flex: 1, عملي فراغ كبير بين الانبوت فيلد
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:scale(10),
    marginHorizontal: scale(50),
  },

  errormassage: {
    marginBottom: scale(7),
    color: Color.NormalRed,
    fontSize: 12,
    textAlign: 'left',   
    alignSelf: 'flex-start',
    fontFamily: Font.PrimaryFontLight,
  }

});

export default UserInput;


