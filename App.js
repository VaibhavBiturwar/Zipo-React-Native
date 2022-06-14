import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Notifications from "expo-notifications";
import { Provider } from "react-redux";

//Store
import store from "./src/Redux/Store/Store";

//Ragistration Screens
import SplashScreen from "./src/Screens/CommonUI/SpleshScreens/SpleshScreen";
import Signup from "./src/Screens/CommonUI/Ragistration/Signup";
import Login from "./src/Screens/CommonUI/Ragistration/Login";
import OTPVerification from "./src/Screens/CommonUI/Ragistration/OTPVerification";
import CreatenewPassword from "./src/Screens/CommonUI/Ragistration/CreatenewPassword";
import ResetPassword from "./src/Screens/CommonUI/Ragistration/ResetPassword";
//Payment
//Chat Screen
import ChatScreen from "./src/Screens/CommonUI/CommonScreens/ChatScreen";
//User Main Screens
import UserHomeScreen from "./src/Screens/User/MainScreens/UserHomeScreen";
import GooglePlaceAutoCompleteScreen from "./src/Screens/User/MainScreens/GooglePlaceAutoCompleteScreen";
import GooglePlaceAutoCompleteScreen2 from "./src/Screens/User/MainScreens/GooglePlaceAutoCompleteScreen2";
import ProfileScreen from "./src/Screens/User/MainScreens/ProfileScreen";
import TenkerType from "./src/Screens/User/MainScreens/TenkerType";
import OffersScreen from "./src/Screens/User/MainScreens/OffersScreen";
import NotificationScreen from "./src/Screens/User/MainScreens/NotificationScreen";
import ContectsScreen from "./src/Screens/User/MainScreens/ContectsScreen";
import ChangePassword from "./src/Screens/User/MainScreens/ChangePassword";
import HelpCenter from "./src/Screens/User/MainScreens/HelpCenter";
import AboutUs from "./src/Screens/User/MainScreens/AboutUs";
import AddNewCard from "./src/Screens/User/MainScreens/AddNewCard";
import UserWallateScreen from "./src/Screens/User/MainScreens/UserWallateScreen";
import CashWithdraw from "./src/Screens/User/MainScreens/CashWithdraw";
import PayScreen from "./src/Screens/User/MainScreens/PayScreen";
import OrderStatusScreen from "./src/Screens/User/MainScreens/OrderStatusScreen";
import EditProfile from "./src/Screens/User/MainScreens/EditProfile";
import DrawerNavigation from "./src/Screens/User/DrawerNavigation/DrawerNavigation";
//Seller Main Screens
import OrdersScreen from "./src/Screens/Seller/MainScreens/OrdersScreen";
import AgentContectsScreen from "./src/Screens/Seller/MainScreens/AgentContectsScreen";
import AgentOrderStatusScreen from "./src/Screens/Seller/MainScreens/AgentOrderStatusScreen";
import AgentProfileScreen from "./src/Screens/Seller/MainScreens/AgentProfileScreen";
import AgentNotification from "./src/Screens/Seller/MainScreens/AgentNotification";
import ScheduleCalander from "./src/Screens/Seller/MainScreens/ScheduleCalander";
import PostAnAdd from "./src/Screens/Seller/MainScreens/PostAnAdd";
import AgentEditProfile from "./src/Screens/Seller/MainScreens/AgentEditProfile";
import MyAds from "./src/Screens/Seller/MainScreens/MyAds";
import AgentAddPayment from "./src/Screens/Seller/MainScreens/AgentAddPayment";
import SellerAddPostSuccessfull from "./src/Screens/Seller/MainScreens/SellerAddPostSuccessfull";
import SelectTankerType from "./src/Screens/Seller/MainScreens/SelectTankerType";
import AgentChatScreen from "./src/Screens/Seller/MainScreens/AgentChatScreen";
import SendOffer from "./src/Screens/Seller/MainScreens/SendOffer";
import AgentWallateScreen from "./src/Screens/Seller/MainScreens/AgentWallateScreen";
import AgentDrawerNavigation from "./src/Screens/Seller/SellerDrawerNavigation/AgentDrawerNavigation";

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: true,
	}),
});

export default function App() {
	const Stack = createStackNavigator();
	useEffect(() => {
		Notifications.addNotificationReceivedListener(_handleNotification);
	}, []);

	const _handleNotification = (notification) => {};

	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="SplashScreen"
					screenOptions={{
						headerShown: false,
					}}
				>
					{/* Rgistartion Screens */}
					<Stack.Screen name="SplashScreen" component={SplashScreen} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Signup" component={Signup} />
					<Stack.Screen name="OTPVerification" component={OTPVerification} />
					<Stack.Screen name="CreatenewPassword" component={CreatenewPassword} />
					<Stack.Screen name="ResetPassword" component={ResetPassword} />
					{/* User MainScreens */}
					<Stack.Screen name="UserHomeScreen" component={UserHomeScreen} />
					<Stack.Screen name="ProfileScreen" component={ProfileScreen} />
					<Stack.Screen name="TenkerType" component={TenkerType} />
					<Stack.Screen name="OffersScreen" component={OffersScreen} />
					<Stack.Screen name="NotificationScreen" component={NotificationScreen} />
					<Stack.Screen name="ContectsScreen" component={ContectsScreen} />
					<Stack.Screen name="ChangePassword" component={ChangePassword} />
					<Stack.Screen name="HelpCenter" component={HelpCenter} />
					<Stack.Screen name="AboutUs" component={AboutUs} />
					<Stack.Screen name="AddNewCard" component={AddNewCard} />
					<Stack.Screen name="UserWallateScreen" component={UserWallateScreen} />
					<Stack.Screen name="CashWithdraw" component={CashWithdraw} />
					<Stack.Screen name="PayScreen" component={PayScreen} />
					<Stack.Screen name="OrderStatusScreen" component={OrderStatusScreen} />
					<Stack.Screen name="EditProfile" component={EditProfile} />
					<Stack.Screen
						name="GooglePlaceAutoCompleteScreen"
						component={GooglePlaceAutoCompleteScreen}
					/>
					<Stack.Screen
						name="GooglePlaceAutoCompleteScreen2"
						component={GooglePlaceAutoCompleteScreen2}
					/>

					{/* User DrawerNavigation */}
					<Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
					{/* Seller MainScreens */}
					<Stack.Screen name="OrdersScreen" component={OrdersScreen} />
					<Stack.Screen name="ScheduleCalander" component={ScheduleCalander} />
					<Stack.Screen name="PostAnAdd" component={PostAnAdd} />
					<Stack.Screen name="AgentEditProfile" component={AgentEditProfile} />
					<Stack.Screen name="MyAds" component={MyAds} />
					<Stack.Screen name="AgentAddPayment" component={AgentAddPayment} />
					<Stack.Screen name="SelectTankerType" component={SelectTankerType} />
					<Stack.Screen name="AgentChatScreen" component={AgentChatScreen} />
					<Stack.Screen name="SendOffer" component={SendOffer} />
					<Stack.Screen name="AgentWallateScreen" component={AgentWallateScreen} />
					<Stack.Screen
						name="SellerAddPostSuccessfull"
						component={SellerAddPostSuccessfull}
					/>
					{/* Agent DrawerNavigation */}
					<Stack.Screen name="AgentDrawerNavigation" component={AgentDrawerNavigation} />
					{/* ChatScreen */}
					<Stack.Screen name="ChatScreen" component={ChatScreen} />
					{/* Payment  UI */}
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
