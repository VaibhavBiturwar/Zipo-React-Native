import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, BackHandler, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { geocodeLocationByCoords } from "../../../Utils/ConstantMethod";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function GooglePlaceAutoCompleteScreen2({ navigation, route }) {
	const autocomplete = useRef(null);
	const [region, setRegion] = useState({
		latitude: 23.8859,
		longitude: 45.0792,
		latitudeDelta: 0.5,
		longitudeDelta: 0.5,
	});

	useEffect(() => {
		const backhandle = BackHandler.addEventListener("hardwareBackPress", () => true);
		return () => {
			//BackHandler.removeEventListener("hardwareBackPress", () => false);
			backhandle.remove();
		};
	}, []);

	const ConvertToaddress = async (data) => {
		await geocodeLocationByCoords(data.latitude, data.longitude).then((data) => {
			try {
				autocomplete.current?.setAddressText(data);
			} catch (e) {
				console.log(e);
			}
		});
	};

	const GoBackFunction = async (data) => {
		await route.params.onGetLocation({
			latitude: data.latitude,
			longitude: data.longitude,
			address: autocomplete.current?.getAddressText(),
		});
		navigation.goBack();
	};

	return (
		<View style={{ flex: 1 }}>
			<MapView
				style={{ flex: 1 }}
				region={region}
				initialRegion={region}
				onPress={(e) => {
					setRegion({
						latitude: e.nativeEvent.coordinate.latitude,
						longitude: e.nativeEvent.coordinate.longitude,
						latitudeDelta: 0.005,
						longitudeDelta: 0.005,
					});
					let croods = {
						latitude: e.nativeEvent.coordinate.latitude,
						longitude: e.nativeEvent.coordinate.longitude,
						latitudeDelta: 0.005,
						longitudeDelta: 0.005,
					};
					ConvertToaddress(croods);
				}}
			>
				<Marker coordinate={region}></Marker>
			</MapView>
			<View
				style={{
					position: "absolute",
					top: 50,
					width: "100%",
					paddingHorizontal: 30,
				}}
			>
				<GooglePlacesAutocomplete
					ref={autocomplete}
					placeholder={"Search Place"}
					fetchDetails={true}
					query={{
						key: "AIzaSyCH5CRMzqLP6mTPGsqY869gEvMM3FUMrzw",
						language: "en",
					}}
					onPress={(data, details = null) => {
						setRegion({
							latitude: details.geometry.location.lat,
							longitude: details.geometry.location.lng,
							latitudeDelta: 0.005,
							longitudeDelta: 0.005,
						});
						//console.log("YEHH::", autocomplete.current?.getAddressText());
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

			<TouchableOpacity
				style={{
					backgroundColor: "blue",
					position: "absolute",
					bottom: 30,
					height: 50,
					width: "80%",
					alignSelf: "center",
					borderRadius: 20,
					alignItems: "center",
					justifyContent: "center",
				}}
				onPress={() => {
					GoBackFunction(region);
				}}
			>
				<View>
					<Text style={{ color: "white", fontWeight: "bold" }}>Done</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({});
