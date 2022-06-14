import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

export default function IosHeaderMargin() {
	const APPBAR_HEIGHT = Platform.OS === "ios" ? 25 : null;
	return <View>{Platform.OS === "ios" ? <View style={{ height: APPBAR_HEIGHT }} /> : null}</View>;
}

const styles = StyleSheet.create({});
