import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { SimpleGreenBackButton2, SimpleHeader } from "../../../Components/GlobleComponents/Headers";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import i18n from "i18n-js";
import { Colors, Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import TankerTypeListModel from "../ListModel/TankerTypeListModel";
import { ConstantField } from "../../../Utils/ConstantField";
import PullDownToRefresh from "../../../Components/GlobleComponents/PullDownToRefresh";
import OffersListModel from "../ListModel/OffersListModel";

const data = [{ petrol: "3.5" }, { petrol: "7.5" }];

export default function OffersScreen({ navigation }) {
	const [refreshing, setRefreshing] = useState(false);

	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<CustomStatusBar />
			<SimpleGreenBackButton2 navigation={navigation} />
			<View style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
				<View>
					<Text
						style={{
							fontSize: Dimen.FontSize_VeryBig,
							marginBottom: 30,
							fontFamily: "product_sans_regular",
							marginTop: 20,
							marginStart: ConstantField.IOS ? null : 50,
							marginEnd: ConstantField.IOS ? 50 : null,
						}}
					>
						{i18n.t("offers")}
					</Text>
				</View>
				<FlatList
					style={{}}
					data={data}
					keyExtractor={(item, index) => index.toString()}
					showsVerticalScrollIndicator={false}
					renderItem={() => {
						return (
							<OffersListModel
								OnPressAccept={() => {
									navigation.navigate("ChatScreen");
								}}
							/>
						);
					}}
				/>

				<PullDownToRefresh refreshing={refreshing} />
			</View>
		</View>
	);
}
const styles = StyleSheet.create({});
