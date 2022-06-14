import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Dimen, Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../Utils/ConstantField";
import i18n from "i18n-js";

export default function MyAdsListModel(props) {
	return (
		<View
			style={{
				height: 150,
				marginVertical: 5,
				borderRadius: 20,
				marginHorizontal: 30,
				overflow: "hidden",
				elevation: 1,
				padding: 1.5,
			}}
		>
			<View style={{ flex: 1 }}>
				<Image
					style={{ height: "100%", width: "100%" }}
					source={require("../../../assets/currency.png")}
				/>
			</View>
			<View
				style={{
					height: 40,
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
				<View
					style={{
						height: 30,
						width: 100,
						backgroundColor: "red",
						borderRadius: 15,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text style={{ color: "white" }}>{i18n.t("delete")}</Text>
				</View>
				<View
					style={{
						height: 30,
						width: 100,
						backgroundColor: Colors.BackButtonAndHadingColor,
						borderRadius: 15,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{props.approved ? (
						<TouchableOpacity
							onPress={() => {
								props.OnPay();
							}}
						>
							<Text style={{ color: "white" }}>{i18n.t("pay")}</Text>
						</TouchableOpacity>
					) : (
						<Text style={{ color: "white" }}>{i18n.t("cancel")}</Text>
					)}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
