import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ChatScreenMap } from "../../../Components/GlobleComponents/CustomMap";
import { ChatScreenHeader } from "../../../Components/GlobleComponents/Headers";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import { Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import i18n from "i18n-js";
import { TouchableOpacity } from "react-native-gesture-handler";
import ChatScreenCallModel from "./ChatScreenComponents/ChatScreenCallModel";

export default function ChatScreen({ navigation }) {
	const [showModel, setShowModel] = useState(false);

	return (
		<View style={{ flex: 1, backgroundColor: Colors.StatusBarColor }}>
			<CustomStatusBar />
			<ChatScreenHeader
				navigation={navigation}
				CallButtonPress={() => {
					console.log("GAME:: ");
					setShowModel(true);
				}}
			/>
			<ChatScreenMap />
			<ChatScreenCallModel
				Call={showModel}
				CallPress={() => {}}
				call={() => {
					setShowModel(false);
				}}
				Cancel={() => {
					setShowModel(false);
				}}
			/>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("PayScreen");
					}}
				>
					<View
						style={{
							height: 30,
							backgroundColor: Colors.BackButtonColor,
							borderRadius: 10,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Text style={{ color: Colors.BackButtonAndHadingColor }}>
							Select Payment Method
						</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View
				style={{
					marginEnd: 20,
					marginStart: 20,
					height: 50,
					backgroundColor: Colors.ChatKeybordColor,
					elevation: 5,
					marginBottom: 20,
					borderRadius: 25,
					shadowColor: "#000",
					shadowOffset: {
						width: 0,
						height: 5,
					},
					shadowOpacity: 0.12,
					shadowRadius: 60,
					justifyContent: "center",
				}}
			>
				<TextInput
					style={{ marginLeft: 10, marginRight: 10 }}
					placeholder={i18n.t("message")}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
