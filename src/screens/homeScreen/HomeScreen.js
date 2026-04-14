import React , { useState ,useEffect}from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Dimensions,Alert, Modal } from 'react-native';
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import { GlobalStyles } from '../../utils/styles/GlobalStyles';
import SummaryCard from '../../components/shared/SummaryCard';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CheckCircle from '../../../assets/icon/CheckCircle.svg';
import Zapped from '../../../assets/icon/Zapped.svg';
import StarFill from '../../../assets/icon/StarFill.svg';
import BingoCard from '../../components/shared/BingoCard';
import axios from 'axios';



export default function HomeScreen({ route, navigation }) {
  const username = route.params?.username || 'Guest';


  const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [selectedIds, setSelectedIds] = useState([]);
  


const api = axios.create({
  baseURL: 'https://699bf36e110b5b738cc142c5.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});
useEffect(() => {
  const getchData = async () => {
    try {
      const response = await api.get('/tasks'); 
      setData(response.data);
    } catch (error) {
      console.log('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  getchData(); 
}, );
  // ******************************كلمة بينقو

  const letters = [
    { char: 'B', color: Color.NormalPurple },
    { char: 'I', color: Color.NormalRed },
    { char: 'N', color: Color.NormalBlue },
    { char: 'G', color: Color.NormalYellow },
    { char: 'O', color: Color.NormalRed },
    { char: '!', color: Color.White },

  ];


  const renderItem = ({ item }) => {
  const isSelected = selectedIds.includes(item.id);

  const handlePress = () => {
    if (isSelected) {
      setSelectedIds(selectedIds.filter(id => id !== item.id));
    } else {
      setSelectedIds([...selectedIds, item.id]);
    }
  };

  return (
    <BingoCard
      item={item}
      isSelected={isSelected}
      onPress={handlePress}
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
        <SummaryCard icon={ Zapped} count={3} label="عدد البينقو" iconcolor={Color.LightBlue} bordercolor={Color. LightBlue} />

        {/* ****************************المهام المكتملة  */}
        <SummaryCard icon={CheckCircle} count={3} label="المهام المكتملة" iconcolor={Color. LightGreen} bordercolor={Color.LightGreen} />
      </View>
      <View style={styles.bingocontainer}>

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

    </View>
  );
}


const styles = StyleSheet.create({
  bingocontainer: {
    backgroundColor: Color.LightBlack,
    borderRadius: 12,
    marginHorizontal: scale(12),
    height: verticalScale(380),
    padding: scale(5),
    marginBottom: verticalScale(20),
    // paddingBottom:verticalScale(20)

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

  containermainbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(30),
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
