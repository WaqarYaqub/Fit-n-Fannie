import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigation/AuthNavigator';
import HealthDisclaimer from './screens/HealthDisclaimer';
import HealthDisclaimer2 from './screens/HealthDisclaimer2';
import WeightScreen from './screens/weight';
import HeightScreen from './screens/Height';
import AgeScreen from './screens/Age';
import GenderCard from './components/GenderCard';
import {images} from './components/constants/constants';
import GenderScreen from './screens/GenderScreen';
import {SafeAreaView} from 'react-native';
import FitnessQuizScreen from './screens/FitnessQuizScreen';
import {
  requestUserPermission,
  NotificationListener,
} from './utils/PushNotification/PushNotification';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Profile from './screens/Profile';
import GoalScreen from './screens/GoalScreen';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListener();
    GoogleSignin.configure({
      webClientId:
        '1073384982468-itp0fovbutlcr929etl5977f3ertitmo.apps.googleusercontent.com',
    });
  }, []);
  return (
    // <SafeAreaView>
    //   <View>
    //     <Text>Muhammad Saqib</Text>
    //     <Text
    //       style={{
    //         fontFamily: POPPINS_ITALIC,
    //         // fontFamily: 'Poppins-Italic',
    //       }}>
    //       {API_URL + ':::::Token:::::' + API_TOKEN}
    //     </Text>
    //   </View>
    // </SafeAreaView>
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>

    // <SafeAreaView>
    //   <GenderCard
    //     // changeColor={false}
    //     image={images.female}
    //     onPress={val => alert(val)}
    //     imageHeight={45}
    //     imageWidth={33}
    //   />
    // </SafeAreaView>
    // <HeightScreen />
    // <GoalScreen />
  );
};

export default App;
