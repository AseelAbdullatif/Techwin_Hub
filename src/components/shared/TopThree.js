import React, { useState } from 'react';
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
//*** */
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import { GlobalStyles } from '../../utils/styles/GlobalStyles';
import SummaryCard from '../../components/shared/SummaryCard';
import HeaderCom from '../../components/shared/HeaderCom';
// import TopTab from '../../components/shared/TopTab';
import CheckCircle from '../../../assets/icon/CheckCircle.svg';
import Zapped from '../../../assets/icon/Zapped.svg';
import Crown from '../../../assets/icon/Crown.svg';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const PrimaryButton = ({
  name,
  score,
  rank,
  style,

  image = { uri: 'https://cdn-icons-png.flaticon.com/512/3237/3237472.png' }

}) => {
  const isFirst = rank === 1;
  return (
    <View >
      <View style={isFirst ? styles.containermainbarfirst : styles.containermainbar}>
        <ImageBackground source={image} resizeMode="cover" 
        style={isFirst? styles.imageone : styles.image} >
        </ImageBackground>

        <LinearGradient style={isFirst? styles.one : styles.twothree}
          colors={[Color.gradientBlueSkySec, Color.gradientBlueFir]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }} >
          <PrimaryText type='textboton' style={isFirst? { fontSize: 25, }:{ fontSize: 20, }}>{rank}</PrimaryText>
        </LinearGradient>

        <PrimaryText type={isFirst ? 'title' : 'subtitle'}
          style={isFirst?{ position: 'absolute', zIndex: 30, top: 190, }:{ position: 'absolute', zIndex: 21, top: 140, }}
          color={Color.White}
        >{name}
        </PrimaryText>

        <PrimaryText
         type={isFirst ? 'title' : 'subtitle'}
          color={Color.White}
          style={isFirst?{ position: 'absolute', zIndex: 30, top: 220, }:{ position: 'absolute', zIndex: 21, top: 165, }}>
          {score}🏆
        </PrimaryText>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  // topscontainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   paddingTop: verticalScale(50),
  //   width: '100%',

  // },

  containermainbarfirst: {
    marginTop: -20,
    height: verticalScale(120),
    width: scale(120),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  bingocontainer: {
    backgroundColor: Color.LightBlack,
    borderRadius: 12,
    marginHorizontal: scale(12),
    height: verticalScale(380),
    padding: scale(5),
    marginBottom: verticalScale(20),
    // paddingBottom:verticalScale(20)

  },

  containermainbar: {
    marginTop: 30,
    height: verticalScale(100),
    width: scale(80),
    // backgroundColor:Color.NormalPurple,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },


  crownstyle: {
    hight: verticalScale(24),
    width: scale(24),
    alignSelf: 'center',
  },

  twothree: {
    borderRadius: scale(15),
    height: verticalScale(30),
    width: scale(30),
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 20,
    top: 90,
    alignItems: 'center',


  },
  one: {
    borderRadius: scale(20),
    height: verticalScale(40),
    width: scale(40),
    justifyContent: 'center',

    alignItems: 'center',

    position: 'absolute',
    zIndex: 20,
    top: 140,

  },

  image: {
    justifyContent: 'center',
    borderRadius: scale(40),
    height: verticalScale(80),
    width: scale(80),
    borderWidth: 3,
    alignSelf: 'center',
    overflow: "hidden",
    borderColor: Color.NormalBlue,


  },

  imageone: {
    justifyContent: 'center',
    borderRadius: scale(60),
    height: verticalScale(120),
    width: scale(120),
    borderWidth: 3,
    alignSelf: 'center',
    overflow: "hidden",
    shadowColor: Color.LightBlue,
    borderColor: Color.NormalBlue,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },

});

export default PrimaryButton;
