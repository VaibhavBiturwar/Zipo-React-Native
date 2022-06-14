import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "native-base";

export const SetLoginData = async (value) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem("LoginData", jsonValue);
	} catch (e) {
		console.log(e);
	}
};

export const SetOrderNumberAndId = async (value) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem("OrderNumberAndId", jsonValue);
	} catch (e) {
		console.log(e);
	}
};

export const SetProfilePitcher = async (value) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem("ProfilePhoto", jsonValue);
	} catch (e) {
		console.log(e);
	}
};
