import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import i18n from "i18n-js";
import { Dimen, Colors } from "../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../Utils/ConstantField";

export default function CurrentOrderAndPreviousOrderFilter(props) {
	const [Driver, setDriver] = React.useState(false);
	const [gasStation, setGesStation] = React.useState(true);

	return (
		<View
			style={{
				flexDirection: ConstantField.IOS ? "row-reverse" : "row",
				justifyContent: "space-between",
				//marginStart: Dimen.Dim_80,
				marginTop: 10,
				marginBottom: 10,
			}}
		>
			<TouchableWithoutFeedback
				onPress={() => {
					setGesStation(true);
					setDriver(false);
					props.CurrentOrder();
				}}
			>
				<View>
					<Text
						style={{
							color: gasStation === true ? Colors.MainColor : Colors.Black,
							fontSize: Dimen.FontSize_big,
							fontFamily: "product_sans_regular",
						}}
					>
						{i18n.t("currentOrder")}
					</Text>
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback
				onPress={() => {
					setGesStation(false);
					setDriver(true);
					props.PreviousOrder();
				}}
			>
				<View>
					<Text
						style={{
							color: Driver === true ? Colors.MainColor : Colors.Black,
							fontSize: Dimen.FontSize_big,
							fontFamily: "product_sans_regular",
							marginStart: Dimen.Dim_10,
						}}
					>
						{i18n.t("PreviousOrder")}
					</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({});
