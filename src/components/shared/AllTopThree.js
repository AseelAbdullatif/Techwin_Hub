import React , { useState ,useEffect}from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Dimensions,Alert, Modal } from 'react-native';
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import PrimaryButton from '../../components/shared/PrimaryButton';
import { GlobalStyles } from '../../utils/styles/GlobalStyles';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import axios from 'axios';



const BottomPopup = ({ topsusers=[]}) => {
const top3 = topsusers.slice(0, 3);
const first = top3.find(u => u.rank === 1);
const second = top3.find(u => u.rank === 2);
const third = top3.find(u => u.rank === 3);
  return (
     <View style={styles.topscontainer}>
      
      {/* LEFT (2) */}
      {second && (
        <View style={styles.left}>
          <PrimaryButton
            name={second.name}
            score={second.score}
            rank={second.rank}
            image={{ uri: second.image }}
          />
        </View>
      )}

      {/* CENTER (1) */}
      {first && (
        <View style={styles.center}>
          <PrimaryButton
            name={first.name}
            score={first.score}
            rank={first.rank}
            image={{ uri: first.image }}
          />
        </View>
      )}

      {/* RIGHT (3) */}
      {third && (
        <View style={styles.right}>
          <PrimaryButton
            name={third.name}
            score={third.score}
            rank={third.rank}
            image={{ uri: third.image }}
          />
        </View>
      )}
    </View>
  );
};

export default BottomPopup;

const styles = StyleSheet.create({
  topscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingTop: verticalScale(50),
    width: '100%',

 
  },
})
