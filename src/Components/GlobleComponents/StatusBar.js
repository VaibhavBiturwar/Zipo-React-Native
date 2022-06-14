import { View } from "native-base";
import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Platform } from "react-native";
import { Colors, Dimen } from "../../Utility/DimenAndColor/DimenAndColor";

export const CustomStatusBar = (props) => {
	return (
		<View>
			<SafeAreaView>
				<StatusBar barStyle="dark-content" backgroundColor={Colors.StatusBarColor} />
			</SafeAreaView>
		</View>
	);
};
const styles = StyleSheet.create({});
