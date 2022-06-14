import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Dimen } from "../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../Utils/ConstantField";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { CashWithdrawbutton } from "../../Components/GlobleComponents/Buttons";
import { TextInputWithHeading } from "../../Components/GlobleComponents/TextInputs";
import i18n from "i18n-js";

export const CardComponent = (props) => {
	return (
		<View style={{ paddingTop: 10 }}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<View style={styles.icon1}>
					<Ionicons name="wallet" color={"green"} size={18} />
				</View>

				<View style={styles.icon2}>
					<AntDesign name="apple1" size={18} color="black" />
					<Text>Pay</Text>
				</View>
			</View>
			<View style={{ marginTop: 20 }}>
				<TextInputWithHeading
					PlaceHolder={"Ahmad Azhoors"}
					OnChangeText={(value) => {
						//props.OnGetName(value);
					}}
				>
					{i18n.t("cardName")}
				</TextInputWithHeading>
				<View
					style={{
						marginTop: 10,
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
				<Text style={{ alignSelf: "center", marginTop: 30, fontWeight: "bold" }}>
					Total----------------------------SR2000
				</Text>
				<View
					style={{
						flexDirection: ConstantField.IOS ? "row-reverse" : "row",
						alignItems: "center",
						marginTop: 20,
						alignSelf: "center",
					}}
				>
					<AntDesign name="checkcircle" size={15} color="black" />
					<Text style={{ marginLeft: 5, marginRight: 5 }}>
						{i18n.t("saveCardDetail")}
					</Text>
				</View>
				<View style={{ alignItems: "center", justifyContent: "center", marginTop: 30 }}>
					<CashWithdrawbutton OnPress={() => {}}>Pay</CashWithdrawbutton>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	icon1: {
		backgroundColor: "#606060",
		height: 45,
		width: 70,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	icon2: {
		backgroundColor: "#FFFFFF",
		height: 45,
		width: 70,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: Colors.TextColor,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
});
