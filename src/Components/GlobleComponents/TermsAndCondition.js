import React from "react";
import { Alert, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { Dimen, Colors } from "../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../Utils/ConstantField";
let locale = Localization.isRTL;

export default function TermsAndCondition(props) {
	let selected = props.Selected;
	return (
		<View>
			{locale === true && Platform.OS === "ios" ? (
				<View style={styles.MainContainer}>
					<TouchableWithoutFeedback {...props}>
						<View style={{ flexDirection: ConstantField.IOS ? "row-reverse" : "row" }}>
							<View
								style={{
									borderWidth: 1,
									height: 13,
									width: 13,
									marginEnd: 10,
									borderRadius: 7,
									borderColor: Colors.MainColor,
									backgroundColor: selected === true ? Colors.MainColor : null,
								}}
							/>

							<Text
								style={{
									fontFamily: "sanse_bold",
									marginTop: -2,
									marginEnd: 5,
									color: Colors.BackButtonAndHadingColor,
								}}
							>
								{i18n.t("termsAndCondition")}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			) : (
				<View style={styles.MainContainer}>
					<TouchableWithoutFeedback {...props}>
						<View style={{ flexDirection: ConstantField.IOS ? "row-reverse" : "row" }}>
							<View
								style={{
									borderWidth: 1,
									height: 13,
									width: 13,
									marginEnd: 5,
									borderRadius: 7,
									borderColor: Colors.MainColor,
									backgroundColor: selected === true ? Colors.MainColor : null,
								}}
							/>

							<Text
								style={{
									fontFamily: "sanse_bold",
									marginTop: -2,
									color: Colors.BackButtonAndHadingColor,
								}}
							>
								{i18n.t("termsAndCondition")}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	MainContainer: {
		alignItems: "center",
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "center",
	},
});
