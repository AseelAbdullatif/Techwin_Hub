import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Color from '../../../utils/colors/Color';
import PrimaryText from '../../shared/PrimaryText';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { Shadow } from 'react-native-shadow-2';

const TopThree = ({
  name,
  score,
  rank,
  image
}) => {
  const isFirst = rank === 1;
  const defaultImage = require('../../../../assets/images/defulteuser.png');
  const imageSource = image && image.uri ? image : defaultImage;

  return (
    <View >
      <View style={isFirst ? styles.containermainbarfirst : styles.containermainbar}>
       
        {isFirst ? (
          <Shadow
            distance={15}
            startColor={Color.NormalBluergba}
            finalColor="rgba(0,0,0,0.3)"
            offset={[0, 0]}
          >
            <ImageBackground
              source={imageSource}
              resizeMode="cover"
              style={styles.imageone}
            />
          </Shadow>
        ) : (
          <ImageBackground
            source={imageSource}
            resizeMode="cover"
            style={styles.image}
          />
        )}

        <LinearGradient style={isFirst ? styles.one : styles.twothree}
          colors={[Color.gradientBlueSkySec, Color.gradientBlueFir]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }} >
          <PrimaryText type='textboton' style={isFirst ? { fontSize: moderateScale(25), } : { fontSize: moderateScale(16), }}>
            {rank}
          </PrimaryText></LinearGradient>

        <PrimaryText type={isFirst ? 'smalltitle' : 'subtitle'}
          style={isFirst ? { position: 'absolute', zIndex: 30, top: verticalScale(145), } : { position: 'absolute', zIndex: 21, top: verticalScale(115), }}
          color={Color.White}
        >{name}
        </PrimaryText>

        <PrimaryText
          type={isFirst ? 'smalltitle' : 'subtitle'}
          color={Color.White}
          style={isFirst ? { position: 'absolute', zIndex: 30, top: verticalScale(172), } : { position: 'absolute', zIndex: 21, top: verticalScale(140), }}>
          {score}🏆
        </PrimaryText>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  containermainbar: {
    marginTop: verticalScale(30),
    height: verticalScale(100),
    width: scale(80),
    // backgroundColor:Color.NormalPurple,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  containermainbarfirst: {
    marginTop: verticalScale(-20),
    height: verticalScale(120),
    width: scale(120),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  twothree: {
    borderRadius: moderateScale(10),
    height: verticalScale(20),
    width: scale(20),
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 20,
    top: verticalScale(85),
    alignItems: 'center',


  },
  one: {
    borderRadius: moderateScale(16),
    height: verticalScale(32),
    width: scale(32),
    justifyContent: 'center',

    alignItems: 'center',

    position: 'absolute',
    zIndex: 20,
    top: verticalScale(110),

  },

  image: {
    justifyContent: 'center',
    borderRadius: moderateScale(40),
    height: verticalScale(80),
    width: scale(80),
    borderWidth: scale(3),
    alignSelf: 'center',
    overflow: "hidden",
    borderColor: Color.NormalBlue,


  },

  imageone: {
    justifyContent: 'center',
    borderRadius: moderateScale(60),
    height: verticalScale(120),
    width: scale(120),
    borderWidth: scale(3),
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

export default TopThree;
