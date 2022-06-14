import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../Utils/ConstantField";
import { AntDesign } from "@expo/vector-icons";
import * as Localization from "expo-localization";

export default function DrawerButton2({ navigation }) {
	return (
		<View
			style={{
				position: "absolute",
				alignSelf: ConstantField.IOS ? "flex-end" : "flex-start",
				height: "100%",
				width: 30,
				justifyContent: "center",
			}}
		>
			<TouchableOpacity
				onPress={() => {
					navigation.openDrawer();
				}}
			>
				<View
					style={{
						height: 300,
						width: 35,
						backgroundColor: "grey",
						borderTopEndRadius: ConstantField.IOS ? null : 75,
						borderBottomEndRadius: ConstantField.IOS ? null : 75,
						borderTopStartRadius: ConstantField.IOS ? 75 : null,
						borderBottomStartRadius: ConstantField.IOS ? 75 : null,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<View
						style={{
							borderColor: Colors.White,
							height: 23,
							width: 23,
							borderRadius: 12.5,
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: Colors.White,
						}}
					>
						{Localization.isRTL ? (
							<AntDesign
								name="left"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						) : (
							<AntDesign
								name="right"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						)}
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({});
