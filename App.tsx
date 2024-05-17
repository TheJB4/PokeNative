
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import Onboarding1 from './Screens/Onboarding1';

import { store } from './store/store';
import { Provider } from 'react-redux';
import Onboarding2 from './Screens/Onboarding2';
import Onboarding3 from './Screens/Onbording3';
import Register from './Screens/Register';
import GetEmail from './Screens/GetEmail';
import GetName from './Screens/GetName';
import GetPassword from './Screens/GetPassword';
import RegisterSucces from './Screens/RegisterSucces';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Onboarding1' component={Onboarding1} options={{ headerShown: false }} />
          <Stack.Screen name='Onboarding2' component={Onboarding2} options={{ headerShown: false }} />
          <Stack.Screen name='Onboarding3' component={Onboarding3} options={{ headerShown: false }} />
          <Stack.Screen name='Register' component={Register} options={{title: 'Crear cuenta'}} />
          <Stack.Screen name='GetEmail' component={GetEmail} options={{presentation:'modal',title: 'Crear cuenta'}} />
          <Stack.Screen name='GetPassword' component={GetPassword} options={{title: 'Crear cuenta', presentation:'modal'}} />
          <Stack.Screen name='GetName' component={GetName} options={{title: 'Crear cuenta', presentation:'fullScreenModal'}} />
          <Stack.Screen name='RegisterSucces' component={RegisterSucces} options={{title: 'Crear cuenta', headerShown: false}} />
          <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}