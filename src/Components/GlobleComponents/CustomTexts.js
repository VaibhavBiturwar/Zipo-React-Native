import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Dimen } from "../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../Utils/ConstantField";

export const CustomTextsWithIcon = (props) => {
	return (
		<View
			style={{
				flexDirection: ConstantField.IOS ? "row-reverse" : "row",
				marginTop: 30,
			}}
		>
			{props.children}
			<TouchableOpacity
				style={{
					marginStart: ConstantField.IOS ? null : 15,
					marginEnd: ConstantField.IOS ? 15 : null,
					justifyContent: "center",
				}}
				onPress={() => {
					props.OnPress();
				}}
			>
				<Text style={{ fontSize: Dimen.FontSize_big, fontFamily: "product_sans_regular" }}>
					{props.text}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({});
