import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, FlatList, Image } from "react-native";
import { BackButtonWithBelowHeadingAndIcon } from "../../../Components/GlobleComponents/Headers";
import { MainGreenButton } from "../../../Components/GlobleComponents/Buttons";
import i18n from "i18n-js";
import { Dimen, Colors } from "../../../Utility/DimenAndColor/DimenAndColor";
import MyAdsListModel from "../ListModel/MyAdsListModel";
import RequestAndApproveFilter from "../../../Components/GlobleComponents/RequestAndApproveFilter";

const data = [{}, {}, {}, {}, {}];

export default function MyAds({ navigation }) {
	const [images, setImages] = useState([]);
	const [approve, setApprove] = useState(false);
	return (
		<View style={{ flex: 1, backgroundColor: Colors.White }}>
			<StatusBar />
			<BackButtonWithBelowHeadingAndIcon
				navigation={navigation}
				OnAddClick={() => {
					navigation.navigate("PostAnAdd");
				}}
				textHeading={i18n.t("postAnAdd")}
			>
				{i18n.t("myAds")}
			</BackButtonWithBelowHeadingAndIcon>
			<View style={{ borderBottomWidth: 2, marginHorizontal: 30, marginTop: 20 }} />
			<View style={{ flex: 1, marginVertical: 10 }}>
				<View style={{ paddingHorizontal: 30 }}>
					<RequestAndApproveFilter
						ApprovedRequestClick={() => {
							setApprove(true);
						}}
						RequestClick={() => {
							setApprove(false);
						}}
					/>
				</View>

				<FlatList
					style={{ marginTop: 10 }}
					data={data}
					keyExtractor={(item, index) => index.toString()}
					showsVerticalScrollIndicator={false}
					renderItem={({ item, index }) => {
						return (
							<MyAdsListModel
								approved={approve}
								OnPay={() => {
									navigation.navigate("AgentAddPayment");
								}}
							/>
						);
					}}
				></FlatList>
			</View>
			<MainGreenButton
				style={{}}
				OnPress={() => {
					//navigation.navigate("Profile");
				}}
			>
				{i18n.t("confirm")}
			</MainGreenButton>
		</View>
	);
}
