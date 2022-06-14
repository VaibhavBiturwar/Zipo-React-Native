import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SimpleGreenBackButton2, SimpleHeader } from "../../../Components/GlobleComponents/Headers";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import i18n from "i18n-js";
import { Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import TankerTypeListModel from "../ListModel/TankerTypeListModel";
import { ConstantField } from "../../../Utils/ConstantField";

const data = [
	{ petrol: "3.5" },
	{ petrol: "7.5" },
	{ petrol: "12" },
	{ petrol: "16" },
	{ petrol: "26" },
	{ petrol: "44" },
];

export default function TenkerType({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<CustomStatusBar />
			<SimpleGreenBackButton2 navigation={navigation} />
			<View style={{ flex: 1, justifyContent: "center" }}>
				<View
					style={{
						height: 250,
						justifyContent: "center",
						paddingLeft: 20,
						paddingRight: 20,
					}}
				>
					<View>
						<Text
							style={{
								fontSize: Dimen.FontSize_VeryBig,
								marginBottom: 30,
								fontFamily: "product_sans_regular",
								marginStart: ConstantField.IOS ? null : 60,
								marginEnd: ConstantField.IOS ? 60 : null,
							}}
						>
							{i18n.t("tankertype")}
						</Text>
					</View>

					<View style={{ height: 200 }}>
						<FlatList
							data={data}
							horizontal={true}
							keyExtractor={(item, index) => index.toString()}
							showsHorizontalScrollIndicator={false}
							renderItem={({ item }) => {
								return (
									<TankerTypeListModel
										item={item}
										OnPress={() => {
											navigation.navigate("OffersScreen");
										}}
									/>
								);
							}}
						/>
					</View>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({});
