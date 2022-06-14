import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SimpleGreenBackButton2, SimpleHeader } from "../../../Components/GlobleComponents/Headers";
import { CustomStatusBar } from "../../../Components/GlobleComponents/StatusBar";
import i18n from "i18n-js";
import { Dimen } from "../../../Utility/DimenAndColor/DimenAndColor";
import TankerTypeListModel from "../ListModel/TankerTypeListModel";
import { ConstantField, TostTop, EndPoints } from "../../../Utils/ConstantField";
import { MainGreenButton } from "../../../Components/GlobleComponents/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { tankertypesFun } from "../../../Redux/Actions/SignupAction";
import { PostApi_1 } from "../../../Api/Requests/ApiRequests";
import { Root } from "native-base";

const data = [
	{ petrol: "3.5" },
	{ petrol: "7.5" },
	{ petrol: "12" },
	{ petrol: "16" },
	{ petrol: "26" },
	{ petrol: "44" },
];

let array = [];

export default function SelectTankerType({ navigation }) {
	const dispatch = useDispatch();
	const Signup = useSelector((state) => state.SignUp);
	const { name, phoneNumber, password, location, natinalId, tankerTypes } = Signup;

	const onNextPress = () => {
		const formdata = new FormData();
		formdata.append("name", name);
		formdata.append("mobile_number", phoneNumber);
		formdata.append("password", password);
		formdata.append("location", location.address);
		formdata.append("latitude", location.latitude);
		formdata.append("longitude", location.longitude);
		formdata.append("category", "seller");
		for (let i = 0; i < tankerTypes.length; i++) {
			let s = "tanker_type[" + i + "]";
			formdata.append(s, tankerTypes[i]);
		}
		formdata.append("lang", ConstantField.ARABIC ? "ar" : "en");
		formdata.append("license", {
			uri: natinalId,
			type: "image/png",
			name: natinalId,
		});

		console.log("DATA::", formdata);
		PostApi_1(EndPoints.signup, formdata)
			.then((data) => {
				if (data.succcess) {
					TostTop(data.message);
					dispatch({
						type: "SIGNUP_RESET",
					});
					navigation.navigate("Login");
				} else {
					TostTop(data.message);
				}
				if (data.succcess) {
					navigation.navigate("Login");
				}
			})
			.catch((error) => {
				console.log("USERSIGNUP ERROR CALLED::", error);
			});
	};

	return (
		<Root>
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
												array.push(item.petrol);
												dispatch(tankertypesFun(array));
											}}
										/>
									);
								}}
							/>
						</View>
					</View>
				</View>
				<MainGreenButton
					OnPress={() => {
						//navigation.navigate("AgentDrawerNavigation");
						onNextPress();
					}}
				>
					{i18n.t("confirm")}
				</MainGreenButton>
			</View>
		</Root>
	);
}
const styles = StyleSheet.create({});
