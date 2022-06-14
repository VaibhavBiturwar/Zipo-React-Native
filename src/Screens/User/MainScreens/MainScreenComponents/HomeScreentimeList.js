import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Dimen } from "../../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../../Utils/ConstantField";
import i18n from "i18n-js";

const time = [
	{ hrs: "2 Hours" },
	{ hrs: "4 Hours" },
	{ hrs: "6 Hours" },
	{ hrs: "8 Hours" },
	{ hrs: "10 Hours" },
	{ hrs: "12 Hours" },
	{ hrs: "14 Hours" },
	{ hrs: "16 Hours" },
	{ hrs: "18 Hours" },
	{ hrs: "20 Hours" },
	{ hrs: "22 Hours" },
	{ hrs: "24 Hours" },
	{ hrs: "2 Day" },
	{ hrs: "3 Day" },
	{ hrs: "4 Day" },
	{ hrs: "5 Day" },
	{ hrs: "6 Day" },
	{ hrs: "1 Week" },
];

export default function HomeScreentimeList(props) {
	return (
		<View style={{ flex: 1, paddingTop: 10, paddingLeft: 30, paddingRight: 30 }}>
			<View style={styles.DiliverConatiner2}>
				<View style={styles.GreenDot} />
				<Text style={{ fontFamily: "product_sans_regular" }}>{i18n.t("require")}</Text>
			</View>
			<FlatList
				style={{ marginTop: 10 }}
				data={time}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => {
					return (
						<View style={{ alignItems: "center", marginTop: 10 }}>
							<TouchableOpacity
								onPress={() => {
									try {
										props.OnPress(item.hrs);
									} catch (e) {}
								}}
							>
								<Text
									style={{
										color: Colors.IntroTextColor,
										fontFamily: "product_sans_regular",
										fontSize: Dimen.FontSize_MediamBig,
										marginBottom: 10,
									}}
								>
									{item.hrs}
								</Text>
							</TouchableOpacity>
						</View>
					);
				}}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	DiliverConatiner2: {
		flexDirection: ConstantField.IOS ? "row-reverse" : "row",
		alignItems: "center",
		//justifyContent: "space-around",
	},
	GreenDot: {
		height: 10,
		width: 10,
		borderRadius: 5,
		backgroundColor: Colors.MainColor,
		marginLeft: 3,
		marginRight: 3,
	},
});
