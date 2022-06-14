import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from "react-native";
import { MainGreenButton } from "../../../../Components/GlobleComponents/Buttons";
import GooglePlaceAutoComplete from "../../../../Components/GlobleComponents/GooglePlaceAutoComplete";
import { Colors } from "../../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../../Utils/ConstantField";
import i18n from "i18n-js";

let array = [
	{ id: 1, name: 91 },
	{ id: 2, name: 95 },
	{ id: 3, name: "Diesel" },
];
function ListModel(props) {
	const clickItem = () => {
		props.setId(props.item.id);
	};
	let selectedColor = props.getId === props.item.id ? Colors.MainColor : null;
	return (
		<TouchableOpacity
			onPress={() => {
				clickItem();
			}}
		>
			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
					height: 50,
					width: 83.6,
					borderRadius: 25,
					backgroundColor: selectedColor,
				}}
			>
				<Text style={{ color: Colors.White, fontWeight: "bold" }}>{props.item.name}</Text>
			</View>
		</TouchableOpacity>
	);
}

export default function HomeScreenFirstBottomComponents(props) {
	const { navigation } = props;
	const [clicked, setClicked] = useState(null);
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.TextinputContainerStyle}>
				<View style={styles.TextInputMainContainers}>
					<View>
						<View style={styles.DiliverMainContainer}>
							<View style={styles.DiliverConatiner2}>
								<View style={styles.GreenDot} />
								<Text style={{ fontFamily: "product_sans_regular" }}>
									{i18n.t("deliver")}
								</Text>
							</View>
						</View>
						<View style={styles.RequireMainCOntainer}>
							<View style={styles.RequireConatiner2}>
								<View style={styles.GreenDot} />
								<Text style={{ fontFamily: "product_sans_regular" }}>
									{i18n.t("require")}
								</Text>
							</View>
						</View>
					</View>
					<View style={{ flex: 1 }}>
						<TouchableOpacity
							onPress={() => {
								props.CurrentLocationClick();
							}}
						>
							<View
								style={{
									height: 40,
									borderBottomWidth: 1,
									alignItems: "center",
									justifyContent: "center",
									borderColor: Colors.BorderColor,
								}}
							>
								<Text style={{ fontFamily: "product_sans_regular" }}>
									{i18n.t("currentLocation")}
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								props.RequireClick();
							}}
						>
							<View
								style={{
									height: 40,
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Text style={{ fontFamily: "product_sans_regular" }}>
									{i18n.t("selectRequiredTimeorDays")}
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.SelectPetroleContainer}>
				<FlatList
					style={styles.FlayListStyle}
					data={array}
					horizontal={true}
					keyExtractor={(item, index) => index.toString()}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => {
						return (
							<ListModel
								item={item}
								setId={(id) => {
									setClicked(id);
								}}
								getId={clicked}
							/>
						);
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	TextinputContainerStyle: {
		flex: 1,
		justifyContent: "center",
		paddingLeft: 30,
		paddingRight: 30,
	},
	FlayListStyle: {
		backgroundColor: Colors.EdtiTextBarColor,
		borderRadius: 25,
		overflow: "hidden",
		width: 250,
	},
	SelectPetroleContainer: {
		height: 50,
		width: "100%",
		position: "absolute",
		top: -20,
		alignItems: "center",
	},
	TextInputMainContainers: {
		borderWidth: 1,
		width: "100%",
		marginTop: 25,
		borderRadius: 10,
		flexDirection: ConstantField.IOS ? "row-reverse" : "row",
		height: 80,
		borderColor: Colors.BorderColor,
	},
	DiliverMainContainer: {
		width: 80,
		height: 40,
		borderTopLeftRadius: 9,
		borderBottomWidth: 1,
		borderRightWidth: ConstantField.IOS ? null : 1,
		borderLeftWidth: ConstantField.IOS ? 1 : null,
		alignItems: "center",
		justifyContent: "center",
		borderColor: Colors.BorderColor,
	},
	DiliverConatiner2: {
		flexDirection: ConstantField.IOS ? "row-reverse" : "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	GreenDot: {
		height: 10,
		width: 10,
		borderRadius: 5,
		backgroundColor: Colors.MainColor,
		marginLeft: 3,
		marginRight: 3,
	},
	RequireMainCOntainer: {
		width: 80,
		height: 40,
		borderTopLeftRadius: 9,
		borderRightWidth: ConstantField.IOS ? null : 1,
		borderLeftWidth: ConstantField.IOS ? 1 : null,
		alignItems: "center",
		justifyContent: "center",
		borderColor: Colors.BorderColor,
	},
	RequireConatiner2: {
		flexDirection: ConstantField.IOS ? "row-reverse" : "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
});

// function ListModel(props) {
// 	//const [selected, setSelectd] = useState(false);
// 	const clickItem = () => {
// 		props.setId(props.item.id);
// 	};
// 	//let forFirtsColor = props.item.id === 1 ? (selected ? null : Colors.MainColor) : null;
// 	let selectedColor = props.getId === props.item.id ? Colors.MainColor : null;
// 	return (
// 		<TouchableOpacity
// 			onPress={() => {
// 				//setSelectd(true);
// 				clickItem();
// 			}}
// 		>
// 			<View
// 				style={{
// 					alignItems: "center",
// 					justifyContent: "center",
// 					height: 50,
// 					width: 83.6,
// 					borderRadius: 25,
// 					//backgroundColor: selected === true ? selectedColor : forFirtsColor,
// 					backgroundColor: selectedColor,
// 				}}
// 			>
// 				<Text style={{ color: Colors.White, fontWeight: "bold" }}>{props.item.name}</Text>
// 			</View>
// 		</TouchableOpacity>
// 	);
// }
