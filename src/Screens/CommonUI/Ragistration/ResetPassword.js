import React, { useState } from "react";
import {
	ImageBackground,
	Text,
	View,
	StyleSheet,
	I18nManager,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import CountryCodePicker from "../../../Components/GlobleComponents/CountryCodePicker";
import { ConstantField, TostTop } from "../../../Utils/ConstantField";
import { MainGreenButton } from "../../../Components/GlobleComponents/Buttons";
import { SimpleGreenBackButton, SimpleHeader } from "../../../Components/GlobleComponents/Headers";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import i18n from "i18n-js";
import { fogetPassNumberFun } from "../../../Redux/Actions/LoginAction";
import { userTypeFun } from "../../../Redux/Actions/SignupAction";
import { useSelector, useDispatch } from "react-redux";
import { ForgetPasswordConadition } from "../../../Utils/Conditions";
import { Root } from "native-base";

export default function ResetPassword({ navigation }) {
	const LoginData = useSelector((state) => state.Login);
	const { forgetPhoneNumber } = LoginData;
	const dispatch = useDispatch();

	const onNavigate = () => {
		if (ForgetPasswordConadition(forgetPhoneNumber)) {
			dispatch(userTypeFun("ForgetPassWord"));
			navigation.navigate("OTPVerification");
		}
	};
	return (
		<Root>
			<ImageBackground
				style={{
					flex: 1,
				}}
				source={require("../../../assets/main_colord_bg.png")}
				resizeMode="stretch"
			>
				<CustomStatusBar />
				<TouchableWithoutFeedback
					onPress={() => {
						Keyboard.dismiss();
					}}
				>
					<View style={{ flex: 1 }}>
						<SimpleGreenBackButton navigation={navigation} />
						<View style={{ justifyContent: "center", flex: 1 }}>
							<View style={styles.InputContainer}>
								<SimpleHeader>{i18n.t("resetPassword")}</SimpleHeader>
								<View style={{ height: 70 }} />
								<CountryCodePicker
									OnChangeText={(values) => {
										console.log("VALUE::", values);
										dispatch(fogetPassNumberFun(values));
									}}
								/>
							</View>
						</View>
					</View>
				</TouchableWithoutFeedback>
				<MainGreenButton
					OnPress={() => {
						onNavigate();
					}}
				>
					{i18n.t("next")}
				</MainGreenButton>
			</ImageBackground>
		</Root>
	);
}

const styles = StyleSheet.create({
	InputContainer: {
		paddingStart: ConstantField.IOS ? 30 : 100,
		paddingEnd: ConstantField.IOS ? 100 : 30,
	},

	SignupButtonContainer: {
		flex: 1,
		paddingEnd: 30,
		paddingStart: 30,
		flexDirection: ConstantField.IOS ? "row-reverse" : "row",
		alignItems: "center",
	},
});
