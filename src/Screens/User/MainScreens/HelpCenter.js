import React from "react";
import { View, StyleSheet } from "react-native";
import i18n from "i18n-js";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import { MainGreenButton } from "../../../Components/GlobleComponents/Buttons";
import { MainTextinput } from "../../../Components/GlobleComponents/TextInputs";
import { ConstantField } from "../../../Utils/ConstantField";
import { Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import { BackButtonWithBelowHeading } from "../../../Components/GlobleComponents/Headers";
import { Line } from "../../../Components/GlobleComponents/Line";

export default function HelpCenter({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: Colors.StatusBarColor }}>
			<CustomStatusBar />
			<BackButtonWithBelowHeading navigation={navigation}>
				{i18n.t("helpCenter")}
			</BackButtonWithBelowHeading>
			<Line />
			<View style={{ flex: 1, justifyContent: "center", paddingLeft: 30, paddingRight: 30 }}>
				<MainTextinput onChangeText={(value) => {}}>{i18n.t("writeMessage")}</MainTextinput>
				<View style={{ height: 80 }} />
				<MainTextinput onChangeText={(value) => {}}>
					{i18n.t("contactInformation")}
				</MainTextinput>
			</View>
			<MainGreenButton
				style={{}}
				OnPress={() => {
					navigation.navigate("TankerType");
				}}
			>
				{i18n.t("confirm")}
			</MainGreenButton>
		</View>
	);
}
const styles = StyleSheet.create({
	InputContainer: {
		paddingStart: ConstantField.IOS ? 30 : 100,
		paddingEnd: ConstantField.IOS ? 100 : 30,
	},
});
