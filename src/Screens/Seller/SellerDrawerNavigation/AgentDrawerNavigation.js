import React from "react";
import { View, Button, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { ConstantField } from "../../../Utils/ConstantField";
import { Colors } from "../../../Utility/DimenAndColor/DimenAndColor";

//Screens import
import OrdersScreen from "../MainScreens/OrdersScreen";
import AgentContectsScreen from "../MainScreens/AgentContectsScreen";
import AgentOrderStatusScreen from "../MainScreens/AgentOrderStatusScreen";
import AgentProfileScreen from "../MainScreens/AgentProfileScreen";
import AgentNotification from "../MainScreens/AgentNotification";
import PostAnAdd from "../MainScreens/PostAnAdd";

//Dummy
import ScheduleCalander from "../MainScreens/ScheduleCalander";

export default function AgentDrawerNavigation({ navigation }) {
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
			initialRouteName="OrdersScreen"
			backBehavior="initialRoute"
		>
			<Drawer.Screen
				name="OrdersScreen"
				component={OrdersScreen}
				options={{
					title: "",
					drawerIcon: ({ focused, size }) => (
						<FontAwesome name="home" size={size} color="white" />
					),
				}}
			/>
			<Drawer.Screen
				name="AgentNotification"
				component={AgentNotification}
				options={{
					title: "",
					drawerIcon: ({ focused, size }) => (
						<Ionicons name="notifications" size={size} color={"white"} />
					),
				}}
			/>
			{/* <Drawer.Screen
				name="AgentProfileScreen"
				component={AgentProfileScreen}
				options={{
					title: "",
					drawerIcon: ({ focused, size }) => (
						<Ionicons name="md-person" size={size} color={"white"} />
					),
				}}
			/> */}
			<Drawer.Screen
				name="AgentProfileScreen"
				component={AgentProfileScreen}
				options={{
					title: "",
					drawerIcon: ({ focused, size }) => (
						<Ionicons name="md-person" size={size} color={"white"} />
					),
				}}
			/>

			<Drawer.Screen
				name="AgentContectsScreen"
				component={AgentContectsScreen}
				options={{
					title: "",
					drawerIcon: ({ focused, size }) => (
						<MaterialCommunityIcons name="chat-processing" size={size} color="white" />
					),
				}}
			/>
			<Drawer.Screen
				name="AgentOrderStatusScreen"
				component={AgentOrderStatusScreen}
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
