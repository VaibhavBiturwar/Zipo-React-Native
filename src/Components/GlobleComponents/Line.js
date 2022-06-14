import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Dimen } from "../../Utility/DimenAndColor/DimenAndColor";

export const Line = () => {
	return (
		<View
			style={{
				borderBottomColor: Colors.BackButtonAndHadingColor,
				borderBottomWidth: 2,
				marginLeft: 30,
				marginRight: 30,
				marginTop: 20,
			}}
		/>
	);
};

const styles = StyleSheet.create({});
