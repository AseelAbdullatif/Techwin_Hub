import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import Back from '../../../assets/icon/Back.svg';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';



const HeaderCom = ({ text = "بينقو", style, color, navigation }) => {





  return (

    <View style={styles.headerstyle}>

      <TouchableOpacity style={{ marginLeft: scale(10) }} onPress={() => navigation.navigate('SighnUp')}>
        <Back width={30} height={30} color={Color.White} />
      </TouchableOpacity>

      <PrimaryText style={[styles.text, style, color ? { color } : {}]} type="title">
        {text}
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
