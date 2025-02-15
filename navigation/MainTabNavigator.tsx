import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import FavoritesStack from './FavoritesStack';

const Tab = createBottomTabNavigator();
const Tabs = {
  HomeStack: {
    name: 'Home',
    iconName: 'home-outline',
    focusedIconName: 'home',
  },
  FavoritesStack: {
    name: 'Favorites',
    iconName: 'heart-outline',
    focusedIconName: 'heart',
  },
} as const;

type TabName = keyof typeof Tabs;

const MainTabNavigator = () => {
  function renderTabBarIcon(
    focused: boolean,
    color: string,
    size: number,
    route: RouteProp<ParamListBase, string>
  ) {
    const iconName = focused
      ? Tabs[route.name as TabName]?.focusedIconName
      : Tabs[route.name as TabName]?.iconName;
    return <Ionicons name={iconName} size={size} color={color} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          title: Tabs[route.name as TabName]?.name,
          tabBarIcon: ({ focused, color, size }) => {
            return renderTabBarIcon(focused, color, size, route);
          },
          headerShown: false,
          tabBarActiveTintColor: 'green',
        })}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="FavoritesStack" component={FavoritesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
