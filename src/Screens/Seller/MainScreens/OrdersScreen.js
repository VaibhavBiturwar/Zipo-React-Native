import React from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SwitchAndHeading } from "../../../Components/GlobleComponents/Headers";
import { Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../../Utils/ConstantField";
import DrawerButton2 from "../../Seller/SellerDrawerNavigation/DrawerButton2";
import AgentOrderListModel from "../ListModel/AgentOrderListModel";
import { Ionicons } from "@expo/vector-icons";
import i18n from "i18n-js";

const data = [{}, {}, {}, {}, {}, {}, {}, {}];

export default function OrdersScreen({ navigation, route }) {
	return (
		<View style={{ backgroundColor: Colors.StatusBarColor, flex: 1 }}>
			<SwitchAndHeading
				message={i18n.t("activateToReceiverequest")}
				heading={i18n.t("orders")}
			/>
			<View style={{ marginTop: 5 }} />
			<View style={{ flex: 1 }}>
				<FlatList
					style={{
						flex: 1,
						paddingLeft: ConstantField.IOS ? 30 : 40,
						paddingRight: ConstantField.IOS ? 40 : 30,
					}}
					data={data}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => {
						return (
							<AgentOrderListModel
								OnViewPress={() => {
									navigation.navigate("AgentChatScreen");
								}}
							/>
						);
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
				<DrawerButton2 navigation={navigation} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
