import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Dimen, Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import { BackButtonWithBelowHeading } from "../../../Components/GlobleComponents/Headers";
import { Ionicons } from "@expo/vector-icons";

export default function SellerAddPostSuccessfull({ navigation }) {
	const Tittle = 2;
	return (
		<View style={{ flex: 1, backgroundColor: Colors.White }}>
			<View style={{ flex: 1 }}>
				<StatusBar />
				<BackButtonWithBelowHeading navigation={navigation} />

				<View
					style={{
						height: 300,
						width: 250,
						backgroundColor: Colors.MainColor,
						justifyContent: "center",
						alignSelf: "center",
						marginTop: 80,
						borderRadius: 20,
					}}
				>
					<Ionicons
						style={{ marginTop: 35, alignSelf: "center" }}
						name={"checkmark-circle-outline"}
						size={100}
						color={Colors.White}
					/>

					{Tittle === 2 ? (
						<View>
							<Text
								style={{
									color: Colors.White,
									textAlign: "center",
									fontSize: Dimen.FontSize_VeryBig,
									fontWeight: "bold",
								}}
							>
								Ad Request Submitted {"\n"}Successfully
							</Text>
							<Text
								style={{
									color: Colors.White,
									textAlign: "center",
									fontSize: Dimen.FontSize_Small,
									marginTop: 20,
									fontWeight: "bold",
								}}
							>
								You Will Be Notified When Your{"\n"}Ad is Approved
							</Text>
						</View>
					) : (
						<View>
							<Text
								style={{
									color: Colors.White,
									textAlign: "center",
									fontSize: Dimen.FontSize_VeryBig,
									fontWeight: "bold",
								}}
							>
								Payment Successful
							</Text>
							<Text
								style={{
									color: Colors.White,
									textAlign: "center",
									fontSize: Dimen.FontSize_Small,
									fontWeight: "bold",
								}}
							>
								Your Ad is Posted Successfully
							</Text>
						</View>
					)}
				</View>
			</View>
		</View>
	);
}
