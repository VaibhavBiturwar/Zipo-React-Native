import React from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import Geocoder from "react-native-geocoding";
import * as Location from "expo-location";

import Moment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(Moment);
let currentDate = moment().format("YYYY-MM-DD");

export const PickImage = () => {
	return new Promise(async (resolve, reject) => {
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (status !== "granted") {
			Alert.alert("Sorry, we need camera roll permissions to make this work!");
			reject("Need Gallery and Camra permission");
		}
		let result;

		result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			quality: 1,
			allowsEditing: true,
			aspect: [4, 3],
		}).catch((e) => {});

		if (!result.cancelled) {
			resolve(result.uri);
		} else {
			reject("Canceld By user");
		}
	});
};

export const GetDateList = () => {
	return new Promise(async (resolve, reject) => {
		let localDates = [];
		for (let index = 0; index <= 14; index++) {
			var nextdate = moment().add(index, "day").toDate();
			let justdate = moment().add(index, "days").format("YYYY-MM-DD");

			let dateString = nextdate.toString();
			dateString = dateString.split(" ").slice(0, 4).join(" ");
			let item = {
				id: index + 1,
				date: nextdate.getDate(),
				dateString: dateString,
				selected: false,
				month: dateString.slice(4, 7),
				intDate: justdate,
				currentDate: currentDate,
			};
			localDates.push(item);
		}
		resolve(localDates);
	});
};

export const registerForPushNotificationsAsync = () => {
	return new Promise(async (resolve, reject) => {
		if (Constants.isDevice) {
			const { status: existingStatus } = await Notifications.getPermissionsAsync();
			let finalStatus = existingStatus;
			if (existingStatus !== "granted") {
				const { status } = await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}
			if (finalStatus !== "granted") {
				alert("Failed to get push token for push notification!");
				return;
			}
			token = (await Notifications.getExpoPushTokenAsync()).data;
			resolve(token);
		} else {
			reject("Must use physical device for Push Notifications");
		}
	});
};

export const NotificationToken = () => {
	let devicetoken;
	let Expotoken;
	return new Promise(async (resolve, reject) => {
		let { existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
		if (existingStatus !== "granted") {
			const status = await Permissions.askAsync(Permissions.NOTIFICATIONS);
			existingStatus = status;
			Notifications.getDevicePushTokenAsync()
				.then((token) => {})
				.catch((err) => {
					reject(err);
				});

			Notifications.getExpoPushTokenAsync()
				.then((token) => {
					resolve(token.data);
				})
				.catch((err) => {
					reject(err);
				});
		}
	});
};

export const getLocation = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(data) => resolve(data.coords),
			(err) => reject(err),
			{
				enableHighAccuracy: true,
				interval: 2000,
				fastestInterval: 1000,
				distanceFilter: 2,
			}
		);
	});
};

export const geocodeLocationByCoords = async (lat, long) => {
	const place = Location.reverseGeocodeAsync({
		latitude: parseFloat(lat),
		longitude: parseFloat(long),
	});
	let address;
	return new Promise(async (resolve, reject) => {
		(await place).find((p) => {
			address = p.name + " " + p.district + " " + p.city + " " + p.country;
			resolve(address);
			reject("City not found");
		});
	});
};

export const geocodeLocationByName = (locationName) => {
	return new Promise((resolve, reject) => {
		Geocoder.from(locationName)
			.then((json) => {
				const addressComponent = json.results[0].address_components[0];
				resolve(addressComponent);
			})
			.catch((error) => reject(error));
	});
};

export const getLocation2 = () => {
	return new Promise(async (resolve, reject) => {
		let { status } = await Location.requestPermissionsAsync();
		if (status !== "granted") {
			return;
		}
		let location = await Location.getCurrentPositionAsync({});
		resolve(location.coords);
		let croods = {
			latitude: 0.0,
			longitude: 0.0,
		};
		reject(croods);
	});
};
