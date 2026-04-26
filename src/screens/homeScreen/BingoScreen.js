import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import { GlobalStyles } from '../../utils/styles/GlobalStyles';
import SummaryCard from '../../components/custom/bingoscreencom/SummaryCard';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CheckCircle from '../../../assets/icon/CheckCircle.svg';
import Zapped from '../../../assets/icon/Zapped.svg';
import StarFill from '../../../assets/icon/StarFill.svg';
import BingoCard from '../../components/custom/bingoscreencom/BingoCard';
import Usebingodata from "../../hooks/Usebingodata";
import Usetaskstate from "../../hooks/Usetaskstate";
import PopUp from '../../components/shared/PopUp'
import axios from 'axios';



export default function BingoScreen({ route, navigation }) {
  // const username = route.params?.username || 'Guest';
  const [selectedIds, setSelectedIds] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);


  const {
    data,
    isLoading,
    error,

  } = Usebingodata();


  const { updateState, isLoading: updating } = Usetaskstate();

  // ******************************كلمة بينقو

  const letters = [
    { char: 'B', color: Color.NormalPurple },
    { char: 'I', color: Color.NormalRed },
    { char: 'N', color: Color.NormalBlue },
    { char: 'G', color: Color.NormalYellow },
    { char: 'O', color: Color.NormalRed },
    { char: '!', color: Color.White },

  ];


  if (isLoading) {
    return (
      <View style={GlobalStyles.container}>
        <ActivityIndicator size="large" color={Color.NormalBlue} />
      </View>
    );
  }

  if (error) {
    return (
      <View >
        <Text style={{ color: 'red' }}>{error}</Text>

      </View>
    );
  }


  const handleToggle = async (item) => {
    try {
      await updateState(item.id, !item.isSelected);
      console.log("updated");
    } catch (error) {
      console.log(error);
    }
  };
  const renderItem = ({ item }) => {
    return (
      <BingoCard
        item={item}
        onPress={() => handleToggle(item)}
      />
    );
  };



  return (//*** ******

    <View style={GlobalStyles.container}>

      {/* ********************************كومبوننت السامري كارد */}
      <View style={styles.containermainbar}>
        {/* *************************************النقاط */}
        <SummaryCard icon={StarFill} count={3} label="النقاط" iconcolor={Color.NormalYellow} bordercolor={Color.NormalYellow} />

        {/* *******************************عدد البينقو */}
        <SummaryCard icon={Zapped} count={3} label="عدد البينقو" iconcolor={Color.LightBlue} bordercolor={Color.LightBlue} />

        {/* ****************************المهام المكتملة  */}
        <SummaryCard icon={CheckCircle} count={3} label="المهام المكتملة" iconcolor={Color.LightGreen} bordercolor={Color.LightGreen} />
      </View>


      <View style={styles.bingocontainer}>


        <TouchableOpacity
          // style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableOpacity>



        {/* ************************************************كلمة بينقو  */}
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
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <PopUp
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  bingocontainer: {
    backgroundColor: Color.LightBlack,
    borderRadius: moderateScale(12),
    marginHorizontal: scale(12),
    height: verticalScale(380),
    padding: moderateScale(5),
    marginBottom: verticalScale(20),
  },

  item: {
    flex: 1,
    margin: moderateScale(4),
    height: verticalScale(100),
    borderRadius: moderateScale(8),
    borderWidth: scale(1),
    borderColor: Color.Grey,
    backgroundColor: Color.CardColor,
    justifyContent: 'center',
    alignItems: 'center',
  },


  selecteditem: {
    flex: 1,
    margin: moderateScale(4),
    height: verticalScale(100),
    borderRadius: moderateScale(8),
    borderWidth: scale(1),
    borderColor: Color.NormalBlue,
    backgroundColor: Color.LightBlack,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Color.NormalBlue,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 14.00,

    elevation: 30,


  },
  loding: {
    backgroundColor: Color.LightBlack,
  },
  containermainbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(30),
    justifyContent: 'space-around',
    marginHorizontal: scale(10),
    paddingVertical: verticalScale(10),
  },

  mainbar: {
    backgroundColor: Color.LightBlack,
    height: verticalScale(78),
    width: scale(100),
    borderRadius: moderateScale(4),
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: verticalScale(10),
  },

  nav: {
    backgroundColor: Color.LightBlack,
    height: verticalScale(44),
    width: scale(230),
    borderRadius: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    flexDirection: 'row',
  },

  buttonnav: {
    borderBottomWidth: scale(2),
    paddingBottom: verticalScale(2),
    borderBottomColor: Color.LightBlue,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    paddingTop: verticalScale(5),
  },

  graytitle: {
    color: Color.Grey,
  },
  textStyle: {
    color: Color.White,
  },

});
