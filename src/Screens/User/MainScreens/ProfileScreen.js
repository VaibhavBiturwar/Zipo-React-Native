import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, StatusBar, TextInput } from "react-native";
import { BackButtonAndLogoutButton } from "../../../Components/GlobleComponents/Headers";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import i18n from "i18n-js";
import { ConstantField } from "../../../Utils/ConstantField";
import { ProfilePitcherWithEditButton } from "../../../Components/GlobleComponents/Profilepitcher";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import { CustomTextsWithIcon } from "../../../Components/GlobleComponents/CustomTexts";

export default function ProfileScreen({ navigation }) {
	const [editPrifile, setEditProfile] = useState(false);
	const [profilePic, setProfilePic] = useState("");

	return (
		<ImageBackground
			style={{
				flex: 1,
				//transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }]
			}}
			source={require("../../../assets/main_bg_2.png")}
			resizeMode={"stretch"}
		>
			<StatusBar />
			<BackButtonAndLogoutButton
				navigation={navigation}
				OnLogout={() => {
					navigation.navigate("Login");
				}}
			/>
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1 }}>
					<View style={{ alignItems: "center", marginTop: 20 }}>
						<ProfilePitcherWithEditButton
							Editmode={editPrifile}
							Uri={""}
							Pickimage={() => {}}
							EditClick={() => {
								navigation.navigate("EditProfile");
							}}
							ShowEditIcon={true}
							ShowSaveButton={false}
						/>
						<TextInput
							style={{
								color: Colors.BackButtonAndHadingColor,
								fontSize: Dimen.FontSize_big,
								fontFamily: "product_sans_regular",
								marginTop: 20,
							}}
							placeholder={i18n.t("stationName")}
							editable={false}
						/>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<MaterialIcons name="gps-fixed" size={18} color={Colors.MainColor} />
							<TextInput
								style={{
									color: Colors.BackButtonAndHadingColor,
									fontSize: Dimen.FontSize_big,
									fontFamily: "product_sans_regular",
									marginHorizontal: 5,
								}}
								placeholder={"24237, Jafari Street, Mecca"}
								editable={false}
							/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
							paddingStart: ConstantField.IOS ? 30 : 100,
							paddingEnd: ConstantField.IOS ? 100 : 30,
						}}
					>
						<CustomTextsWithIcon text={"(966) 5x-xxx-xxxx"} OnPress={() => {}}>
							<Ionicons
								name="call-outline"
								size={22}
								color={Colors.BackButtonAndHadingColor}
							/>
						</CustomTextsWithIcon>
						<CustomTextsWithIcon
							text={i18n.t("wallet")}
							OnPress={() => {
								navigation.navigate("UserWallateScreen");
							}}
						>
							<Ionicons
								name="wallet-sharp"
								size={22}
								color={Colors.BackButtonAndHadingColor}
							/>
						</CustomTextsWithIcon>
						<CustomTextsWithIcon
							text={i18n.t("changePassword")}
							OnPress={() => {
								navigation.navigate("ChangePassword");
							}}
						>
							<Ionicons
								name="lock-closed-sharp"
								size={22}
								color={Colors.BackButtonAndHadingColor}
							/>
						</CustomTextsWithIcon>
						<CustomTextsWithIcon
							text={i18n.t("helpCenter")}
							OnPress={() => {
								navigation.navigate("HelpCenter");
							}}
						>
							<Ionicons
								name="headset-sharp"
								size={22}
								color={Colors.BackButtonAndHadingColor}
							/>
						</CustomTextsWithIcon>
						<CustomTextsWithIcon
							text={i18n.t("aboutUs")}
							OnPress={() => {
								navigation.navigate("AboutUs");
							}}
						>
							<Ionicons
								name="information-circle-outline"
								size={22}
								color={Colors.BackButtonAndHadingColor}
							/>
						</CustomTextsWithIcon>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	InputContainer: {
		paddingStart: ConstantField.IOS ? 30 : 100,
		paddingEnd: ConstantField.IOS ? 100 : 30,
	},
});
