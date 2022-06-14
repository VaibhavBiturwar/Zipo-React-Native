import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import { Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../Utils/ConstantField";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import { MainGreenButton } from "../../../Components/GlobleComponents/Buttons";
import HomeScreenAd from "./MainScreenComponents/HomeScreenAd";
import MapView from "react-native-maps";
import HomeScreenFirstBottomComponents from "./MainScreenComponents/HomeScreenFirstBottomComponents";
import HomeScreentimeList from "./MainScreenComponents/HomeScreentimeList";
import DrawerButton from "../DrawerNavigation/DrawerButton";
import i18n from "i18n-js";

export default function UserHomeScreen({ navigation }) {
	const [showTimeList, setShowTimeList] = useState(false);

	const onGetLocation = (data) => {
		//console.log("Get Location lat and long :: ", data);
	};

	return (
		<View style={{ flex: 1, backgroundColor: Colors.GoogleMapColor }}>
			<CustomStatusBar />
			<View style={{ flex: 2 }}>
				<MapView region={ConstantField.SauDiArabRegion} style={{ flex: 1 }}></MapView>
				<HomeScreenAd />
				<DrawerButton navigation={navigation} />
			</View>
			<KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
				<View style={styles.BottomWhiteBackgroundMainContainer}>
					{!showTimeList ? (
						<HomeScreenFirstBottomComponents
							navigation={navigation}
							CurrentLocationClick={() => {
								navigation.navigate("GooglePlaceAutoCompleteScreen", {
									onGetLocation: onGetLocation,
								});
							}}
							RequireClick={() => {
								setShowTimeList(true);
							}}
						/>
					) : (
						<HomeScreentimeList
							OnPress={(data) => {
								console.log(data);
								setShowTimeList(false);
							}}
						/>
					)}

					{!showTimeList ? (
						<MainGreenButton
							OnPress={() => {
								navigation.navigate("TenkerType");
							}}
						>
							{i18n.t("place")}
						</MainGreenButton>
					) : null}
				</View>
			</KeyboardAvoidingView>
			{/* <DrawerButton navigation={navigation} /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	BottomWhiteBackgroundMainContainer: {
		flex: 1,
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		backgroundColor: "white",
		//height: 300,
		//width: "100%",
	},
});
