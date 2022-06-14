import React, { useEffect, useState } from "react";
import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	I18nManager,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import i18n from "i18n-js";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import { MainGreenButton } from "../../../Components/GlobleComponents/Buttons";
import { SimpleGreenBackButton, SimpleHeader } from "../../../Components/GlobleComponents/Headers";
import { ConstantField } from "../../../Utils/ConstantField";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import OTPConatiner from "../../../Components/GlobleComponents/OTPConatiner";
import * as firebase from "firebase";
import { Root } from "native-base";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { useSelector, useDispatch } from "react-redux";
import { PostApi, PostApi_1 } from "../../../Api/Requests/ApiRequests";
import { EndPoints, TostTop, TostBottom } from "../../../Utils/ConstantField";

var firebaseConfig = {
	apiKey: "AIzaSyB-wWw5opPq-ZkUvmnh2a2h7jV_D5UUNZs",
	authDomain: "tanko-14844.firebaseapp.com",
	projectId: "tanko-14844",
	databaseURL: "https://tanko-14844-default-rtdb.firebaseio.com",
	storageBucket: "tanko-14844.appspot.com",
	messagingSenderId: "394116243997",
	appId: "1:394116243997:web:18911913ae7c4080195cf4",
	measurementId: "G-HWBX7KK0VH",
};

try {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
} catch (e) {
	console.log(e);
}

export default function OTPVerification({ navigation, route }) {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	const dispatch = useDispatch();
	const Signup = useSelector((state) => state.SignUp);
	const Login = useSelector((state) => state.Login);
	const { name, phoneNumber, password, usertype, location, natinalId, buisnessLicence } = Signup;
	const { forgetPhoneNumber } = Login;

	//console.log("LOGIN::", Login, "SIGNUP::", Signup);

	let PHONE_NUMBER;

	const recaptchaVerifier = React.useRef(null);
	const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
	const [verificationId, setVerificationId] = React.useState("");
	const [otp, setOtp] = useState("");

	useEffect(() => {
		if (phoneNumber !== "") {
			PHONE_NUMBER = phoneNumber;
		} else {
			PHONE_NUMBER = forgetPhoneNumber;
		}

		if (PHONE_NUMBER !== "") {
			sendOTP();
		}
	}, [PHONE_NUMBER]);

	const sendOTP = async () => {
		try {
			const phoneProvider = new firebase.auth.PhoneAuthProvider();
			const verificationId = await phoneProvider.verifyPhoneNumber(
				PHONE_NUMBER,
				recaptchaVerifier.current
			);
			setVerificationId(verificationId);
		} catch (err) {
			TostTop(err.message);
			console.log(err.message);
		}
	};

	const veryfyOTP = async () => {
		try {
			const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
			await firebase.auth().signInWithCredential(credential);
			TostTop("Phone authentication successful");
			if (usertype === "GasStation") {
				UserSignup();
			} else if (usertype === "OilAgency") {
				navigation.navigate("SelectTankerType");
			} else {
				navigation.navigate("CreatenewPassword");
			}
		} catch (err) {
			TostTop(err.message);
			console.log("OTP VARIFICATION ERROR", err.message);
		}
	};

	const UserSignup = () => {
		const formdata = new FormData();
		formdata.append("name", name);
		formdata.append("mobile_number", phoneNumber);
		formdata.append("password", password);
		formdata.append("location", location.address);
		formdata.append("latitude", location.latitude);
		formdata.append("longitude", location.longitude);
		formdata.append("category", "user");
		formdata.append("lang", ConstantField.ARABIC ? "ar" : "en");
		formdata.append("license", {
			uri: buisnessLicence,
			type: "image/png",
			name: buisnessLicence,
		});

		console.log("DATA::", formdata);
		PostApi_1(EndPoints.signup, formdata)
			.then((data) => {
				console.log(data);
				if (data.succcess) {
					TostTop(data.message);
					dispatch({
						type: "SIGNUP_RESET",
					});
					navigation.navigate("Login");
				} else {
					TostTop(data.message);
				}
			})
			.catch((error) => {
				console.log("USERSIGNUP ERROR CALLED::", error);
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
				<FirebaseRecaptchaVerifierModal
					ref={recaptchaVerifier}
					firebaseConfig={firebaseConfig}
				/>
				<CustomStatusBar />
				<TouchableWithoutFeedback
					onPress={() => {
						Keyboard.dismiss();
					}}
				>
					<View style={{ flex: 1 }}>
						<SimpleGreenBackButton navigation={navigation} />
						<View style={{ flex: 1, justifyContent: "center" }}>
							<View>
								<View style={{ alignSelf: "center" }}>
									<Text
										style={{
											fontSize: Dimen.FontSize_VeryBig,
											fontFamily: "sanse_bold",
											color: Colors.IntroTextColor,
										}}
									>
										{i18n.t("enterVeryfication")}
									</Text>
									<Text
										style={{
											marginTop: 10,
											color: Colors.IntroTextColor,
											fontFamily: "product_sans_regular",
										}}
									>
										{i18n.t("enterVerificationCode")}
									</Text>
								</View>

								<OTPConatiner
									GetOTP={(otp) => {
										setOtp(otp);
									}}
								/>
							</View>
						</View>

						<MainGreenButton
							OnPress={() => {
								if (otp.length === 6) {
									veryfyOTP();
								} else {
									TostTop("Please enter correct otp");
								}
							}}
						>
							{i18n.t("submit")}
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
		flex: 3.5,
		paddingTop: 30,
	},
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
	NeedAndAccountStyleText: {
		marginLeft: 5,
		marginRight: 5,
		fontFamily: "product_sans_regular",
	},
});
