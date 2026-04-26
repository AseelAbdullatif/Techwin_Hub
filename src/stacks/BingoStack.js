import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Color from '../utils/colors/Color';
import BingoScreen from '../screens/homeScreen/BingoScreen';
import TheTopsScreen from '../screens/homeScreen/TheTopsScreen';
import HeaderCom from '../components/shared/HeaderCom';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.nav,
        tabBarIndicatorStyle: styles.indicatoystyle,
        tabBarActiveTintColor: Color.White,   
        tabBarInactiveTintColor: Color.Grey,           
        tabBarLabelStyle: styles.buttonText,
      }}
    >
      <Tab.Screen name="لوحة المهام" component={BingoScreen} />
      <Tab.Screen name="المتصدرين" component={TheTopsScreen} />
    </Tab.Navigator>
  );
}

const BingoStack = () => {
  return (
    <View style={styles.navcontainer}>
      <HeaderCom text="بينقو" />
      <MyTabs />
    </View>
  );
};

export default BingoStack;

const styles = StyleSheet.create({
  navcontainer: {
    flex: 1,
    backgroundColor: Color.BackgroundBlack,

  },
  indicatoystyle: {
    backgroundColor: Color.NormalBlue, // أزرق
    height: verticalScale(2),
    width: scale(80), // طول الخط
    marginHorizontal: scale(30), // يخليه في النص (تقدرين تعدلينها)
    borderRadius: moderateScale(10),
  shadowColor: Color.NormalBlue,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 25,

  },
  nav: {
    backgroundColor: Color.LightBlack,
    borderRadius: moderateScale(50),
    height: verticalScale(40),
    width: scale(250),
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: moderateScale(18),
  },
});