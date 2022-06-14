import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../Utils/ConstantField";
import i18n from "i18n-js";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TankerTypeListModel(props) {
	return (
		<TouchableOpacity
			onPress={() => {
				props.OnPress();
			}}
		>
			<View
				style={{
					height: 180,
					width: 180,
					backgroundColor: Colors.White,
					elevation: 5,
					shadowColor: "black",
					shadowOffset: { width: 0, height: 2 },
					shadowRadius: 6,
					shadowOpacity: 0.2,
					borderRadius: 30,
					marginLeft: 10,
					marginRight: 10,
					margin: 5,
					justifyContent: "center",
				}}
			>
				<View
					style={{
						flexDirection: ConstantField.IOS ? "row-reverse" : "row",
						alignItems: "center",
					}}
				>
					<Image
						style={{
							height: 50,
							width: 50,
							resizeMode: "center",
							marginLeft: 10,
							marginRight: 10,
						}}
						source={require("../../../assets/tanker_type.png")}
					/>
					<Text
						style={{ fontFamily: "product_sans_bold", color: Colors.TankertypeColor }}
					>
						{props.item.petrol} {i18n.t("tons")}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({});
