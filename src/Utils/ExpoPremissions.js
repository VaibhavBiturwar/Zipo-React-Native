import React from "react";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import * as Permissions from "expo-permissions";

export const MyPermissions = () => {
	return new Promise(async (resolve, reject) => {
		const status = await Location.requestForegroundPermissionsAsync();
		const status2 = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (!status.granted) {
			Alert.alert("We need your location Permission");
		} else if (!status2.granted) {
			Alert.alert("Sorry, we need camera roll permissions to make this work!");
		} else {
			resolve(true);
		}
	});
};

export const PermissionLocationAndCamra = () => {
	return new Promise(async (resolve, reject) => {
		const status = await Permissions.askAsync(Permissions.LOCATION_BACKGROUND);
		const status2 = await Permissions.askAsync(Permissions.CAMERA);
		if (!status.granted) {
			Alert.alert("We need your location Permission");
		} else if (!status2.granted) {
			Alert.alert("Sorry, we need camera roll permissions to make this work!");
		} else {
			resolve(true);
		}
	});
};
