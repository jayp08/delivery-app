import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialIcons, AntDesign, Feather } from "@expo/vector-icons";

/*
  Screens
*/
import AccountScreen from "./src/screens/AccountScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
import OrderDetailsScreen from "./src/screens/OrderDetailsScreen";
import ConfrimOrderDeliveryScreen from "./src/screens/ConfrimOrderDeliveryScreen";
import DeliveryDetailsScreen from "./src/screens/DeliveryDetailsScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import ResolveAuthScreen from "./src/screens/Resolver/ResolveAuthScreen";

/* 
  Context
*/
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";

/*
  Navigation
*/
import { setNavigator } from "./src/navigation/navigationRef";

const orderFlow = createStackNavigator({
  OrdersScreen,
  OrderDetailsScreen,
  ConfrimOrderDeliveryScreen,
});

orderFlow.navigationOptions = {
  title: "Orders",
  tabBarIcon: <Feather name="package" size={24} color="black" />,
};

const deliveryFlow = createStackNavigator({
  DeliveryScreen,
  DeliveryDetailsScreen,
});

deliveryFlow.navigationOptions = {
  title: "My Delivery",
  tabBarIcon: <MaterialIcons name="delivery-dining" size={24} color="black" />,
};

const accountFlow = createStackNavigator({
  AccountScreen,
});

accountFlow.navigationOptions = {
  title: "Account",
  tabBarIcon: <AntDesign name="user" size={24} color="black" />,
};

const switchNavigator = createSwitchNavigator({
  ResolveAuthScreen: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    SigninScreen,
    SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    orderFlow,
    deliveryFlow,
    accountFlow,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </LocationProvider>
  );
};
