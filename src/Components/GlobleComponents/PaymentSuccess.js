import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { BackButtonWithBelowHeading } from "../../../Components/GlobleComponents/Headers";
import { Ionicons } from "@expo/vector-icons";
import { Dimen, Colors } from "../../../Utility/DimenAndColor/DimenAndColor";

export default function PaymentSuccess({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: Colors.White }}>
			<StatusBar />
			<View style={{ flex: 1, marginTop: 15 }}>
				<BackButtonWithBelowHeading navigation={navigation} />

				<View style={styles.container}>
					<Ionicons
						name={"checkmark-circle-outline"}
						size={180}
						color={Colors.MainColor}
					/>
					<Text style={styles.textdecoration}>Request Ended Successfully</Text>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 55,
	},
	textdecoration: {
		fontSize: Dimen.FontSize_VeryBig,
		fontWeight: "bold",
		color: Colors.MainColor,
	},
});
