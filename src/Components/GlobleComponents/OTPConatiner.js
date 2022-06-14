import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Dimen, Colors } from "../../Utility/DimenAndColor/DimenAndColor";

export default function OTPConatiner(props) {
	const [verificationCode, setVerificationCode] = React.useState("");

	const [pin1, setPin1] = useState("");
	const [pin2, setPin2] = useState("");
	const [pin3, setPin3] = useState("");
	const [pin4, setPin4] = useState("");
	const [pin5, setPin5] = useState("");
	const [pin6, setPin6] = useState("");

	const a = React.useRef();
	const b = React.useRef();
	const c = React.useRef();
	const d = React.useRef();
	const e = React.useRef();
	const f = React.useRef();

	return (
		<View style={styles.OtpPinValues}>
			<TextInput
				placeholder="X"
				placeholderTextColor={Colors.BackButtonAndHadingColor}
				style={styles.otpImput}
				maxLength={1}
				keyboardType="numeric"
				ref={a}
				onChangeText={(value) => {
					if (value != "") {
						setPin1(value);
						b.current.focus();
					}
				}}
			></TextInput>

			<TextInput
				placeholder="X"
				placeholderTextColor={Colors.BackButtonAndHadingColor}
				style={styles.otpImput}
				maxLength={1}
				keyboardType="numeric"
				ref={b}
				onChangeText={(value) => {
					if (value != "") {
						setPin2(value);
						c.current.focus();
					}
				}}
			></TextInput>

			<TextInput
				placeholder="X"
				placeholderTextColor={Colors.BackButtonAndHadingColor}
				style={styles.otpImput}
				maxLength={1}
				keyboardType="numeric"
				ref={c}
				onChangeText={(value) => {
					if (value != "") {
						setPin3(value);
						//this.setState({ pin3: value });
						d.current.focus();
					}
				}}
			></TextInput>

			<TextInput
				placeholder="X"
				placeholderTextColor={Colors.BackButtonAndHadingColor}
				style={styles.otpImput}
				maxLength={1}
				keyboardType="numeric"
				ref={d}
				onChangeText={(value) => {
					if (value != "") {
						setPin4(value);

						e.current.focus();
					}
				}}
			></TextInput>

			<TextInput
				placeholder="X"
				placeholderTextColor={Colors.BackButtonAndHadingColor}
				style={styles.otpImput}
				maxLength={1}
				keyboardType="numeric"
				ref={e}
				onChangeText={(value) => {
					if (value != "") {
						setPin5(value);
						f.current.focus();
					}
				}}
			></TextInput>

			<TextInput
				placeholder="X"
				placeholderTextColor={Colors.BackButtonAndHadingColor}
				style={styles.otpImput}
				maxLength={1}
				keyboardType="numeric"
				ref={f}
				onChangeText={(pin6) => {
					if (pin6 != "") {
						props.GetOTP(pin1 + pin2 + pin3 + pin4 + pin5 + pin6);
					}
				}}
			></TextInput>
		</View>
	);
}

const styles = StyleSheet.create({
	otpImput: {
		width: 25,
		fontSize: 18,
		textAlign: "center",
		backgroundColor: Colors.OtpContainerColor,
		borderRadius: 5,
		color: Colors.BackButtonAndHadingColor,
	},
	OtpPinValues: {
		flexDirection: "row",
		marginTop: 65,
		alignSelf: "stretch",
		marginStart: 20,
		marginEnd: 20,
		justifyContent: "space-evenly",
	},
});
