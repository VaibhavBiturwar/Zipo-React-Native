import React from "react";
import { View, Text, StatusBar, Image, FlatList, TouchableOpacity } from "react-native";
import { SimpleGreenBackButton2 } from "../../../Components/GlobleComponents/Headers";
import i18n from "i18n-js";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import { Line } from "../../../Components/GlobleComponents/Line";
import { MainGreenButton, CashWithdrawbutton } from "../../../Components/GlobleComponents/Buttons";

const data = [{}, {}];

export default function AgentWallateScreen({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: Colors.StatusBarColor }}>
			<StatusBar />
			<SimpleGreenBackButton2 navigation={navigation} />
			<View style={{ flex: 1 }}>
				<View style={{ alignItems: "center", justifyContent: "center" }}>
					<Text
						style={{
							fontSize: Dimen.FontSize_Signup_Heading,
							color: Colors.BackButtonAndHadingColor,
						}}
					>
						SR. 1000
					</Text>
					<Text
						style={{
							fontSize: Dimen.FontSize_VeryBig,
							color: Colors.BackButtonAndHadingColor,
						}}
					>
						Blanace
					</Text>
				</View>
				<Line />
				<View style={{ flex: 1, paddingLeft: 30, paddingRight: 30, paddingTop: 10 }}>
					<View style={{ alignItems: "center", marginTop: 100 }}>
						<CashWithdrawbutton
							OnPress={() => {
								navigation.navigate("CashWithdraw");
							}}
						>
							{i18n.t("cashWithdraw")}
						</CashWithdrawbutton>
					</View>
				</View>
				<MainGreenButton
					OnPress={() => {
						//navigation.navigate("CashWithdraw");
					}}
				>
					{i18n.t("done")}
				</MainGreenButton>
			</View>
		</View>
	);
}
