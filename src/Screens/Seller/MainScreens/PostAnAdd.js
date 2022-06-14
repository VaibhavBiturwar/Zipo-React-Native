import React from "react";
import { View, Text, StatusBar, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { BackButtonWithBelowHeading } from "../../../Components/GlobleComponents/Headers";
import i18n from "i18n-js";
import {
	IconAndTextinputs2,
	TextInputWithAddPitcher,
} from "../../../Components/GlobleComponents/TextInputs";
import { Dimen, Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import { CashWithdrawbutton } from "../../../Components/GlobleComponents/Buttons";
import { Line } from "../../../Components/GlobleComponents/Line";
import { ConstantField } from "../../../Utils/ConstantField";
import { CustomTextsWithIcon } from "../../../Components/GlobleComponents/CustomTexts";

export default function PostAnAdd({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: Colors.White }}>
			<StatusBar />
			<BackButtonWithBelowHeading navigation={navigation}>
				{i18n.t("postAnAdd")}
			</BackButtonWithBelowHeading>
			<Line />
			<View style={{ flex: 1, marginTop: 20, paddingHorizontal: 35 }}>
				<IconAndTextinputs2 heading={""} hint={i18n.t("MobileNumber")}>
					<Ionicons name="ios-phone-portrait-sharp" size={22} color={Colors.MainColor} />
				</IconAndTextinputs2>
				<View style={{ height: 20 }} />

				<IconAndTextinputs2 heading={""} hint={i18n.t("adName")}>
					<AddIcon />
				</IconAndTextinputs2>
				<View style={{ height: 20 }} />

				<IconAndTextinputs2 heading={""} hint={i18n.t("adDetails")}>
					<AddIcon />
				</IconAndTextinputs2>
				<View style={{ height: 20 }} />

				<TextInputWithAddPitcher hint={i18n.t("adPictures")} />
				<View style={{ height: 20 }} />

				<TouchableWithoutFeedback
					onPress={() => {
						navigation.navigate("ScheduleCalander");
					}}
				>
					<View
						style={{
							flexDirection: ConstantField.IOS ? "row-reverse" : "row",
							marginTop: 20,
							alignItems: "center",
							marginBottom: 30,
						}}
					>
						<Ionicons
							style={{}}
							name="calendar-sharp"
							size={22}
							color={Colors.MainColor}
						/>
						<Text style={{ color: Colors.MainColor, marginHorizontal: 10 }}>
							Select Dates
						</Text>
					</View>
				</TouchableWithoutFeedback>

				<View style={{ alignItems: "center" }}>
					<CashWithdrawbutton OnPress={() => {}}>
						{i18n.t("sendRequest")}
					</CashWithdrawbutton>
				</View>
			</View>
		</View>
	);
}

const AddIcon = () => {
	return (
		<View
			style={{
				height: 17,
				width: 23,
				backgroundColor: Colors.MainColor,
				borderRadius: 5,
				alignItems: "center",
			}}
		>
			<Text style={{ fontWeight: "bold", color: Colors.White, fontSize: 12 }}>Ad</Text>
		</View>
	);
};
