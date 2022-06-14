import React, { useState } from "react";
import {
	View,
	Text,
	StatusBar,
	FlatList,
	ImageBackground,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { BackButtonAndLogoutButton } from "../../../Components/GlobleComponents/Headers";
import { ProfilePitcherWithEditButton } from "../../../Components/GlobleComponents/Profilepitcher";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import i18n from "i18n-js";
import { CustomTextsWithIcon } from "../../../Components/GlobleComponents/CustomTexts";
import { ConstantField } from "../../../Utils/ConstantField";
import { Dimen, Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import { Rating } from "react-native-ratings";

const data = [{}, {}, {}];

export default function AgentProfileScreen({ navigation }) {
	const [editPrifile, setEditProfile] = useState(false);
	const [images, setImages] = useState([{}]);

	return (
		<ImageBackground source={require("../../../assets/main_bg_2.png")} style={{ flex: 1 }}>
			<StatusBar />
			<BackButtonAndLogoutButton
				navigation={navigation}
				OnLogout={() => {
					navigation.navigate("Login");
				}}
			>
				Profile
			</BackButtonAndLogoutButton>
			<View style={{ alignItems: "center", marginTop: 20 }}>
				<ProfilePitcherWithEditButton
					Editmode={editPrifile}
					Uri={""}
					Pickimage={() => {}}
					EditClick={() => {}}
					ShowEditIcon={false}
					ShowSaveButton={false}
				/>
				<Text
					style={{
						color: Colors.TextColor,
						fontFamily: "product_sans_regular",
						marginTop: 5,
					}}
				>
					Waqdood Tankers
				</Text>
				<Rating
					style={{
						alignSelf: "center",
						marginTop: 5,
					}}
					type="star"
					ratingCount={5}
					imageSize={15}
					readonly={true}
					ratingColor={Colors.BackButtonAndHadingColor}
				/>

				<View
					style={{
						alignItems: "center",
						justifyContent: "center",
						flexDirection: ConstantField.IOS ? "row-reverse" : "row",
						marginTop: 5,
					}}
				>
					<MaterialIcons
						name="gps-fixed"
						size={18}
						color={Colors.BackButtonAndHadingColor}
					/>
					<Text
						style={{
							color: Colors.TextColor,
							fontFamily: "product_sans_regular",
							marginHorizontal: 5,
						}}
					>
						Az Zahara Street, Makkha
					</Text>

					<TouchableOpacity
						onPress={() => {
							navigation.navigate("AgentEditProfile");
						}}
					>
						<Text style={{ color: Colors.MainColor }}>Edit</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View
				style={{
					height: 80,
					justifyContent: "center",
					paddingHorizontal: 30,
					marginTop: 10,
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
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						paddingStart: ConstantField.IOS ? 30 : 100,
						paddingEnd: ConstantField.IOS ? 100 : 30,
					}}
				>
					<CustomTextsWithIcon
						text={"(966) 5x-xxx-xxxx"}
						OnPress={() => {
							navigation.navigate("Login");
						}}
					>
						<Ionicons name="call-outline" size={22} color={"black"} />
					</CustomTextsWithIcon>

					<CustomTextsWithIcon
						text={i18n.t("myAds")}
						OnPress={() => {
							navigation.navigate("MyAds");
						}}
					>
						<Ionicons name="volume-medium" size={22} color={"black"} />
					</CustomTextsWithIcon>

					<CustomTextsWithIcon
						text={i18n.t("wallet")}
						OnPress={() => {
							navigation.navigate("AgentWallateScreen");
						}}
					>
						<Ionicons name="wallet-sharp" size={22} />
					</CustomTextsWithIcon>

					<CustomTextsWithIcon
						text={i18n.t("changePassword")}
						OnPress={() => {
							navigation.navigate("ChangePassword");
						}}
					>
						<Ionicons name="lock-closed-sharp" size={22} />
					</CustomTextsWithIcon>

					<CustomTextsWithIcon
						text={i18n.t("helpCenter")}
						OnPress={() => {
							navigation.navigate("HelpCenter");
						}}
					>
						<Ionicons name="headset-sharp" size={22} />
					</CustomTextsWithIcon>

					<CustomTextsWithIcon
						text={i18n.t("aboutUs")}
						OnPress={() => {
							navigation.navigate("AboutUs");
						}}
					>
						<Ionicons name="information-circle-outline" size={22} />
					</CustomTextsWithIcon>
				</View>
			</ScrollView>
		</ImageBackground>
	);
}
