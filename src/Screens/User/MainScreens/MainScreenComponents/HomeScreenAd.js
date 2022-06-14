import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function HomeScreenAd() {
	return (
		<View
			style={{
				position: "absolute",
				height: 130,
				marginLeft: 30,
				marginRight: 30,
				backgroundColor: "white",
				top: 20,
				alignSelf: "center",
				borderRadius: 20,
				width: "75%",
				overflow: "hidden",
			}}
		>
			<Image
				style={{
					height: "100%",
					width: "100%",
					resizeMode: "stretch",
					backgroundColor: "green",
				}}
				source={require("../../../../assets/truckImage.png")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
