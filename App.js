import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack =createNativeStackNavigator()

import Home from './screens/Home'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{title:'Inicio'}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

