import React from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
//*** */
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import { GlobalStyles } from '../../utils/styles/GlobalStyles';
import SummaryCard from '../../components/shared/SummaryCard';
import HeaderCom from '../../components/shared/HeaderCom';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CheckCircle from '../../../assets/icon/CheckCircle.svg';
import Zapped from '../../../assets/icon/Zapped.svg';
import StarFill from '../../../assets/icon/StarFill.svg';


export default function HomeScreen({ route, navigation }) {
  const username = route.params?.username || 'Guest';



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



  // ******************************كلمة بينقو
  const letters = [
    { char: 'B', color: Color.NormalPurple },
    { char: 'I', color: Color.NormalRed },
    { char: 'N', color: Color.NormalBlue },
    { char: 'G', color: Color.NormalYellow },
    { char: 'O', color: Color.NormalRed },
    { char: '!', color: Color.White },

  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <PrimaryText type="graytitle" style={styles.text}>{item.task}</PrimaryText>
      <PrimaryText type="graytitle" style={styles.text}>+{item.score}</PrimaryText>

    </View>

  );

  return (//*** ******
    <View style={GlobalStyles.container}>
      <HeaderCom text="بينقو" />

      <View style={styles.nav}>
        <TouchableOpacity
          style={styles.buttonnav}
          onPress={() => navigation.navigate('SighnUp')}
        >
          <PrimaryText type="subtitle" style={styles.buttonText}>
            لوحة المهام
          </PrimaryText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SighnUp')}
        >
          <PrimaryText type="subtitle" style={styles.buttonText}>
            المتصدرين
          </PrimaryText>
        </TouchableOpacity>
      </View>

      <View style={styles.containermainbar}>
        {/* *************************************النقاط */}
        <SummaryCard icon={StarFill} count={3} label="النقاط" iconcolor={Color.NormalYellow} bordercolor={Color.NormalYellow} />

        {/* *******************************عدد البينقو */}
        <SummaryCard icon={CheckCircle} count={3} label="عدد البينقو" iconcolor={Color.LightGreen} bordercolor={Color.LightGreen} />

        {/* ****************************المهام المكتملة  */}
        <SummaryCard icon={Zapped} count={3} lable="المهام المكتملة" iconcolor={Color.LightBlue} bordercolor={Color.LightBlue} />
      </View>

      <View style={styles.bingocontainer}>
        <View style={{ flexDirection: 'row-reverse', justifyContent: 'center', marginBottom: verticalScale(12) }}>
          {letters.map((item, index) => (
            <PrimaryText
              type='title'
              key={index}
              style={{
                marginHorizontal: scale(10),
                color: item.color,
              }} >
              {item.char}
            </PrimaryText>
          ))}
        </View>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}   //  هذا يحولها إلى Grid
          showsVerticalScrollIndicator={false}
        />
      </View>

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
    height: verticalScale(120),
    borderRadius: moderateScale(8),
    borderWidth: scale(1),
    borderColor: Color.Grey,
    backgroundColor: Color.CardColor,
    justifyContent: 'center',
    alignItems: 'center',
  },


  containermainbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(44),
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
