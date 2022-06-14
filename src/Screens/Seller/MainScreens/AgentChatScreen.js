import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { ChatScreenMap } from "../../../Components/GlobleComponents/CustomMap";
import { ChatScreenHeader } from "../../../Components/GlobleComponents/Headers";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import { Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import i18n from "i18n-js";
import { TouchableOpacity } from "react-native-gesture-handler";
import ChatScreenCallModel from "../../CommonUI/CommonScreens/ChatScreenComponents/ChatScreenCallModel";

export default function AgentChatScreen({ navigation }) {
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
				<View style={{ flexDirection: "row" }}>
					<Image
						style={{ height: 50, width: 50, marginHorizontal: 10 }}
						source={require("../../../assets/profile.png")}
					/>
					<View
						style={{
							backgroundColor: Colors.MainColor,
							justifyContent: "space-around",
						}}
					>
						<Text>Requested for refill</Text>
						<Text>7.5Tons 91 Gasolin In 6 hours</Text>
					</View>
				</View>
				<View style={{ marginTop: 10, flexDirection: "row" }}>
					<View
						style={{
							alignItems: "center",
							justifyContent: "center",
							borderWidth: 1,
							padding: 10,
						}}
					>
						<Text>{i18n.t("cancelRequest")}</Text>
					</View>
					<View style={{ width: 20 }} />

					<TouchableOpacity
						onPress={() => {
							navigation.navigate("SendOffer");
						}}
					>
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								borderWidth: 1,
								padding: 10,
								width: 130,
								backgroundColor: Colors.BackButtonAndHadingColor,
							}}
						>
							<Text
								style={{
									color: Colors.White,
								}}
							>
								{i18n.t("sendOffer")}
							</Text>
						</View>
					</TouchableOpacity>
				</View>
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
