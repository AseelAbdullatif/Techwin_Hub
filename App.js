// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { Text, View } from 'react-native';
// import MainStack from './src/stacks/MainStack';

// function App() {

//   return (
//     <MainStack />
//   );
// }





// export default App;

import React, { useEffect } from 'react';
import { I18nManager, View, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';
import { isAndroid, storageHandler } from './src/utils/helpers/Helpers';
import MainStack from './src/stacks/MainStack';
// import { useColors } from './src/hooks/useColors';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
    const { i18n } = useTranslation();
    const language = i18n.language;
    //   const Colors = useColors();

    useEffect(() => {
        (async () => {
            const lang = await storageHandler('get', 'language');
            // const appLanguage = lang || language;
            I18nManager.allowRTL(true);
            I18nManager.forceRTL(true);
            i18n.changeLanguage('ar');
            storageHandler('store', 'language', 'ar');
            if (isAndroid() && !I18nManager.isRTL) RNRestart.restart();
        })();
    }, []);

    useEffect(() => {
        I18nManager.allowRTL(language === 'ar');
        I18nManager.forceRTL(language === 'ar');
    }, [language]);

    return (

        <MainStack />

    );
}