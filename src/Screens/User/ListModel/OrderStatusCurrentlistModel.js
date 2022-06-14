import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../Utils/ConstantField";

export default function OrderStatusCurrentlistModel(props) {
	return (
		<View style={styles.MainContainer}>
			<View style={styles.GreenDot}></View>
			<View style={{ flex: 1, alignItems: "center" }}>
				<View>
					<Text style={styles.MainTextItems}>Dec 29</Text>
					<Text style={styles.MainTextItems}>Waqood Tanker</Text>
					<Text style={styles.MainTextItems}>
						{/* {i18n.t("refill")}*/}
						Refill 91 Gasolin
					</Text>
					<Text style={styles.MainTextItems}>16:00</Text>
				</View>
			</View>

			{/* Btton */}
			<View style={styles.ButtonContainer}>
				<View style={styles.ButtonBackGround}>
					<Text
						style={{
							fontSize: 12,
							fontWeight: "normal",
							color: props.change ? Colors.BackButtonAndHadingColor : "white",
							alignSelf: "center",
							fontFamily: "product_sans_regular",
						}}
					>
						{/* {i18n.t("Processing")} */}
						{props.change ? "Processing" : "Completed"}
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	MainContainer: {
		flexDirection: ConstantField.IOS ? "row-reverse" : "row",
		marginBottom: 15,
	},
	MainTextItems: {
		fontSize: Dimen.FontSize_Normal,
		color: "#4F4F4F",
		textAlign: ConstantField.IOS ? "right" : "left",
		fontFamily: "product_sans_regular",
	},
	GreenDot: {
		height: 20,
		width: 20,
		borderRadius: 10,
		backgroundColor: Colors.MainColor,
	},
	ButtonContainer: {
		flex: 1,
		alignItems: ConstantField.IOS ? "flex-start" : "flex-end",
		alignSelf: "center",
	},
	ButtonBackGround: {
		backgroundColor: Colors.MainColor,
		borderRadius: 20,
		height: 30,
		width: 100,
		alignItems: "center",
		justifyContent: "center",
	},
});
