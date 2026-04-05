import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import Back from '../../../assets/icon/Back.svg';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';



const HeaderCom = ({ text = "بينقو", style, color }) => {
const navigation =useNavigation();
  return (

    <View style={styles.headerstyle}>

      <TouchableOpacity style={{ marginLeft: scale(10) }}  onPress={() => navigation.navigate('Login')}>
        <Back width={30} height={30} color={Color.White} />
      </TouchableOpacity>

      <PrimaryText style={[styles.text, style, color ? { color } : {}]} type="title">
        <PrimaryText type="subtitle" style={styles.buttonText}>
             بينقو
            </PrimaryText>
      </PrimaryText>


    </View>
  );
};

const styles = StyleSheet.create({
  headerstyle: {
    color: Color.NormalPurple,
    backgroundColor: Color.BackgroundBlack,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(15),
    height: 60,
  },

  text: {
    alignSelf: 'center',
    flex: 1,
    color: Color.White,
    marginRight: scale(30),
  },
});

export default HeaderCom;
