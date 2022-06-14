import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { BackButtonWithBelowHeading } from "../../../Components/GlobleComponents/Headers";
import { TextInputWithHeading } from "../../../Components/GlobleComponents/TextInputs";
import i18n from "i18n-js";
import { MainGreenButton } from "../../../Components/GlobleComponents/Buttons";
import { Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../Utils/ConstantField";
import { Line } from "../../../Components/GlobleComponents/Line";

export default function AddNewCard({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: "#fff" }}>
			<StatusBar />
			<View style={{ flex: 1 }}>
				<BackButtonWithBelowHeading navigation={navigation}>
					{i18n.t("addnewCard")}
				</BackButtonWithBelowHeading>

				<Line />

				<View
					style={{
						marginTop: 20,
						paddingLeft: 30,
						paddingRight: 30,
					}}
				>
					<TextInputWithHeading PlaceHolder={"5213 6XX2 47XX XXX2"}>
						{i18n.t("cardnumber")}
					</TextInputWithHeading>
					<View
						style={{
							flexDirection: ConstantField.IOS ? "row-reverse" : "row",
							justifyContent: "space-between",
							marginTop: 20,
						}}
					>
						<View
							style={{
								flex: 1,
								paddingEnd: ConstantField.IOS ? null : 10,
								paddingStart: ConstantField.IOS ? 10 : null,
							}}
						>
							<TextInputWithHeading PlaceHolder={"11/25"}>
								{i18n.t("expiryDate")}
							</TextInputWithHeading>
						</View>
						<View
							style={{
								flex: 1,
								paddingEnd: ConstantField.IOS ? 10 : null,
								paddingStart: ConstantField.IOS ? null : 10,
							}}
						>
							<TextInputWithHeading PlaceHolder={"785"}>CVV</TextInputWithHeading>
						</View>
					</View>
				</View>
			</View>
			<MainGreenButton
				OnPress={() => {
					navigation.navigate("UserWallateScreen");
				}}
			>
				{i18n.t("addnewCard")}
			</MainGreenButton>
		</View>
	);
}
