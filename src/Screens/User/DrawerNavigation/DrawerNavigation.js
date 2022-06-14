import React from "react";
import { View, Button, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { ConstantField } from "../../../Utils/ConstantField";
import { Colors } from "../../../Utility/DimenAndColor/DimenAndColor";

//Screens import
import UserHomeScreen from "../MainScreens/UserHomeScreen";
import NotificationScreen from "../MainScreens/NotificationScreen";
import ContectsScreen from "../MainScreens/ContectsScreen";
import ProfileScreen from "../MainScreens/ProfileScreen";
import OrderStatusScreen from "../MainScreens/OrderStatusScreen";

export default function DrawerNavigation({ navigation }) {
	const Drawer = createDrawerNavigator();
	return (
		<Drawer.Navigator
			drawerStyle={{
				width: 70,
				backgroundColor: Colors.DrawerColor,
				justifyContent: "center",
				//paddingTop: 220,
				//marginTop: 25,
			}}
			drawerContentOptions={{
				activeTintColor: "white",
				itemStyle: {
					backgroundColor: "transparent",
					marginTop: 25,
					//alignSelf: "center",
				},
			}}
			drawerPosition={ConstantField.IOS ? "right" : ConstantField.AND ? "right" : "left"}
			statusBarAnimation="slide"
			initialRouteName="UserHomeScreen"
			backBehavior="initialRoute"
		>
			<Drawer.Screen
				name="UserHomeScreen"
				component={UserHomeScreen}
				options={{
					title: "",
					drawerIcon: ({ focused, size }) => (
						<FontAwesome name="home" size={size} color="white" />
					),
				}}
			/>

			<Drawer.Screen
				name="NotificationScreen"
				component={NotificationScreen}
				options={{
					title: "",
					drawerIcon: ({ focused, size }) => (
						<Ionicons name="notifications" size={size} color={"white"} />
					),
				}}
			/>

			<Drawer.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					title: "",
					drawerIcon: ({ focused, size }) => (
						<Ionicons name="md-person" size={size} color={"white"} />
					),
				}}
			/>

			<Drawer.Screen
				name="ContectsScreen"
				component={ContectsScreen}
				options={{
					title: "",
					drawerIcon: ({ focused, size }) => (
						<MaterialCommunityIcons name="chat-processing" size={size} color="white" />
					),
				}}
			/>

			<Drawer.Screen
				name="OrderStatusScreen"
				component={OrderStatusScreen}
				options={{
					title: "",
					drawerIcon: ({ focused, size }) => (
						<FontAwesome5 name="history" size={size} color="white" />
					),
				}}
			/>
		</Drawer.Navigator>
	);
}
