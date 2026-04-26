import React, { useState } from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
//*** */
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import { GlobalStyles } from '../../utils/styles/GlobalStyles';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import UserAvatar from '../../components/custom/profilecom/UserAvatar';
import HeaderCom from '../../components/shared/HeaderCom';


export default function EditProfileScreen({ route, navigation }) {

    return (//*** ******
        <View style={[GlobalStyles.container, { flex: 1 }]}>
            <View style={styles.topscontainer}>
                <HeaderCom text=' تعديل البيانات الشخصية' />
                <UserAvatar isEdit={false} />
            </View>
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
