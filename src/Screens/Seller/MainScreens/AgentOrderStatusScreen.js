import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList } from "react-native";
import { BackButtonAndProfilePicture } from "../../../Components/GlobleComponents/Headers";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import i18n from "i18n-js";
import { ConstantField } from "../../../Utils/ConstantField";
import { Dimen, Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import CurrentOrderAndPreviousOrderFilter from "../../../Components/GlobleComponents/CurrentOrderAndPreviousOrderFilter";
import OrderStatusCurrentlistModel from "../ListModel/OrderStatusCurrentlistModel";

const data = [{}, {}, {}, {}];
export default function OrderStatusScreen({ navigation }) {
	const [value, setVlaue] = useState(true);
	return (
		<View style={{ flex: 1, backgroundColor: Colors.StatusBarColor }}>
			<StatusBar />
			<BackButtonAndProfilePicture navigation={navigation} />
			<View style={{ flex: 1, paddingLeft: 30, paddingRight: 30, paddingTop: 10 }}>
				<CurrentOrderAndPreviousOrderFilter
					CurrentOrder={() => {
						setVlaue(true);
					}}
					PreviousOrder={() => {
						setVlaue(false);
					}}
				/>
				<FlatList
					style={{ paddingTop: 10 }}
					data={data}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => {
						return <OrderStatusCurrentlistModel change={value} />;
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
