import React from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Dimensions, } from 'react-native';
//*** */
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const BingoCard = ({  data }) => {
    const data = [
        { id: 1, task: "قهوه مع زميل", score: 25 },
        { id: 2, task: "مساعدة زميل في مشروع", score: 25 },
        { id: 3, task: "قراءة مقال تقني", score: 25 },
        { id: 4, task: "ترتيب المكتب", score: 25 },
        { id: 5, task: "تعلم اساسيات فيقما ", score: 25 },
        { id: 6, task: "قهوه مع زميل", score: 25 },
        { id: 7, task: "ترتيب المكتب", score: 25 },
        { id: 8, task: "قراءة مقال تقني", score: 25 },
        { id: 9, task: "تعلم اساسيات فيقما ", score: 100 },
        { id: 10, task: "قراءة مقال تقني", score: 25 },
        { id: 11, task: "تعلم اساسيات فيقما ", score: 25 },
        { id: 12, task: "مساعدة زميل", score: 25 },
        { id: 13, task: "ترتيب المكتب", score: 25 },
        { id: 14, task: "تعلم اساسيات فيقما ", score: 25 },
        { id: 15, task: "مساعدة زميل", score: 25 },
        { id: 16, task: "ترتيب المكتب", score: 25 },

    ];
 
const [selected, setSelected] = usestate(false);

const isselected =()=>
{
setSelected(!selected);
};


    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <PrimaryText type="graytitle">{item.task}</PrimaryText>
            <PrimaryText type="graytitle">+{item.score}</PrimaryText>

        </View>

    );
// style={[
        
//         textStyle,
//         { color: color || textStyle.color },
//         style,
//       ]}
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}   //  هذا يحولها إلى Grid
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        flex: moderateScale(4),
        hight: verticalScale(120),
        borderRadius: moderateScale(8),
        borderWidth: scale(1),
        borderColor: Color.Grey,
        backgroundColor: Color.CardColor,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default BingoCard;
