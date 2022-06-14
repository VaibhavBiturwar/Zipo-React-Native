import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../Utils/ConstantField";
import i18n from "i18n-js";

export default function ChatListModel(props) {
	return (
		<TouchableOpacity>
			<View style={styles.MainContainer}>
				<View style={styles.orangeblockstyle} />
				<View style={styles.AllItemConatainer}>
					<View style={styles.ParofileImageContainer}>
						<Image
							style={styles.ImageStyle}
							source={require("../../../assets/truckImage.png")}
						/>
					</View>
					<View style={styles.NameAndBatchContainer}>
						<View>
							<Text style={styles.ProfileNmaeTextStyle}>Station Name</Text>
							{/* <Text
							style={{
								fontSize: Dimen.FontSize_Small,
								textAlign: ConstantField.IOS ? "right" : "left",
								color: Colors.White,
							}}
						>
							When you
						</Text> */}
						</View>

						<View style={styles.BatchContainer}>
							<Text style={{ color: "green" }}>1</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	orangeblockstyle: {
		width: 5,
		height: "100%",
		alignSelf: "center",
		borderTopStartRadius: 10,
		backgroundColor: Colors.MainColor,
		borderBottomStartRadius: 10,
	},
	MainContainer: {
		alignSelf: "stretch",
		borderRadius: 10,
		height: 75,
		backgroundColor: Colors.BackButtonAndHadingColor,
		flexDirection: ConstantField.IOS ? "row-reverse" : "row",
		marginBottom: 10,
		overflow: "hidden",
	},
	AllItemConatainer: {
		flex: 1,
		flexDirection: ConstantField.IOS ? "row-reverse" : "row",
	},
	ParofileImageContainer: {
		height: Dimen.ImageChatListHightAndWidth,
		width: Dimen.ImageChatListHightAndWidth,
		justifyContent: "center",
		marginLeft: 5,
		alignSelf: "center",
		marginStart: ConstantField.IOS ? null : 20,
		marginEnd: ConstantField.IOS ? 20 : null,
		borderRadius: 10,
		overflow: "hidden",
	},
	ImageStyle: {
		height: Dimen.ImageChatListHightAndWidth,
		width: Dimen.ImageChatListHightAndWidth,
		alignSelf: "center",
		borderRadius: 10,
		overflow: "hidden",
		resizeMode: "stretch",
	},
	NameAndBatchContainer: {
		marginLeft: 10,
		justifyContent: "space-between",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	ProfileNmaeTextStyle: {
		color: Colors.MainColor,
		fontSize: Dimen.FontSize_Normal,
		textAlign: ConstantField.IOS ? "right" : "left",
	},
	BatchContainer: {
		height: 18,
		width: 18,
		borderRadius: 9,
		backgroundColor: "white",
		marginLeft: 10,
		marginRight: 10,
		alignItems: "center",
		justifyContent: "center",
	},
});
