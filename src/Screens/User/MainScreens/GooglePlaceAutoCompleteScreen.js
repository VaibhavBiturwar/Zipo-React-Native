import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GooglePlaceAutoComplete from "../../../Components/GlobleComponents/GooglePlaceAutoComplete";
import { geocodeLocationByCoords } from "../../../Utils/ConstantMethod";

export default function GooglePlaceAutoCompleteScreen({ navigation, route }) {
	const GoBackFunction = (data) => {
		//console.log("DATA in AUTOCOMPLETE::");

		geocodeLocationByCoords(data.latitude, data.longitude).then((data) => {
			console.log("CITYNAME::", data);
		});

		route.params.onGetLocation({
			latitude: data.latitude,
			longitude: data.longitude,
			address: "Saudi arebia",
		});
		navigation.goBack();
	};

	return (
		<View style={{ flex: 1, paddingTop: 40, paddingLeft: 10, paddingRight: 10 }}>
			<GooglePlaceAutoComplete
				onPress={(data) => {
					GoBackFunction(data);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
