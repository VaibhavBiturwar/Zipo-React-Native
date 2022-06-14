import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../Utils/ConstantField";
import i18n from "i18n-js";

export default function NotificationListModel() {
	return (
		<View
			style={{
				borderRadius: 5,
				margin: 5,
			}}
		>
			<View
				style={{
					alignSelf: "stretch",
					borderRadius: 5,
					height: 75,
					backgroundColor: Colors.BackButtonAndHadingColor,
					flexDirection: ConstantField.IOS ? "row-reverse" : "row",
				}}
			>
				<View style={styles.orangeblockstyle} />
				<View
					style={{
						flex: 1,
						flexDirection: ConstantField.IOS ? "row-reverse" : "row",
					}}
				>
					<View
						style={{
							height: Dimen.ImageHightAndWidth,
							width: Dimen.ImageHightAndWidth,
							justifyContent: "center",
							marginLeft: 5,

							alignSelf: "center",
							marginStart: ConstantField.IOS ? null : 20,
							marginEnd: ConstantField.IOS ? 20 : null,
							borderRadius: 10,
							overflow: "hidden",
						}}
					>
						<Image
							style={{
								height: Dimen.ImageHightAndWidth,
								width: Dimen.ImageHightAndWidth,
								alignSelf: "center",
								borderRadius: 10,
								overflow: "hidden",
								resizeMode: "stretch",
							}}
							source={require("../../../assets/truckImage.png")}
						/>
					</View>
					<View
						style={{
							marginLeft: 10,
							justifyContent: "center",
						}}
					>
						<View
							style={{
								flexDirection: ConstantField.IOS ? "row-reverse" : "row",
								alignItems: "center",
							}}
						>
							<Text
								style={{
									color: Colors.MainColor,
									fontSize: 14,
									textAlign: ConstantField.IOS ? "right" : "left",
								}}
							>
								Station Name
							</Text>
							<Text
								style={{
									fontSize: 12,
									textAlignVertical: "center",
									textAlign: "center",
									marginStart: 5,
									top: 1,
									color: Colors.White,
								}}
							>
								{i18n.t("acceptedyourorder")}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	orangeblockstyle: {
		width: "1%",
		height: "98%",
		alignSelf: "center",
		borderTopStartRadius: 10,
		backgroundColor: Colors.MainColor,
		borderBottomStartRadius: 10,
	},
});
