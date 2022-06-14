import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../Utils/ConstantField";
import { AntDesign } from "@expo/vector-icons";
import i18n from "i18n-js";

export const BalanceScreenListModel = (props) => {
	//return props.data.length - 1 !== props.index ? (
	return (
		<View
			style={{
				height: 60,
				marginBottom: 10,
				flexDirection: ConstantField.IOS ? "row-reverse" : "row",
				alignItems: "center",
			}}
		>
			<View
				style={{
					height: 50,
					width: 80,
					backgroundColor: Colors.PaymentCardColor,
					borderRadius: 10,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text
					style={{
						fontStyle: "italic",
						fontFamily: "sanse_bold",
						color: Colors.BackButtonAndHadingColor,
						fontWeight: "bold",
					}}
				>
					VISA
				</Text>
			</View>
			<Text
				style={{
					flex: 1,
					marginStart: ConstantField.IOS ? null : 10,
					marginEnd: ConstantField.IOS ? 10 : null,
				}}
			>
				******687
			</Text>
			<View style={{ flex: 1, alignItems: ConstantField.IOS ? "flex-start" : "flex-end" }}>
				<View
					style={{
						height: 30,
						width: 30,
						backgroundColor: "red",
						borderRadius: 15,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<AntDesign name="delete" size={15} color={Colors.MainColor} />
				</View>
			</View>
		</View>
	);
};

export const BalanceScreenFooterComponent = (props) => {
	return (
		<View
			style={{
				height: 60,
				marginBottom: 10,
				flexDirection: ConstantField.IOS ? "row-reverse" : "row",
				alignItems: "center",
			}}
		>
			<View
				style={{
					height: 50,
					width: 80,
					backgroundColor: Colors.PaymentCardColor,
					borderRadius: 10,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text
					style={{
						fontStyle: "italic",
						fontFamily: "sanse_bold",
						color: Colors.BackButtonAndHadingColor,
						fontWeight: "bold",
					}}
				>
					VISA
				</Text>
			</View>
			<Text
				style={{
					flex: 1,
					marginStart: ConstantField.IOS ? null : 10,
					marginEnd: ConstantField.IOS ? 10 : null,
				}}
			>
				{i18n.t("addnewCard")}
			</Text>
			<View style={{ flex: 1, alignItems: ConstantField.IOS ? "flex-start" : "flex-end" }}>
				<TouchableOpacity
					onPress={() => {
						props.AddnewCard();
					}}
				>
					<View
						style={{
							height: 30,
							width: 30,
							backgroundColor: "black",
							borderRadius: 15,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<AntDesign name="plus" size={24} color={Colors.White} />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});
