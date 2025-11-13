import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './janelas/home';
import MenuScreen from './janelas/menu';
import SobreScreen from './janelas/sobre';
import VendasScreen from './janelas/vendas';
import GaleriaScreen from './janelas/galeria';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" 
      screenOptions={({ route }) => ({ 
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Menu"){
            iconName = focused ? "menu" : "menu";
          } else if (route.name === "Sobre"){
            iconName = focused ? "account" : "account-outline";
          } else if (route.name === "Vendas"){
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Galeria"){
            iconName = focused ? "view-compact" : "view-compact-outline";
          }

          return <MaterialCommunityIcons name={iconName} size={30} color={focused ? "#33605A" : "#91A398"} />;

        },
        tabBarStyle:{
          backgroundColor: '#070001',
        },
      })}>

        <Tab.Screen name="Menu" component={MenuScreen} />

        <Tab.Screen name="Sobre" component={SobreScreen} />

        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Vendas" component={VendasScreen} />

        <Tab.Screen name="Galeria" component={GaleriaScreen} />

      </Tab.Navigator>
    </NavigationContainer>
    
  );
}