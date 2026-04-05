import React , { useState }from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
//*** */
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import { GlobalStyles } from '../../utils/styles/GlobalStyles';
import SummaryCard from '../../components/shared/SummaryCard';
import HeaderCom from '../../components/shared/HeaderCom';
import TopTab from '../../components/shared/TopTab';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


export default function Tops({ route, navigation }) {
 



  return (//*** ******
    <View style={GlobalStyles.container}>

    



    </View>
  );
}


const styles = StyleSheet.create({
  bingocontainer: {
    backgroundColor: Color.LightBlack,
    borderRadius: 12,
    marginHorizontal: scale(12),
    height: verticalScale(350),
    padding: scale(5),
    marginBottom: verticalScale(20),
    // paddingBottom:verticalScale(20)

  },

  item: {
    flex: 1,
    margin: moderateScale(4),
    height: verticalScale(100),
    
    borderRadius: moderateScale(8),
    borderWidth: scale(1),
    borderColor: Color.Grey,  
    backgroundColor: Color.CardColor,
    justifyContent: 'center',
    alignItems: 'center',
  },


   selecteditem: {
    flex: 1,
    margin: moderateScale(4),
    height: verticalScale(100),
    borderRadius: moderateScale(8),
    borderWidth: scale(1),
    borderColor: Color.NormalBlue,  
    backgroundColor: Color.LightBlack,
    justifyContent: 'center',
    alignItems: 'center',
        shadowColor: Color.NormalBlue,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 14.00,

        elevation: 30,

    
  },

  containermainbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(30),
    justifyContent: 'space-around',
    marginHorizontal: scale(10),
    paddingVertical: moderateScale(10),
  },

  mainbar: {
    backgroundColor: Color.LightBlack,
    height: verticalScale(78),
    width: scale(100),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: scale(10),
  },

  nav: {
    backgroundColor: Color.LightBlack,
    height: verticalScale(44),
    width: scale(230),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    flexDirection: 'row',
  },

  buttonnav: {
    borderBottomWidth: scale(2),
    paddingBottom: scale(2),
    borderBottomColor: Color.LightBlue,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    paddingTop: scale(5),
  },

  graytitle: {
    color: Color.Grey,
  },
});
