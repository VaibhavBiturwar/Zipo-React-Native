import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { BackButtonWithBelowHeading } from "../../../Components/GlobleComponents/Headers";
import { TextInputWithHeading } from "../../../Components/GlobleComponents/TextInputs";
import i18n from "i18n-js";
import { MainGreenButton } from "../../../Components/GlobleComponents/Buttons";
import { Line } from "../../../Components/GlobleComponents/Line";
import { ConstantField } from "../../../Utils/ConstantField";

export default function CashWithdraw({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<StatusBar />
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1 }}>
					<BackButtonWithBelowHeading navigation={navigation}>
						{i18n.t("cashWithdraw")}
					</BackButtonWithBelowHeading>
					<Line />
					<View style={styles.textContainer}>
						<TextInputWithHeading PlaceHolder={"Ex.Khalid Bakery"}>
							{i18n.t("accountTittle")}
						</TextInputWithHeading>
						<View style={{ height: 20 }} />
						<TextInputWithHeading heading={""} PlaceHolder={"Ex.Rajhi Bank"}>
							{i18n.t("bankName")}
						</TextInputWithHeading>
						<View style={{ height: 20 }} />
						<TextInputWithHeading heading={""} PlaceHolder={"Ex.4397815"}>
							{i18n.t("accountNumber")}
						</TextInputWithHeading>
						<View style={{ height: 20 }} />
						<TextInputWithHeading
							heading={""}
							PlaceHolder={"Ex.SA100000000000005528255"}
						>
							{i18n.t("iban")}
						</TextInputWithHeading>
					</View>
				</View>
				<MainGreenButton
					OnPress={() => {
						navigation.navigate("UserWallateScreen");
					}}
				>
					Confirm
				</MainGreenButton>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	textContainer: {
		flex: 1,
		paddingTop: 20,
		paddingRight: ConstantField.IOS ? 40 : 70,
		paddingLeft: ConstantField.IOS ? 70 : 40,
	},
	header: {
		marginTop: -25,
		marginLeft: 50,
	},
});
