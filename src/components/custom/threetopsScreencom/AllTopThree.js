import React , { useState ,useEffect}from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Dimensions,Alert, Modal } from 'react-native';
import Color from '../../../utils/colors/Color';
import PrimaryText from '../../shared/PrimaryText';
import { GlobalStyles } from '../../../utils/styles/GlobalStyles'; 
import TopThree from './TopThree'
import Crown from '../../../../assets/icon/Crown.svg';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Shadow, version } from 'react-native-shadow-2';
import axios from 'axios';



const AllTopThree = ({ topsusers=[]}) => {
const top3 = topsusers.slice(0, 3);
const first = top3.find(u => u.rank === 1);
const second = top3.find(u => u.rank === 2);
const third = top3.find(u => u.rank === 3);

  return (
     <View style={styles.topscontainer}>
      
      {/* LEFT (2) */}
      {second && (
        <View style={styles.left}>
          <TopThree
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
          <Crown style={styles.crownstyle} width={scale(35)} height={verticalScale(35) }/>
          <TopThree
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
          <TopThree
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

export default AllTopThree;

const styles = StyleSheet.create({
  topscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
   crownstyle: {
    alignSelf: 'center',
        top:verticalScale(-20),

  },

})

