import React, { useState } from "react";
import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Alert,
	ScrollView,
	KeyboardAvoidingView,
	Keyboard,
} from "react-native";
import i18n from "i18n-js";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import { MainGreenButton } from "../../../Components/GlobleComponents/Buttons";
import CountryCodePicker from "../../../Components/GlobleComponents/CountryCodePicker";
import TermsAndCondition from "../../../Components/GlobleComponents/TermsAndCondition";
import { SimpleGreenBackButton, SimpleHeader } from "../../../Components/GlobleComponents/Headers";
import GasStationAndOilAgencyFilter from "../../../Components/GlobleComponents/GasStationAndOilAgencyFilter";
import { ConstantField } from "../../../Utils/ConstantField";
import { Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import {
	PasswordTextInput,
	MainTextinput,
	UnTouchableTextinputWithIcon,
} from "../../../Components/GlobleComponents/TextInputs";
import {
	phoneNumberFun,
	passwordFun,
	buisnessLicenceFun,
	nameFun,
	locationFun,
	natianIdFun,
	userTypeFun,
} from "../../../Redux/Actions/SignupAction";
import { useSelector, useDispatch } from "react-redux";
import { Foundation } from "@expo/vector-icons";
import { PickImage } from "../../../Utils/ConstantMethod";
import { Root } from "native-base";
import { AgentSignUpConadition } from "../../../Utils/Conditions";

export default function Signup({ navigation, route }) {
	const dispatch = useDispatch();
	const Signup = useSelector((state) => state.SignUp);
	//console.log("SGNUP::", Signup);
	const [user, setUser] = useState(true);
	const [t_A, setT_A] = useState(false);
	const { name, phoneNumber, password, usertype, location, natinalId, buisnessLicence } = Signup;

	const onNextClick = () => {
		let check;
		if (user) {
			check = AgentSignUpConadition(
				name,
				phoneNumber,
				password,
				location,
				buisnessLicence,
				t_A
			);
		} else {
			check = AgentSignUpConadition(name, phoneNumber, password, location, natinalId, t_A);
		}

		if (check) {
			navigation.navigate("OTPVerification");
		}
	};

	const onGetLocation = (data) => {
		//console.log("Get Location lat and long :: ", data);
		dispatch(locationFun(data));
	};

	const PickBuisnessLicence = () => {
		PickImage().then((data) => {
			dispatch(buisnessLicenceFun(data));
		});
	};
	const PickNatinalId = () => {
		PickImage().then((data) => {
			dispatch(natianIdFun(data));
		});
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
						<View style={{ flex: 1 }}>
							<SimpleGreenBackButton navigation={navigation} />
						</View>
						<View style={styles.MainInutContainer}>
							<View style={styles.InputContainer}>
								<SimpleHeader>SignUp</SimpleHeader>
								<GasStationAndOilAgencyFilter
									OnGasStationPress={() => {
										setUser(true);
										dispatch(userTypeFun("GasStation"));
									}}
									OnDriverOilAgencyPress={() => {
										setUser(false);
										dispatch(userTypeFun("OilAgency"));
									}}
								/>
								<ScrollView
									style={{ height: 320 }}
									keyboardShouldPersistTaps={"handled"}
									showsVerticalScrollIndicator={false}
								>
									<MainTextinput
										onChangeText={(value) => {
											dispatch(nameFun(value));
										}}
									>
										{i18n.t("name")}
									</MainTextinput>
									<CountryCodePicker
										OnChangeText={(values) => {
											dispatch(phoneNumberFun(values));
										}}
									/>
									<PasswordTextInput
										onChangeText={(values) => {
											dispatch(passwordFun(values));
										}}
									>
										{i18n.t("Password")}
									</PasswordTextInput>

									<UnTouchableTextinputWithIcon
										hint={i18n.t("location")}
										onChangeText={(value) => {}}
										OnPress={() => {
											navigation.navigate("GooglePlaceAutoCompleteScreen2", {
												onGetLocation: onGetLocation,
											});
										}}
										text={location.address}
									/>

									{user ? (
										<UnTouchableTextinputWithIcon
											hint={i18n.t("buisnessLicense")}
											onChangeText={(value) => {}}
											OnPress={() => {
												PickBuisnessLicence();
											}}
											text={buisnessLicence}
										>
											<Foundation name="upload" size={24} color="black" />
										</UnTouchableTextinputWithIcon>
									) : (
										<UnTouchableTextinputWithIcon
											hint={"NatinalId/lqama"}
											onChangeText={(value) => {}}
											OnPress={() => {
												PickNatinalId();
											}}
											text={natinalId}
										>
											<Foundation name="upload" size={24} color="black" />
										</UnTouchableTextinputWithIcon>
									)}

									<TermsAndCondition
										Selected={t_A} //pass boolean value here to select unselect T&C
										onPress={() => {
											setT_A(true);
										}}
									/>
									<View style={{ height: 150 }} />
								</ScrollView>
							</View>
							<View style={styles.SignupButtonContainer}>
								<Text style={styles.NeedAndAccountStyleText}>
									{i18n.t("alreadyhaveanaccoutnt")}
								</Text>
								<TouchableWithoutFeedback
									style={{ marginLeft: 10 }}
									onPress={() => {
										navigation.navigate("Login");
									}}
								>
									<Text style={styles.SignupTextStyle}>{i18n.t("SignIn")}</Text>
								</TouchableWithoutFeedback>
							</View>
						</View>

						<MainGreenButton
							OnPress={() => {
								onNextClick();
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
	SignupTextStyle: {
		color: Colors.MainColor,
		fontFamily: "product_sans_regular",
	},
});
