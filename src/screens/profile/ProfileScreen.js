import React, { useState } from 'react';
import { View, ScrollView, ImageBackground, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
//*** */
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import { GlobalStyles } from '../../utils/styles/GlobalStyles';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import UserAvatar from '../../components/custom/profilecom/UserAvatar';
import BadgesCard from '../../components/custom/profilecom/BadgesCard';
import BadgesList from '../../components/custom/profilecom/BadgesList';
import BadgesRankcom from '../../components/custom/profilecom/BadgesRankcom';
import HeaderCom from '../../components/shared/HeaderCom';
import Award from '../../../assets/icon/Award.svg'


export default function ProfileScreen({ route, navigation }) {

  return (//*** ******

    <View style={[GlobalStyles.container,]}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={styles.topscontainer}>
          <HeaderCom text='الملف الشخصي' />
          <UserAvatar isEdit={true} />
          <BadgesRankcom count={3} label="النقاط" bordercolor={Color.NormalYellow} />
          {/* <BadgesCard icon={Award} islocked={false} content="لقد حصلت على 10 اعجابات" label="النقاط" iconcolor={Color.NormalYellow} /> */}
          <BadgesList />

        </View>

      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  topscontainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    paddingTop: verticalScale(20),
    // width: '100%',
    // height: verticalScale(270),
  },



  restrank: {
    flex: 1,
    backgroundColor: Color.LightBlack,
    borderRadius: moderateScale(40),
    paddingTop: verticalScale(25),
    paddingBottom: verticalScale(10),
    overflow: 'hidden',
  },


});
