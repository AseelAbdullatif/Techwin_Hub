import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import Color from '../../../utils/colors/Color';
import PrimaryText from '../../shared/PrimaryText';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Edit from '../../../../assets/icon/Edit.svg'
import { Shadow } from 'react-native-shadow-2';
import HeaderCom from '../../shared/HeaderCom';
import { useNavigation } from '@react-navigation/native';


const UserAvatar = ({
    name,
    image,
    isEdit

}) => {
    //    isEdit === 1;
    const defaultImage = require('../../../../assets/images/defulteuser.png');
    const imageSource = image && image.uri ? image : defaultImage;
    const navigation = useNavigation();
    return (
        <View style={styles.containermainbar}>
            <ImageBackground
                source={require('../../../../assets/images/defulteuser.png')}
                resizeMode="cover"
                style={styles.image}
            />
            <View style={styles.rowtwo}>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <Edit style={styles.edit} height={verticalScale(20)} width={scale(20)} />
                </TouchableOpacity>
                {isEdit && (
                    <PrimaryText type={'smalltitle'}
                        color={Color.White}>
                        Aseel
                    </PrimaryText>)
                }
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    containermainbar: {
        marginTop: verticalScale(10),
        height: verticalScale(100),
        alignItems: 'center',
        justifyContent: 'center',
        // paddingBottom:verticalScale(10),
    },
    rowtwo: {
        // marginTop: verticalScale(1),
        flexDirection: 'row',
        alignContent: 'space-around',
        // marginVertical: scale(5),
        paddingVertical: verticalScale(10),
    },
    image: {
        justifyContent: 'center',
        borderRadius: moderateScale(45),
        height: verticalScale(90),
        width: scale(90),
        borderWidth: scale(2),
        alignSelf: 'center',
        overflow: "hidden",
        borderColor: Color.NormalBlue,
    },
    edit: {
        marginRight: scale(10)
    }

});

export default UserAvatar;
