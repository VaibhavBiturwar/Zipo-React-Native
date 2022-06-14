import { Platform } from "react-native";
import * as Localization from "expo-localization";
import { Toast } from "native-base";

export const ConstantField = {
	BASEURL: "https://api.muverity.net/tanko/",
	// Dummy Photo
	dummyPhoto: "https://api.muverity.net/tawkil/assets/uploads/defualt.png",
	// Input Fields Length
	PhoneNumberLength: 6,
	Passwordlength: 8,
	//IOS RTL
	IOS: Localization.isRTL && Platform.OS === "ios",
	AND: Localization.isRTL && Platform.OS === "android",
	//For Api to senf language is arabic or English
	ARABIC: Localization.isRTL,
	//Saudi Arebia center
	SauDiArabRegion: {
		latitude: 23.8859,
		longitude: 45.0792,
		latitudeDelta: 0.5,
		longitudeDelta: 0.5,
	},
};
export const EndPoints = {
	login: "login",
	signup: "signup",
	getProfile: "getProfile",
	updateProfile: "updateProfile",
	forgetPass: "forgotPassword",
	agentPackage: "agentPackage",
	checkAgentPackage: "checkAgentPackage",
	approveAgent: "approveAgent",
	getAllAgent: "getAllAgent",
	custPlaceOrder: "custPlaceOrder",
	avaiblity: "avaiblity",
	chat: "chat",
	getOrderStatus: "getOrderStatus",
	custOrderList: "custOrderList",
	getSteps: "getSteps",
	addSteps: "addSteps",
	cashout: "cashout",
	agentRating: "agentRating",
	updateAgentRating: "updateAgentRating",
	updateCustomerRating: "updateCustomerRating",
	deleteNotification: "deleteNotification",
	logout: "logout",
	subscription: "subscription",
	getTotalAmount: "getTotalAmount",
};

export const TostTop = (message) => {
	Toast.show({
		text: message,
		position: "top",
		type: "success",
		duration: 2000,
	});
};

export const TostBottom = (message) => {
	// console.log("Called");
	Toast.show({
		text: message,
		position: "bottom",
		type: "success",
		duration: 2000,
	});
};
