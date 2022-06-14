import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList } from "react-native";
import { BackButtonAndProfilePicture } from "../../../Components/GlobleComponents/Headers";
import { Ionicons } from "@expo/vector-icons";
import i18n from "i18n-js";
import { ConstantField } from "../../../Utils/ConstantField";
import { MainTextinput } from "../../../Components/GlobleComponents/TextInputs";
import { Dimen, Colors } from "../../../Utility/DimenAndColor/DimenAndColor";

export default function SendOffer({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: Colors.White }}>
			<StatusBar />
			<BackButtonAndProfilePicture navigation={navigation} />

			<View style={{ marginTop: 65, marginHorizontal: 30 }}>
				<MainTextinput onChangeText={(value) => {}}>
					{i18n.t("entergasoline")}
				</MainTextinput>
				<View style={{ height: 40 }} />
				<MainTextinput onChangeText={(value) => {}}>
					{i18n.t("enterdeliveryprice")}
				</MainTextinput>

				<View style={{ alignItems: "center", marginTop: 40 }}>
					<Text>Total</Text>
					<View
						style={{
							height: 50,
							width: 150,
							borderWidth: 1,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Text
							style={{
								textAlign: "center",
								fontSize: Dimen.FontSize_VeryBig,
								color: Colors.TextColor,
								marginTop: 5,
							}}
						>
							SR 2000
						</Text>
					</View>
				</View>
			</View>

			<View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 40 }}>
				<View
					style={{
						height: 40,
						width: 140,
						borderWidth: 1,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<TouchableOpacity onPress={() => navigation.navigate("SellerLocation")}>
						<Text>{i18n.t("cancelRequest")}</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						height: 40,
						width: 140,
						backgroundColor: Colors.BackButtonAndHadingColor,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<TouchableOpacity
						onPress={() => {
							//navigation.navigate("MyAds")
						}}
					>
						<Text style={{ color: "white" }}>{i18n.t("sendOffer")}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({});
