import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Color from '../../../utils/colors/Color';
import PrimaryText from '../../shared/PrimaryText';
import { scale, verticalScale, moderateScale, s } from 'react-native-size-matters';
import BadgesCard from './BadgesCard';
import PersonHeart from '../../../../assets/icon/PersonHeart.svg'
import MilitaryTech from '../../../../assets/icon/MilitaryTech.svg'
import Award from '../../../../assets/icon/Award.svg'
import Diversity from '../../../../assets/icon/Diversity.svg'
import SafetyCheck from '../../../../assets/icon/SafetyCheck.svg'



const BadgesList = () => {

    return (

        <View style={styles.maincontainer} >


            <View style={[styles.header]}>
                <View style={[styles.title]}>
                    <Award width={scale(20)} height={verticalScale(16)} color={Color.NormalBlue} />
                    <PrimaryText type='smalltitle' style={{ marginHorizontal: scale(10), }} >
                        الاوسمة المكتسبة
                    </PrimaryText></View>
                <View >

                    <TouchableOpacity >
                        <PrimaryText type='graytitle' style={{ marginHorizontal: scale(10), }} >
                            عرض الكل
                        </PrimaryText>
                    </TouchableOpacity>
                </View>
            </View>



            {/* ************************************************كلمة بينقو  */}
            <View style={[styles.listcintainer]}>


                <BadgesCard icon={MilitaryTech} islocked={false} content="لقد حصلت على 10 اعجابات" label="النقاط" iconcolor={Color.NormalYellow} />
                <BadgesCard icon={PersonHeart} islocked={false} content="لقد حصلت على 10 اعجابات" label="النقاط" iconcolor={Color.NormalRed} />
                <BadgesCard icon={SafetyCheck} islocked={false} content="لقد حصلت على 10 اعجابات" label="النقاط" iconcolor={Color.NormalPurple} />
                <BadgesCard icon={Diversity} islocked={false} content="لقد حصلت على 10 اعجابات" label="النقاط" iconcolor={Color.LightGreen} />


            </View>

        </View>
    );
};
{/* <Text style={{ fontSize: 30 }}>●</Text> */ }

export default BadgesList;


const styles = StyleSheet.create({


    maincontainer: {
        backgroundColor: Color.LightBlack,
        borderRadius: moderateScale(8),
        justifyContent: 'flex-start',
        // height: verticalScale(320),
        padding: moderateScale(5),
        // paddingTop: 20
        marginHorizontal: scale(10),

    },
    listcintainer: {
        // backgroundColor: Color.LightBlack,
        borderRadius: moderateScale(12),
        marginHorizontal: scale(1),

        flexDirection: 'row',

        justifyContent: 'space-between',
        flexWrap: 'wrap',

        // height: verticalScale(380),
        paddingVertical: moderateScale(5),
        // marginBottom: verticalScale(40),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: verticalScale(15),
    },
    title: {
        flexDirection: 'row',
    },

});
