import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
//*** */
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import { GlobalStyles } from '../../utils/styles/GlobalStyles';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import StarFill from '../../../assets/icon/StarFill.svg';


const Leaderboard = ({
    name = "aseel",
    score = 50,
    rank = 8,
    style,

    //   image = { uri: 'https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg' }

}) => {
    return (
        <View style={styles.topscontainer}>
            <View style={styles.rank}>
                <>
                <StarFill width={20} height={20} fill="gold" />
                <PrimaryText type='subtitle'>{rank}</PrimaryText>

</>
<>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg'
                    }} />

                <PrimaryText type='subtitle'>{name}</PrimaryText>
                </>
            </View>
            <View style={styles.score}>
                <PrimaryText type='subtitle' >{score}</PrimaryText>
                <StarFill width={20} height={20} fill="gold" />
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    topscontainer: {
        flexDirection: 'row',
        borderRadius: moderateScale(12),
        justifyContent: 'space-between',
        // paddingTop: verticalScale(50),
        height: verticalScale(40),
        borderBlockColor: Color.Grey,
        borderWidth: 1,
        width: '100%',
        alignSelf:"center",
        alignItems: 'center',
        paddingHorizontal: scale(10),
        backgroundColor: Color.CardColor,
        // marginVertical:verticalScale(10),
marginHorizontal:scale(40),
    },

    rank: {
        // justifyContent: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
  
        alignItems: 'center',
        width:"40%",
    },
    score: {
       
        flexDirection: 'row',
        justifyContent: 'flex-end',
    gap: 10, 
        width:"40%",
    },

    tinyLogo: {

        borderRadius: scale(15),
        height: verticalScale(30),
        width: scale(30),
        alignSelf: 'center',
    },


});

export default Leaderboard;
