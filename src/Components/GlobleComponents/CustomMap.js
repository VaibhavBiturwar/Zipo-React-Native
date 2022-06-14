import React from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import { Dimen } from "../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../Utils/ConstantField";

export const ChatScreenMap = () => {
	return (
		<View style={{ alignItems: "center", justifyContent: "center" }}>
			<Text
				style={{
					fontFamily: "product_sans_regular",
					fontSize: Dimen.FontSize_Small,
					marginTop: 10,
				}}
			>
				Station Location
			</Text>
			<View style={{ height: 120, width: 250, borderRadius: 10, overflow: "hidden" }}>
				<MapView
					style={{ height: "100%", width: "100%" }}
					initialRegion={ConstantField.SauDiArabRegion}
				/>
			</View>
			<Text
				style={{
					fontFamily: "product_sans_regular",
					fontSize: Dimen.FontSize_Small,
					marginTop: 10,
				}}
			>
				24237, jafali Street ,Mecca
			</Text>
		</View>
	);
};
