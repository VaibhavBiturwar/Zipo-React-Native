import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView } from "react-native";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import { Calendar } from "react-native-calendars";
import { MaterialIcons } from "@expo/vector-icons";
import i18n from "i18n-js";
import { BackButtonWithBelowHeading } from "../../../Components/GlobleComponents/Headers";
import { Line } from "../../../Components/GlobleComponents/Line";
import { CashWithdrawbutton } from "../../../Components/GlobleComponents/Buttons";

export default function CalenderComponent({ navigation, props }) {
	const [nextDay, setnextDay] = useState([]);
	const [selectedDate, setSelectedDate] = useState([]);
	const [markedDate, setmarkedDate] = useState();

	useFocusEffect(
		useCallback(() => {
			return () => {
				//console.log("Screen was unfocused");
			};
		}, [])
	);

	return (
		<View style={styles.MainContainer}>
			<BackButtonWithBelowHeading navigation={navigation}>
				{i18n.t("schedule")}
			</BackButtonWithBelowHeading>
			<Line />
			<ScrollView style={{ flex: 1 }}>
				<View style={{ marginTop: 10, paddingHorizontal: 50 }}>
					<Text style={styles.noteTextStyle}>
						NOTE: You will be charged SR 50 per day for posting an advertisement
					</Text>
				</View>
				<View style={{ paddingHorizontal: 40 }}>
					<Calendar
						current={new Date()}
						onDayPress={(day) => {}}
						markedDates={markedDate}
						horizontal={true}
						pagingEnabled={true}
						theme={{
							textSectionTitleColor: Colors.MainColor,
							textSectionTitleDisabledColor: Colors.MainColor,
							selectedDayBackgroundColor: Colors.MainColor,
							selectedDayTextColor: Colors.White,
							todayTextColor: Colors.MainColor,
							dayTextColor: "#2d4150",
							textDisabledColor: "#d9e1e8",
							dotColor: Colors.MainColor,
							selectedDotColor: Colors.MainColor,
							arrowColor: Colors.MainColor,
							disabledArrowColor: "#d9e1e8",
							monthTextColor: Colors.MainColor,
							indicatorColor: Colors.MainColor,
							textDayFontWeight: "300",
							textMonthFontWeight: "bold",
							textDayHeaderFontWeight: "300",
							textDayFontSize: 16,
							textMonthFontSize: 16,
							textDayHeaderFontSize: 16,
							textDayFontFamily: "product_sans_regular",
							textDayHeaderFontFamily: "product_sans_regular",
							textMonthFontFamily: "product_sans_regular",
						}}
					/>
				</View>

				<View style={styles.CalculationContainer}>
					<Text
						style={{
							color: Colors.MainColor,
							fontSize: Dimen.FontSize_big,
							fontWeight: "bold",
						}}
					>
						8 Days = SR 400
					</Text>
				</View>

				<View style={{ alignItems: "center", marginTop: 20 }}>
					<CashWithdrawbutton
						OnPress={() => {
							navigation.navigate("SellerAddPostSuccessfull");
						}}
					>
						{i18n.t("done")}
					</CashWithdrawbutton>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
		backgroundColor: Colors.White,
	},
	noteTextStyle: {
		textAlign: "center",
		fontFamily: "product_sans_regular",
		color: Colors.MainColor,
	},
	CalculationContainer: {
		borderWidth: 1,
		borderColor: Colors.MainColor,
		height: 50,
		borderRadius: 10,
		marginTop: 20,
		alignSelf: "center",
		padding: 10,
		justifyContent: "center",
		marginLeft: 20,
	},
});
