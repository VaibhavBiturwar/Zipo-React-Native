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
} from "react-native";
import { SimpleGreenBackButton } from "../../../Components/GlobleComponents/Headers";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import i18n from "i18n-js";
import { ConstantField } from "../../../Utils/ConstantField";
import { ProfilePitcherWithEditButton } from "../../../Components/GlobleComponents/Profilepitcher";
import { PayMode, TextInputWithHeading } from "../../../Components/GlobleComponents/TextInputs";
import { Dimen, Colors } from "../../../Utility/DimenAndColor/DimenAndColor";

export default function EditProfile({ navigation }) {
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
						PickProfileImage();
					}}
					EditClick={() => {
						setEditProfile(true);
					}}
					ShowEditIcon={false}
					ShowSaveButton={true}
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
					<Text
						style={{
							color: Colors.TextColor,
							textAlign: "center",
							marginTop: 15,
							fontFamily: "product_sans_regular",
						}}
					>
						{i18n.t("orSelectonMap")}
					</Text>
				</View>
			</View>
		</ImageBackground>
	);
}
