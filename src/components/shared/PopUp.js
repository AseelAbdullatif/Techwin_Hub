import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';



const PopUp = ({ visible, onClose, animationType = "fade", closeOnBackdrop = true }) => {

  const letters = [
    { char: '🥳', color: Color.White },
    { char: 'B', color: Color.NormalPurple },
    { char: 'I', color: Color.NormalRed },
    { char: 'N', color: Color.NormalBlue },
    { char: 'G', color: Color.NormalYellow },
    { char: 'O', color: Color.NormalRed },

  ];
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}

    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.modalBox} onPress={() => { }}>
          <View style={{ flexDirection: 'row-reverse', justifyContent: 'center', marginBottom: verticalScale(8) }}>
            {letters.map((item, index) => (
              <PrimaryText
                type='title'
                key={index}
                style={{
                  marginHorizontal: scale(4),
                  color: item.color,
                }} >
                {item.char}
              </PrimaryText>
            ))}
          </View>
          <PrimaryText type='body'>
            خبطة معلم!
          </PrimaryText>

          <PrimaryText type='body'>كملت الخط و كسبت
            <PrimaryText type='body' color={Color.NormalBlue}> 25+ نقطة  </PrimaryText>
            <PrimaryText type='body'>اضافية واصل      </PrimaryText>
          </PrimaryText>
          <PrimaryText type='body'>التحدي و نشوفك في الصدارة قريب 🚀</PrimaryText>

        </Pressable >
      </Pressable >
    </Modal>
  );
};

const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: scale(266),
    backgroundColor: Color.LightBlack,
    height: verticalScale(158),
    borderRadius: moderateScale(20),
    borderColor: Color.NormalBlue,
    borderWidth: moderateScale(2),
    padding: moderateScale(20),
    alignItems: 'center',

  },


});

export default PopUp;