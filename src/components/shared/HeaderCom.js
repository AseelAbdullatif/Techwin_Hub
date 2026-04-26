import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import Back from '../../../assets/icon/back.svg';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';



const HeaderCom = ({ text, style, color }) => {
  const navigation = useNavigation();
  return (

    <View style={styles.headerstyle}>

      <TouchableOpacity style={styles.viewback} onPress={() => navigation.navigate('Login')}>

        < View  >
          <Back width={scale(25)} height={verticalScale(25)} color={Color.White} />
        </View>

      </TouchableOpacity>

      <PrimaryText style={[styles.text, style, color ? { color } : {}]} type="title">
        <PrimaryText type="subtitle" style={styles.buttonText}>
          {text}
        </PrimaryText>
      </PrimaryText>


    </View>
  );
};

const styles = StyleSheet.create({
  headerstyle: {
    backgroundColor: Color.BackgroundBlack,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(15),
    height: verticalScale(60),
    marginLeft: scale(20)

  },

  text: {
    alignSelf: 'center',
    flex: 1,
    color: Color.White,
    marginRight: scale(30),
  },

  viewback: {
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(61, 58, 58, 0.8)',
    borderRadius: moderateScale(17.5),
    width: scale(35),
    height: verticalScale(35),
    borderWidth: scale(0.6),
    justifyContent: 'center',
    alignItems: 'center',  // borderRadius:

  },

});

export default HeaderCom;
