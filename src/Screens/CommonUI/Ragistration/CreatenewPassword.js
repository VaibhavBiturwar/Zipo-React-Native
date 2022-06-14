import React, { useState } from "react";
import {
	View,
	StyleSheet,
	ImageBackground,
	I18nManager,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { MainGreenButton } from "../../../Components/GlobleComponents/Buttons";
import { SimpleGreenBackButton, SimpleHeader } from "../../../Components/GlobleComponents/Headers";
import { PasswordTextInput, MainTextinput } from "../../../Components/GlobleComponents/TextInputs";
import { ConstantField, EndPoints, TostTop } from "../../../Utils/ConstantField";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import i18n from "i18n-js";
import { useSelector, useDispatch } from "react-redux";
import { PostApi, PutApi_1 } from "../../../Api/Requests/ApiRequests";
import { PasswordConadition } from "../../../Utils/Conditions";
import { userTypeFun } from "../../../Redux/Actions/SignupAction";
import { Root } from "native-base";

export default function CreatenewPassword({ navigation, route }) {
	const LoginData = useSelector((state) => state.Login);
	const { forgetPhoneNumber } = LoginData;
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const OnNext = () => {
		let data = {
			mobile_number: forgetPhoneNumber,
			password: password,
		};
		PutApi_1(EndPoints.forgetPass, data)
			.then((data) => {
				if (data.succcess) {
					dispatch(userTypeFun("GasStation"));
					dispatch({ type: "LOGIN_RESET" });
					TostTop(data.message);
				} else {
					TostTop(data.message);
				}

				if (data.success) {
					navigation.navigate("Login");
				}
			})
			.catch((error) => {
				console.log("RESTE API ERROR::", error);
			});
	};

	return (
		<Root>
			<ImageBackground
				style={{
					flex: 1,
					//transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }]
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
						<View style={{ flex: 1, justifyContent: "center" }}>
							<View style={styles.InputContainer}>
								<SimpleHeader>{i18n.t("createNewPassword")}</SimpleHeader>
								<View style={{ height: 50 }} />
								<PasswordTextInput
									onChangeText={(values) => {
										setPassword(values);
									}}
								>
									{i18n.t("newPassword")}
								</PasswordTextInput>
								<PasswordTextInput
									onChangeText={(values) => {
										setConfirmPassword(values);
									}}
								>
									{i18n.t("confirmPassword")}
								</PasswordTextInput>
							</View>
						</View>

						<MainGreenButton
							style={{}}
							OnPress={() => {
								if (PasswordConadition(password, confirmPassword)) {
									OnNext();
								}
							}}
						>
							{i18n.t("next")}
						</MainGreenButton>
					</View>
				</TouchableWithoutFeedback>
			</ImageBackground>
		</Root>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	InputContainer: {
		paddingStart: ConstantField.IOS ? 30 : 100,
		paddingEnd: ConstantField.IOS ? 100 : 30,
	},
});
