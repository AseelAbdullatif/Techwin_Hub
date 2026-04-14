import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Color from '../utils/colors/Color';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import TheTops from '../screens/homeScreen/TheTops';
import HeaderCom from '../components/shared/HeaderCom';
import { scale, verticalScale } from 'react-native-size-matters';

const Tab = createMaterialTopTabNavigator();

const MyTabs = ()=> {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.nav,
        tabBarIndicatorStyle: styles.indicatoystyle,
        tabBarLabelStyle: styles.buttonText,
      }}
    >
      <Tab.Screen name="لوحة المهام" component={HomeScreen} />
      <Tab.Screen name="المتصدرين" component={TheTops} />
    </Tab.Navigator>
  );
}

const BingoStack = () => {
  return (
    <View style={styles.navcontainer}>
      <HeaderCom text="بينقو"  />
      <MyTabs />
    </View>
  );
};

export default BingoStack;

const styles = StyleSheet.create({
  navcontainer:{
    flex:1,
    backgroundColor: Color.BackgroundBlack, 
    
  },
  indicatoystyle:{
 backgroundColor: Color.NormalBlue, // أزرق
  height: 2,
  width: 90, // طول الخط
  marginHorizontal: 30, // يخليه في النص (تقدرين تعدلينها)
  borderRadius: 10,

  },
  nav: {
    backgroundColor: Color.LightBlack,
    borderRadius: 50,
     height: verticalScale(40),
    width: scale(250),
     alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});