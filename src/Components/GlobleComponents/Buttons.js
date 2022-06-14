import React from "react";
import {
	Alert,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Dimensions,
} from "react-native";
import { Dimen, Colors } from "../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../Utils/ConstantField";

const { height, width } = Dimensions.get("window");

export const MainGreenButton = (props) => {
	return (
		<View
			style={{
				width: width,
				height: Dimen.MainButton_Hight,
				alignItems: ConstantField.IOS ? "flex-start" : "flex-end",
			}}
		>
			<TouchableOpacity
				style={{
					position: "absolute",
					height: Dimen.MainButton_Hight,
					width: Dimen.MainButton_Width,
				}}
				onPress={() => {
					props.OnPress();
				}}
			>
				<View
					style={{
						backgroundColor: Colors.MainColor,
						height: Dimen.MainButton_Hight,
						width: Dimen.MainButton_Width,
						borderTopStartRadius: ConstantField.IOS ? null : Dimen.MainButton_Radious,
						borderTopEndRadius: ConstantField.IOS ? Dimen.MainButton_Radious : null,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text style={{ color: Colors.White, fontWeight: "bold" }}>
						{props.children}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export const CashWithdrawbutton = (props) => {
	return (
		<TouchableOpacity
			style={{
				height: Dimen.MainButton_Hight,
				width: Dimen.MainButton_Width,
			}}
			onPress={() => {
				props.OnPress();
			}}
		>
			<View
				style={{
					backgroundColor: Colors.MainColor,
					height: 30,
					width: 150,
					borderRadius: 15,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text style={{ color: Colors.EdtiTextBarColor, fontWeight: "bold" }}>
					{props.children}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({});
