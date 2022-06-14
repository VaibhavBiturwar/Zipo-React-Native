import React from "react";
import { View, Text, StatusBar, Image } from "react-native";
import { BackButtonWithBelowHeading } from "../../../Components/GlobleComponents/Headers";
import i18n from "i18n-js";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import { Line } from "../../../Components/GlobleComponents/Line";

export default function AboutUs({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: Colors.StatusBarColor }}>
			<StatusBar />
			<BackButtonWithBelowHeading navigation={navigation}>
				About Us
			</BackButtonWithBelowHeading>
			<View style={{ flex: 1 }}>
				<Line />
				<View style={{ marginTop: 30 }}>
					<Image
						source={require("../../../assets/tanko_lobo.png")}
						style={{
							height: Dimen.LoboHightAndWidth,
							width: Dimen.LoboHightAndWidth,
							resizeMode: "stretch",
							alignSelf: "center",
						}}
					/>
				</View>
				<View style={{ marginTop: 70, paddingLeft: 30, paddingRight: 30 }}>
					<Text
						style={{
							color: "grey",
							fontSize: Dimen.FontSize_Normal,
							fontFamily: "product_sans_regular",
							textAlign: "auto",
						}}
					>
						<Text style={{ color: "#4FE588", marginLeft: 3, marginRight: 3 }}>
							Tanko
						</Text>
						{i18n.t("tankoIntro2")}
					</Text>
				</View>
			</View>
		</View>
	);
}
