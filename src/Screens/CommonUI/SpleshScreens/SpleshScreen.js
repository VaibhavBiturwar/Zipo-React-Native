import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import i18n from "i18n-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import { useFonts } from "expo-font";
import ar from "langauage/ar.json";
import en from "langauage/en.json";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import { MainGreenButton } from "../../../Components/GlobleComponents/Buttons";
import Geocoder from "react-native-geocoding";
import { MyPermissions, PermissionLocationAndCamra } from "../../../Utils/ExpoPremissions";
import { ConstantField, TostTop } from "../../../Utils/ConstantField";
import { Root } from "native-base";

i18n.translations = {
	en: en,
	ar: ar,
};
i18n.locale = Localization.locale;
i18n.fallbacks = true;
Geocoder.init("AIzaSyAVmTUOgoqaeNbPVVLlSthMsHe0993jS1U");
export default function SpleshScreen({ navigation }) {
	const [showDescription, setShowDiscription] = useState(false);
	const [loaded] = useFonts({
		product_sans_bold: require("../../../Utility/Font/product_sans_bold.ttf"),
		product_sans_regular: require("../../../Utility/Font/product_sans_regular.ttf"),
		sanse_bold: require("../../../Utility/Font/sanse_bold.ttf"),
		helvetica_back: require("../../../Utility/Font/helvetica_back.ttf"),
	});

	useEffect(() => {
		setTimeout(async () => {
			setShowDiscription(true);
			// let parsed = JSON.parse(await AsyncStorage.getItem("LoginData"));
			// if (parsed != null) {
			// 	if (parsed.category === ConstantField.Role_1) {
			// 		navigation.replace("UserBottomNavigation");
			// 	} else {
			// 		navigation.replace("AgentBottomNavigation");
			// 	}
			// } else {
			// 	navigation.replace("SpleshScreen2");
			// }
		}, 1000);
		return () => {
			//console.log("COMPONENT DID UNMOUNT");
		};
	}, []);

	const checkPermission = () => {
		MyPermissions().then((granted) => {
			if (granted) {
				navigation.navigate("Login");
			} else {
				TostTop("Sorry We need your permission to go to next screen");
			}
		});
		// PermissionLocationAndCamra().then((granted) => {
		// 	if (granted) {
		// 	} else {
		// 		TostTop("Sorry We need your permission to go to next screen");
		// 	}
		// });
		navigation.navigate("Login");
	};

	if (!loaded) {
		return null;
	}

	return (
		<Root>
			<View style={styles.ContainerStyle}>
				<CustomStatusBar />
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
					<Image
						source={require("../../../assets/tanko_lobo.png")}
						style={styles.LoboImage}
						resizeMode="stretch"
					/>
					<Image
						source={require("../../../assets/tanko_lable.png")}
						style={styles.LoboName}
					/>
					{showDescription ? (
						<Text style={styles.DiscriptionStyle}>{i18n.t("tankoIntro")}</Text>
					) : null}
				</View>
				<MainGreenButton
					OnPress={() => {
						checkPermission();
					}}
				>
					{i18n.t("getStart")}
				</MainGreenButton>
			</View>
		</Root>
	);
}

const styles = StyleSheet.create({
	ContainerStyle: { flex: 1, backgroundColor: Colors.StatusBarColor },
	LoboImage: {
		height: Dimen.LoboHightAndWidth,
		width: Dimen.LoboHightAndWidth,
		resizeMode: "stretch",
	},
	LoboName: {
		height: Dimen.LoboHightAndWidth,
		width: Dimen.TankoLoboNameWidth,
		resizeMode: "contain",
		marginTop: 10,
	},
	DiscriptionStyle: {
		textAlign: "center",
		maxWidth: 210,
		color: Colors.IntroTextColor,
		fontSize: Dimen.FontSize_MediamBig,
		fontFamily: "product_sans_regular",
	},
});
