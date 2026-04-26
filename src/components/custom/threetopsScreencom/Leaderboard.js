import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
//*** */
import Color from '../../../utils/colors/Color';
import PrimaryText from '../../shared/PrimaryText';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import StarFill from '../../../../assets/icon/StarFill.svg';
import Trophy from '../../../../assets/icon/trophy.svg';



const Leaderboard = ({
    // name = "aseel",
    // score = 50,
    // rank = 8,
    user
    //   image = { uri: 'https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg' }
}) => {
    const defaultImage = require('../../../../assets/images/defulteuser.png');
    const imageSource =
        user && user.image && user.image.trim() !== ''? { uri: user.image }: defaultImage;
    return (
        <View style={styles.topscontainer}>
            <View style={styles.rank}>
                <>
                    <Trophy width={scale(20)} height={verticalScale(16)}/>
                    <PrimaryText type='subtitle'>{user.rank}</PrimaryText>
                </>
                <>
                    <Image
                        style={styles.tinyLogo}
                         source={imageSource}/>

                    <PrimaryText type='subtitle'>{user.name}</PrimaryText>
                </>
            </View>
            <View style={styles.score}>
                <PrimaryText type='subtitle' >{user.score}</PrimaryText>
                <StarFill width={scale(20)} height={verticalScale(16)} fill="gold" />
            </View>

            {console.log(user)}
        </View>

    );
};

const styles = StyleSheet.create({
    topscontainer: {

        marginBottom: verticalScale(15),
        flexDirection: 'row',
        borderRadius: moderateScale(12),
        justifyContent: 'space-between',
        height: verticalScale(50),
        borderColor: Color.Grey,
        borderWidth: scale(1),
        width: '95%',
        alignSelf: "center",
        alignItems: 'center',
        paddingHorizontal: scale(10),
        backgroundColor: Color.CardColor,

    },

    rank: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "40%",
    },
    score: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        width: "40%",
    },
    tinyLogo: {
        borderRadius: moderateScale(15),
        height: verticalScale(30),
        width: scale(30),
        alignSelf: 'center',
    },


});

export default Leaderboard;
