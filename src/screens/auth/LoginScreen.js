import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import UserInput from '../../components/shared/UserInput'
import Color from '../../utils/colors/Color';
import PrimaryText from '../../components/shared/PrimaryText';
import { Font } from '../../../assets/fonts/Fonts';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    let newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (password.length < 6) {
      newErrors.password = 'كلمة المرور غير صحيحة';
    }

  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

   
    setErrors({});
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/techWin_hub_logo.png')} />
      </View>
      <PrimaryText style={styles.texttitle} type="title">يا هلا فيك من جديد </PrimaryText>
      <PrimaryText style={styles.text} type="body">سجل دخولك و استكمل متعة التحديات</PrimaryText>
{/* <View > */}
      <UserInput
        value={email}
        onChangeText={onChangeEmail}
        placeholder="بريدك الإلكتروني"
        keyboardType="email-address"
        error={errors.email}
      />
      <UserInput
        value={password}
        onChangeText={onChangePassword}
        placeholder="كلمة المرور"
        password={true}
        error={errors.password}
      />
      {/* </View> */}
      {/* replace تخلي يروح الهوم و اذا ضغط زر الى الوراء ما راح يرجع لصفحة انشاء حساب  */}
      <Pressable onPress={() => navigation.replace('Home')}>
        <PrimaryText   type='body'  style={styles.textSkip} >تخطي التسجيل</PrimaryText>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('SighnUp')}>
        <PrimaryText type='body' >ليس لديك حساب ؟</PrimaryText>
      </Pressable>

      < TouchableOpacity onPress={handleLogin}>
        <LinearGradient style={styles.boton}
          colors={[Color.gradientBlueSkySec, Color.gradientBlueFir]}
          start={{ x: 1, y: 0 }} // من اليمين
          end={{ x: 0, y: 0 }}   // إلى اليسار
        >
          <Text style={styles.loginboton}>يلا نكمل</Text>
        </LinearGradient>

      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BackgroundBlack,
    paddingHorizontal:scale(20),
    textAlign: 'left',

    // paddingVertical: scale(70),

  },
  texttitle: {
     marginTop:scale(20),
  },
  text: {
    paddingVertical: scale(10),

  },

  logoWrapper: {
    marginTop: scale(30),
    width: scale(80),
    height: scale(80),
    borderRadius: 24,
    overflow: 'hidden',
    transform: [{ rotate: '13.06deg' }],
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 25,
      

  },

  logo: {
    width: '100%',
    height: '100%',
    
  },

  boton: {
      height: verticalScale(42),
    width: scale(330),
    borderRadius: 12,
    marginVertical: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginboton: {
    color: '#000000',
    textAlign: 'center',
    fontSize: scale(16),
    fontFamily:Font.PrimaryFontBold,

  },

  textSkip: {
    fontSize: 16,
    color: Color.gradientBlueFir,
    // marginVertical: 10,
    textDecorationLine: 'underline',
  },
  linearGradient: {
    flex: 1,
paddingHorizontal:scale(15),
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    // margin: 10,
    color: Color.White,

  },
});