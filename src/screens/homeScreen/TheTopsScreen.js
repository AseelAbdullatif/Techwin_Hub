import React, { useState } from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
//*** */
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import { GlobalStyles } from '../../utils/styles/GlobalStyles';
import Leaderboard from '../../components/custom/threetopsScreencom/Leaderboard';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import AllTopThree from '../../components/custom/threetopsScreencom/AllTopThree';
// https://699bf36e110b5b738cc142c5.mockapi.io/:endpoint
//tops

// 👇 fake data
const USERS_DATA = [
  {
    id: 1,
    name: "أحمد",
    score: 200,
    rank: 1,
    image: "https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg",
  },
  {
    id: 2,
    name: "علي",
    score: 190,
    rank: 2,
    image: "https://ichef.bbci.co.uk/ace/standard/2048/cpsprodpb/aac7/live/66fb3490-ca0d-11f0-86af-23a21b51892f.jpg",
  },
  {
    id: 3,
    name: "عبدالله",
    score: 180,
    rank: 3,
    image: "https://ichef.bbci.co.uk/ace/standard/2048/cpsprodpb/aac7/live/66fb3490-ca0d-11f0-86af-23a21b51892f.jpg",
  },
  {
    id: 4,
    name: "سارة",
    score: 175,
    rank: 4,
    image: "https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg",
  },
  {
    id: 5,
    name: "خالد",
    score: 170,
    rank: 5,
    // image: "https://ichef.bbci.co.uk/ace/standard/2048/cpsprodpb/aac7/live/66fb3490-ca0d-11f0-86af-23a21b51892f.jpg",
  },
  {
    id: 6,
    name: "نورة",
    score: 165,
    rank: 6,
    image: "https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg",
  },
  {
    id: 7,
    name: "فهد",
    score: 160,
    rank: 7,
    image: "https://ichef.bbci.co.uk/ace/standard/2048/cpsprodpb/aac7/live/66fb3490-ca0d-11f0-86af-23a21b51892f.jpg",
  },
  {
    id: 8,
    name: "ريم",
    score: 155,
    rank: 8,
    image: "https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg",
  },
  {
    id: 9,
    name: "ماجد",
    score: 150,
    rank: 9,
    image: "https://ichef.bbci.co.uk/ace/standard/2048/cpsprodpb/aac7/live/66fb3490-ca0d-11f0-86af-23a21b51892f.jpg",
  },
  {
    id: 10,
    name: "لمى",
    score: 145,
    rank: 10,
    image: "https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg",
  },
  {
    id: 11,
    name: "سلطان",
    score: 140,
    rank: 11,
    image: "https://ichef.bbci.co.uk/ace/standard/2048/cpsprodpb/aac7/live/66fb3490-ca0d-11f0-86af-23a21b51892f.jpg",
  },
  {
    id: 12,
    name: "هند",
    score: 135,
    rank: 12,
    image: "https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg",
  },
  {
    id: 13,
    name: "تركي",
    score: 130,
    rank: 13,
    image: "https://ichef.bbci.co.uk/ace/standard/2048/cpsprodpb/aac7/live/66fb3490-ca0d-11f0-86af-23a21b51892f.jpg",
  },
  {
    id: 14,
    name: "جود",
    score: 125,
    rank: 14,
    image: "https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg",
  },
  {
    id: 15,
    name: "زياد",
    score: 120,
    rank: 15,
    image: "https://ichef.bbci.co.uk/ace/standard/2048/cpsprodpb/aac7/live/66fb3490-ca0d-11f0-86af-23a21b51892f.jpg",
  },
  {
    id: 16,
    name: "ليان",
    score: 115,
    rank: 16,
    image: "https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg",
  },
  {
    id: 17,
    name: "راشد",
    score: 110,
    rank: 17,
    image: "https://ichef.bbci.co.uk/ace/standard/2048/cpsprodpb/aac7/live/66fb3490-ca0d-11f0-86af-23a21b51892f.jpg",
  },
  {
    id: 18,
    name: "نور",
    score: 105,
    rank: 18,
    image: "https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg",
  },
  {
    id: 19,
    name: "بدر",
    score: 100,
    rank: 19,
    image: "https://ichef.bbci.co.uk/ace/standard/2048/cpsprodpb/aac7/live/66fb3490-ca0d-11f0-86af-23a21b51892f.jpg",
  },
  {
    name: "رنا",
    score: 95,
    rank: 20,
    image: "https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg",
    id: 20,

  },
];
export default function TheTopsScreen({ route, navigation }) {

  // const image = { uri: 'https://wpcdn.web.wsu.edu/news/uploads/sites/2797/2025/03/cat2-1024x676.jpg' };


  return (//*** ******

    <View style={[GlobalStyles.container, { flex: 1 }]}>

      <View style={styles.topscontainer}>

        <AllTopThree topsusers={USERS_DATA} />
      </View>

      <View style={styles.restrank}>
        <FlatList
        
          data={USERS_DATA.slice(3)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Leaderboard user={item} />
          )}
          showsVerticalScrollIndicator={false}
          />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  topscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: verticalScale(50),
    width: '100%',
    height: verticalScale(270),
  },



  restrank: {
    flex: 1,
    backgroundColor: Color.LightBlack,
    borderRadius: moderateScale(40),
    paddingTop: verticalScale(25),
    paddingBottom: verticalScale(10),
    overflow: 'hidden',
  },


});
