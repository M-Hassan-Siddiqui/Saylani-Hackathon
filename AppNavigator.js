import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/Getstarted';
import LoginScreen from './components/login';
import SignupScreen from './components/signup';
import ItemsAddScreen from './components/AddNewItem';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="LoginActivity"
  screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="Sign In" component={LoginScreen} />
      <Stack.Screen name="Sign up" component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;


function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Add Items" component={ItemsAddScreen} />
      </Tab.Navigator>
    );
  }

  