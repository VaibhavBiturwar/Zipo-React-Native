import React from "react";
import { View, Text, StyleSheet, ImageBackground, TextInput, I18nManager } from "react-native";
import { MainGreenButton } from "../../../Components/GlobleComponents/Buttons";
import { BackButtonWithBelowHeading } from "../../../Components/GlobleComponents/Headers";
import {
	TextInputWithHeadingPassword,
	TextInputWithHeading,
} from "../../../Components/GlobleComponents/TextInputs";
import { ConstantField } from "../../../Utils/ConstantField";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import i18n from "i18n-js";
import { Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import { Line } from "../../../Components/GlobleComponents/Line";

export default function ChangePassword({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: Colors.StatusBarColor }}>
			<CustomStatusBar />
			<BackButtonWithBelowHeading navigation={navigation}>
				Change Password
			</BackButtonWithBelowHeading>

			<Line />

			<View style={{ flex: 1 }}>
				<View style={{ flex: 1, justifyContent: "center" }}>
					<View style={styles.InputContainer}>
						<TextInputWithHeadingPassword>
							{i18n.t("password")}
						</TextInputWithHeadingPassword>
						<View style={{ height: 50 }} />
						<TextInputWithHeadingPassword>
							{i18n.t("newPassword")}
						</TextInputWithHeadingPassword>
						<View style={{ height: 50 }} />
						<TextInputWithHeading PlaceHolder={i18n.t("confirmPassword")}>
							{i18n.t("confirmPassword")}
						</TextInputWithHeading>
					</View>
				</View>

				<MainGreenButton
					style={{}}
					OnPress={() => {
						//navigation.navigate("CreatenewPassword");
						navigation.goBack();
					}}
				>
					{i18n.t("confirm")}
				</MainGreenButton>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	InputContainer: {
		paddingStart: 30,
		paddingEnd: 30,
	},
});
