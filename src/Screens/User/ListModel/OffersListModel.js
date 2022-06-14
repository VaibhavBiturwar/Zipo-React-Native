import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../Utils/ConstantField";
import i18n from "i18n-js";

export default function OffersListModel(props) {
	return (
		<View style={styles.ParaentConatiner}>
			<View style={styles.MainContainer}>
				<View style={styles.NameImageAndTextConatiner}>
					<TouchableOpacity style={styles.ImageTouchableOpacity}>
						<View style={styles.ImageConatiner}>
							<Image
								style={styles.ImageStyle}
								source={require("../../../assets/truckImage.png")}
							/>
						</View>
					</TouchableOpacity>
					<View style={styles.NameCoantainer}>
						<Text
							name="station_name"
							numberOfLines={1}
							style={{
								color: Colors.White,
								fontSize: 14,
								fontFamily: "product_sans_bold",
							}}
						>
							Station Name
						</Text>
					</View>
					<View
						style={{
							paddingLeft: 5,
							paddingRight: 5,
							justifyContent: "space-around",
						}}
					>
						<View
							style={{
								flexDirection: ConstantField.IOS ? "row-reverse" : "row",
								alignItems: "center",
								marginBottom: 5,
							}}
						>
							<Text
								style={{
									fontSize: Dimen.FontSize_Small,
									color: Colors.White,
									textAlign: ConstantField.IOS ? "right" : "left",
									maxWidth: 95,
									fontFamily: "product_sans_bold",
								}}
								numberOfLines={1}
							>
								SR 1000/7.5 Ton
							</Text>
						</View>
						<View
							style={{
								flexDirection: ConstantField.IOS ? "row-reverse" : "row",
								alignItems: "center",
								marginBottom: 5,
							}}
						>
							<Text
								style={{
									fontSize: Dimen.FontSize_Small,
									color: Colors.White,
									textAlign: ConstantField.IOS ? "right" : "left",
									maxWidth: 95,
									fontFamily: "product_sans_bold",
								}}
								numberOfLines={1}
							>
								SR 1000 /7.5 Ton
							</Text>
						</View>
					</View>
				</View>
				<TouchableOpacity
					onPress={(item) => {
						props.OnPressAccept(item, "current");
					}}
					style={styles.OrengeButtonStyle1}
				>
					<Text
						style={{
							fontSize: Dimen.FontSize_Small,
							color: Colors.Black,
							fontFamily: "product_sans_regular",
						}}
					>
						{i18n.t("Accept")}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	ParaentConatiner: {
		height: 80,
		backgroundColor: Colors.OfferListBackGround,
		marginTop: 10,
		borderTopStartRadius: ConstantField.IOS ? 10 : 40,
		borderBottomStartRadius: ConstantField.IOS ? 10 : 40,
		borderTopEndRadius: ConstantField.IOS ? 40 : 10,
		borderBottomEndRadius: ConstantField.IOS ? 40 : 10,
		overflow: "hidden",
	},
	MainContainer: {
		height: 80,
		flexDirection: ConstantField.IOS ? "row-reverse" : "row",
	},
	NameImageAndTextConatiner: {
		flex: 1,
		flexDirection: ConstantField.IOS ? "row-reverse" : "row",
	},
	OrengeButtonStyle1: {
		backgroundColor: "green",
		alignItems: "center",
		justifyContent: "center",
		paddingRight: 5,
		paddingLeft: 5,
	},
	ImageTouchableOpacity: {
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	ImageConatiner: {
		height: Dimen.ImageHightAndWidth,
		width: Dimen.ImageHightAndWidth,
		borderRadius: 32.2,
		overflow: "hidden",
	},
	ImageStyle: {
		height: Dimen.ImageHightAndWidth,
		width: Dimen.ImageHightAndWidth,
		borderRadius: 32.2,
		overflow: "hidden",
		resizeMode: "cover",
	},
	NameCoantainer: {
		flex: 1,
		justifyContent: "center",
		paddingLeft: 3,
		paddingRight: 3,
	},
});
