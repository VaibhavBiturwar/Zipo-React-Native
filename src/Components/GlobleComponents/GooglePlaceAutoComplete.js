import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import i18n from "i18n-js";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Geocoder from "react-native-geocoding";

Geocoder.init("AIzaSyCH5CRMzqLP6mTPGsqY869gEvMM3FUMrzw");
export default function GooglePlaceAutoComplete(props) {
	return (
		<View style={{ flexDirection: "row" }}>
			<GooglePlacesAutocomplete
				ref={props.ref}
				//placeholder={i18n.t("writeLocation")}
				placeholder={"Search Place"}
				fetchDetails={true}
				onPress={(data, details = null) => {}}
				query={{
					key: "AIzaSyCH5CRMzqLP6mTPGsqY869gEvMM3FUMrzw",
					language: "en",
				}}
				onPress={(data, details = null) => {
					let LatLong = {
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.005,
						longitudeDelta: 0.005,
					};

					try {
						props.onPress(LatLong);
					} catch (e) {
						console.log("ERROR AUTO COMPLETE:: ", e);
					}

					//console.log("LAT LONG:: ", LatLong);
				}}
				styles={{
					textInput: {
						color: "#5d5d5d",
						fontSize: 16,
						alignSelf: "center",
						borderRadius: 5,
						textAlign: "center",
					},
				}}
				enablePoweredByContainer={false}
				keyboardShouldPersistTaps="handled"
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
