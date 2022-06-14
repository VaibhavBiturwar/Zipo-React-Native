import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../Utils/ConstantField";
import i18n from "i18n-js";

export default function AgentOrderListModel(props) {
	return (
		<View
			style={{
				borderRadius: 5,
				height: 75,
				backgroundColor: Colors.BackButtonAndHadingColor,
				flexDirection: ConstantField.IOS ? "row-reverse" : "row",
				margin: 5,
				overflow: "hidden",
			}}
		>
			<View style={styles.orangeblockstyle}></View>
			<View
				style={{
					flex: 1,
					flexDirection: ConstantField.IOS ? "row-reverse" : "row",
				}}
			>
				<Image
					name="station_image"
					style={{
						height: 40,
						width: 40,
						alignSelf: "center",
						borderRadius: 10,
						marginHorizontal: 10,
					}}
					source={require("../../../assets/profile.png")}
				/>
				<View
					style={{
						flex: 1,
						marginLeft: 10,
						justifyContent: "center",
					}}
				>
					<View
						style={{
							marginBottom: 5,
							justifyContent: "center",
						}}
					>
						<View
							style={{
								flexDirection: ConstantField.IOS ? "row-reverse" : "row",
							}}
						>
							<Text
								style={{
									color: Colors.MainColor,
									fontSize: Dimen.FontSize_Normal,
								}}
								numberOfLines={1}
							>
								Wadi station{" "}
								<Text style={{ fontSize: 12, marginHorizontal: 5, color: "white" }}>
									{i18n.t("wantToRefill")}
								</Text>
							</Text>
						</View>
						<View
							style={{
								alignItems: "flex-start",
								// alignItems: ConstantField.IOS
								// 	? "flex-start"
								// 	: ConstantField.AND
								// 	? "flex-start"
								// 	: "flex-end",
							}}
						>
							<Text
								numberOfLines={2}
								style={{
									color: "black",
									fontSize: 12,
									color: Colors.MainColor,
								}}
							>
								91 gasolin
							</Text>
							<Text name="time_" style={{ fontSize: 12, color: Colors.White }}>
								5 min ago
							</Text>
						</View>
					</View>
				</View>
				<TouchableOpacity
					style={{
						backgroundColor: Colors.MainColor,
						alignItems: "center",
						justifyContent: "center",
						padding: 10,
					}}
					onPress={() => {
						props.OnViewPress();
					}}
				>
					<Text style={{ fontSize: 12, color: "white", fontWeight: "bold" }}>
						{i18n.t("view")}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	orangeblockstyle: {
		width: "1%",
		height: "100%",
		alignSelf: "center",
		borderTopStartRadius: 10,
		backgroundColor: Colors.MainColor,
		borderBottomStartRadius: 10,
	},
});
