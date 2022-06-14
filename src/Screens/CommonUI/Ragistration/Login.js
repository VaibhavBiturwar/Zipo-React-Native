import React, { useEffect } from "react";
import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	Keyboard,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";
import i18n from "i18n-js";
import { useSelector, useDispatch } from "react-redux";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import { MainGreenButton } from "../../../Components/GlobleComponents/Buttons";
import { PasswordTextInput } from "../../../Components/GlobleComponents/TextInputs";
import CountryCodePicker from "../../../Components/GlobleComponents/CountryCodePicker";
import { ConstantField, TostBottom, EndPoints } from "../../../Utils/ConstantField";
import { Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import { phoneNumberFun, passwordFun, deviceTokenFun } from "../../../Redux/Actions/LoginAction";
import { Root } from "native-base";
import { NotificationToken } from "../../../Utils/ConstantMethod";
import { PostApi } from "../../../Api/Requests/ApiRequests";
import { LogInCondition } from "../../../Utils/Conditions";

export default function Login({ navigation, route }) {
	const LoginData = useSelector((state) => state.Login);
	const dispatch = useDispatch();
	const { phoneNumber, password, devideToken } = LoginData;
	//console.log("LOGINSCREEN DATA::", LoginData);

	useEffect(() => {
		getToken();
		return () => {};
	}, [devideToken]);

	const getToken = () => {
		NotificationToken().then((token) => {
			dispatch(deviceTokenFun(token));
		});
	};

	const onLogin = () => {
		Keyboard.dismiss();
		let data = {
			mobile_number: phoneNumber,
			password: password,
			device_token: devideToken,
		};

		if (LogInCondition(phoneNumber, password)) {
			PostApi(EndPoints.login, data)
				.then((data) => {
					if (data.success) {
						if (data.data.category === "user") {
							dispatch({ type: "LOGIN_RESET" });
							navigation.replace("DrawerNavigation");
						} else {
							navigation.replace("AgentDrawerNavigation");
						}
					} else {
						TostBottom(data.message);
					}
				})
				.catch((error) => {
					console.log("LOGIN ERROR CALLED::", error);
				});
		}
	};

	return (
		<Root>
			<ImageBackground
				style={{
					flex: 1,
				}}
				source={require("../../../assets/login_background.png")}
				resizeMode="cover"
			>
				<CustomStatusBar />
				<TouchableWithoutFeedback
					onPress={() => {
						Keyboard.dismiss();
					}}
				>
					<View style={{ flex: 1 }}>
						<View style={{ flex: 1 }}></View>
						<View style={styles.MainInutContainer}>
							<View style={styles.InputContainer}>
								<CountryCodePicker
									OnChangeText={(values) => {
										dispatch(phoneNumberFun(values));
										//dispatch(isLoggedFun(true));
									}}
								/>
								<PasswordTextInput
									onChangeText={(values) => {
										dispatch(passwordFun(values));
										//dispatch(isLoggedFun(false));
									}}
								>
									{i18n.t("Password")}
								</PasswordTextInput>
								<View style={styles.ForgetPasswordContainer}>
									<TouchableOpacity
										onPress={() => {
											navigation.navigate("ResetPassword");
										}}
									>
										<Text style={{ fontFamily: "product_sans_regular" }}>
											{i18n.t("forgetPassword")}
										</Text>
									</TouchableOpacity>
								</View>
							</View>

							<View style={styles.SignupButtonContainer}>
								<Text style={styles.NeedAndAccountStyleText}>
									{i18n.t("need_an_account")}
								</Text>
								<TouchableOpacity
									style={{ marginLeft: 10 }}
									onPress={() => {
										navigation.navigate("Signup");
									}}
								>
									<Text style={styles.SignupTextStyle}>{i18n.t("signUp")}</Text>
								</TouchableOpacity>
							</View>
						</View>
						<MainGreenButton
							OnPress={() => {
								if (devideToken != "") {
									onLogin();
								} else {
									TostBottom("Token Is Importent For Notification");
									getToken();
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
	ForgetPasswordContainer: {
		alignItems: ConstantField.IOS ? "flex-start" : "flex-end",
		marginTop: 20,
	},
	MainInutContainer: {
		flex: 1,
		paddingTop: 110,
	},
	InputContainer: {
		paddingStart: ConstantField.IOS ? 30 : 100,
		paddingEnd: ConstantField.IOS ? 100 : 30,
	},
	SignupButtonContainer: {
		flex: 1,
		paddingEnd: 30,
		paddingStart: 30,
		flexDirection: "row",
		alignItems: "center",
	},
	NeedAndAccountStyleText: {
		marginLeft: 5,
		marginRight: 5,
		fontFamily: "product_sans_regular",
	},
	SignupTextStyle: {
		color: Colors.MainColor,
		fontFamily: "product_sans_regular",
	},
});
