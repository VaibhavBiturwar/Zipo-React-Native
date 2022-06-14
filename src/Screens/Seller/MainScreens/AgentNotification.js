import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { SimpleGreenBackButton2, SimpleHeader } from "../../../Components/GlobleComponents/Headers";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import i18n from "i18n-js";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import NotificationListModel from "../ListModel/NotificationListModel";
import { ConstantField } from "../../../Utils/ConstantField";
import PullDownToRefresh from "../../../Components/GlobleComponents/PullDownToRefresh";
import { Ionicons } from "@expo/vector-icons";

const data = [{ petrol: "3.5" }, { petrol: "7.5" }];

export default function AgentNotification({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<CustomStatusBar />
			<SimpleGreenBackButton2 navigation={navigation}>
				{i18n.t("notification")}
			</SimpleGreenBackButton2>
			<View style={{ flex: 1, paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
				<FlatList
					data={data}
					keyExtractor={(item, index) => index.toString()}
					showsVerticalScrollIndicator={false}
					renderItem={() => {
						return <NotificationListModel />;
					}}
				/>
				<TouchableOpacity>
					<View
						style={{
							marginBottom: "10%",
							backgroundColor: Colors.BackButtonAndHadingColor,
							height: 70,
							width: 70,
							alignSelf: "center",
							borderRadius: 35,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Ionicons name="trash-outline" size={25} color={"white"} />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({});
