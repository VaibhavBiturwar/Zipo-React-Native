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
	ScrollView,
} from "react-native";
import {
	BackButtonAndProfilePicture,
	BackButtonWithBelowHeading,
} from "../../../Components/GlobleComponents/Headers";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import i18n from "i18n-js";
import { ConstantField } from "../../../Utils/ConstantField";
import { TextInputWithHeading } from "../../../Components/GlobleComponents/TextInputs";
import { Dimen, Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
//import { BalanceScreenListModel } from "../ListModel/BalanceScreenListModel";
import { CashWithdrawbutton } from "../../../Components/GlobleComponents/Buttons";
import { CardComponent } from "../../../Components/GlobleComponents/CardComponent";

export default function AgentAddPayment({ navigation }) {
	const [editPrifile, setEditProfile] = useState(false);
	const [profilePic, setProfilePic] = useState("");

	const items = [{ card: "Visa", num: 636 }];
	return (
		<ScrollView style={{ flex: 1, backgroundColor: Colors.StatusBarColor }}>
			<View style={{ backgroundColor: Colors.StatusBarColor }}>
				<StatusBar />
				<BackButtonWithBelowHeading navigation={navigation}>
					Ad payment
				</BackButtonWithBelowHeading>
				<View style={{ marginTop: 20 }} />
				<CardComponent />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	profiletext: {
		color: Colors.TextColor,
		fontSize: Dimen.FontSize_VeryBig,
		marginStart: -12,
		marginTop: -20,
	},
	icon1: {
		backgroundColor: "#606060",
		height: 38,
		width: 60,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	icon2: {
		backgroundColor: "#FFFFFF",
		height: 38,
		width: 60,
		borderRadius: 10,
		borderWidth: 0.6,
		borderColor: Colors.TextColor,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	textIn: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingStart: 40,
		paddingEnd: 70,
	},
	payButt: {
		alignItems: "center",
		height: 25,
		width: 160,
		borderRadius: 15,
		backgroundColor: "#4FE588",
		alignSelf: "center",
		marginTop: 20,
	},
	fList: {
		marginTop: 10,
		backgroundColor: "#F4F2F2",
		height: 35,
		width: 170,
		borderRadius: 5,
		alignContent: "center",
	},
});
