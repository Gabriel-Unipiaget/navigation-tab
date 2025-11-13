import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './janelas/home';
import SobreScreen from './janelas/sobre';
import VendasScreen from './janelas/vendas';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
        <Tab.Screen name="Vendas" component={VendasScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}