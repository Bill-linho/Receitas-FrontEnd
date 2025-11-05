import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './screens/Home'
import Recipes from './screens/Recipes'
import Categories from './screens/Categories'
import Users from './screens/Users'

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        
        <Stack.Screen 
        name="Home" component={Home} options={{title: 'Início'}}/>
        
        <Stack.Screen 
        name="Recipes" component={Recipes} options={{title: 'Receitas'}}/>

        <Stack.Screen 
        name="Categories" component={Categories} options={{title: 'Categorias'}}/>

        <Stack.Screen 
        name="Users" component={Users} options={{title: 'Usuarios'}}/>

      </Stack.Navigator>
   </NavigationContainer>
  );
}
