import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Dimen, Colors } from "../../Utility/DimenAndColor/DimenAndColor";
import i18n from "i18n-js";

export default function PullDownToRefresh(props) {
	return (
		<View
			style={{
				marginBottom: "10%",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{!props.refreshing ? (
				<View style={{ alignItems: "center" }}>
					<Text
						style={{
							fontWeight: "200",
							fontSize: 12,
							fontFamily: "product_sans_regular",
							color: Colors.MainColor,
						}}
					>
						{i18n.t("pullDownToRefresh")}
					</Text>
					<Image
						style={{
							marginTop: 5,
							height: 13,
							width: 10,
							resizeMode: "stretch",
						}}
						source={require("../../assets/down_arrow.png")}
					></Image>
				</View>
			) : (
				<Text
					style={{
						fontWeight: "200",
						fontSize: 12,
						marginBottom: 20,
					}}
				>
					{i18n.t("refreshing")}...
				</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({});
