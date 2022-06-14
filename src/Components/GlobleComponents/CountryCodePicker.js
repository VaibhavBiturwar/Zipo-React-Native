import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { Dimen, Colors } from "../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../Utils/ConstantField";
import i18n from "i18n-js";

export default function CountryCodePicker(props) {
	return (
		<View style={styles.STYLE}>
			<PhoneInput
				placeholder={i18n.t("MobileNumber")}
				defaultCode="SA"
				disableArrowIcon={false}
				containerStyle={{
					width: "100%",
					borderColor: Colors.EdtiTextBarColor,
					borderBottomWidth: Dimen.TextInputBorderWidth,
					//fontSize: Dimen.FontsizeInputFields,
					padding: Dimen.TextInputPadding,
					fontFamily: "product_sans_regular",
					paddingBottom: 8,
					backgroundColor: "transparent",
				}}
				onChangeFormattedText={(values) => {
					props.OnChangeText(values);
				}}
				disabled={false}
				textContainerStyle={{
					backgroundColor: "transparent",
					marginTop: -20,
					marginBottom: -20,
					marginStart: -30,
					padding: 0,
					justifyContent: "center",
				}}
				layout="second"
				flagButtonStyle={{
					borderTopLeftRadius: 10,
					borderBottomLeftRadius: 10,
					color: "#FFF",
					// backgroundColor: "red",
					height: 30,
				}}
				textInputStyle={{
					color: "black",
					fontSize: 14,
					alignSelf: "center",
					fontFamily: "product_sans_regular",
					textAlign: ConstantField.IOS ? "right" : ConstantField.AND ? "right" : "left",
				}}
				codeTextStyle={{
					color: "black",
					marginLeft: -35,
					fontSize: 14,
					fontFamily: "product_sans_regular",
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	STYLE: {
		width: "100%",
	},
});
