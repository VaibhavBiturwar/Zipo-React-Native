import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	I18nManager,
	StatusBar,
	TouchableOpacity,
	FlatList,
	Image,
} from "react-native";
import { SimpleGreenBackButton } from "../../../Components/GlobleComponents/Headers";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import i18n from "i18n-js";
import { ConstantField } from "../../../Utils/ConstantField";
import { ProfilePitcherWithEditButton } from "../../../Components/GlobleComponents/Profilepitcher";
import { PayMode, TextInputWithHeading } from "../../../Components/GlobleComponents/TextInputs";
import { Dimen, Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
const data = [{}, {}, {}];

export default function AgentEditProfile({ navigation }) {
	const [editPrifile, setEditProfile] = useState(false);
	const [profilePic, setProfilePic] = useState("");
	return (
		<ImageBackground
			style={{ flex: 1 }}
			source={require("../../../assets/main_bg_2.png")}
			resizeMode={"stretch"}
		>
			<StatusBar />
			<SimpleGreenBackButton navigation={navigation} />
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<ProfilePitcherWithEditButton
					Editmode={editPrifile}
					Uri={profilePic}
					Pickimage={() => {
						//PickProfileImage();
					}}
					EditClick={() => {
						setEditProfile(true);
					}}
					ShowEditIcon={true}
					ShowSaveButton={false}
					SaveButtonClick={() => {}}
				/>

				<Text
					style={{
						color: Colors.TextColor,
						fontSize: Dimen.FontSize_VeryBig,
						fontFamily: "product_sans_regular",
					}}
				>
					Wadi Stations
				</Text>

				<View style={{ marginTop: 40 }}>
					<TouchableOpacity>
						<View
							style={{
								flexDirection: ConstantField.IOS ? "row-reverse" : "row",
								alignItems: "center",
							}}
						>
							<MaterialIcons name="my-location" size={24} color={Colors.MainColor} />
							<Text
								style={{
									color: Colors.TextColor,
									fontFamily: "product_sans_regular",
									marginLeft: 5,
									marginRight: 5,
								}}
							>
								{i18n.t("tapTofetchLocation")}
							</Text>
						</View>
					</TouchableOpacity>

					<Text
						style={{
							color: Colors.TextColor,
							textAlign: "center",
							marginTop: 15,
							fontFamily: "product_sans_regular",
						}}
					>
						{i18n.t("typeHere")}
					</Text>

					<View style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}>
						<Text
							style={{
								color: Colors.TextColor,
								textAlign: "center",
								fontFamily: "product_sans_regular",
							}}
						>
							{i18n.t("orSelectonMap")}
						</Text>
						<TouchableOpacity>
							<Text style={{ marginHorizontal: 20, color: Colors.MainColor }}>
								Done
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						height: 80,
						justifyContent: "center",
						paddingHorizontal: 30,
						marginTop: 20,
						alignItems: "center",
					}}
				>
					<FlatList
						style={{ width: 240 }}
						horizontal
						data={data}
						keyExtractor={(item, index) => index.toString()}
						showsHorizontalScrollIndicator={false}
						renderItem={({ item, index }) => (
							<Image
								source={require("../../../assets/truck1.png")}
								key={index}
								style={{
									height: 70,
									width: 70,
									borderRadius: 10,
									alignSelf: "center",
									marginHorizontal: 5,
								}}
							></Image>
						)}
					></FlatList>
				</View>
			</View>
		</ImageBackground>
	);
}
