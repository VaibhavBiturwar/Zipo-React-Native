import { SignUpAction } from "../Actions/SignupAction";

const signupInittialState = {
	phoneNumber: "",
	password: "",
	name: "",
	location: {
		address: "",
		latitude: 0.0,
		longitude: 0.0,
	},
	buisnessLicence: "",
	natinalId: "",
	isLoggedIn: false,
	usertype: "GasStation",
	tankerTypes: [],
};

export const SignUp = (state = signupInittialState, action) => {
	const { type } = action;
	switch (type) {
		case SignUpAction.NAME:
			return {
				...state,
				name: action.name,
			};
		case SignUpAction.SIGNUP_PHONE_NUMBER:
			return {
				...state,
				phoneNumber: action.phonenumber,
			};
		case SignUpAction.SIGNUP_PASSWORD:
			return {
				...state,
				password: action.password,
			};
		case SignUpAction.LOCATION:
			return {
				...state,
				location: action.location,
			};

		case SignUpAction.NATINAL_ID:
			return {
				...state,
				natinalId: action.natinalId,
			};
		case SignUpAction.BUISNESS_LICENSE:
			return {
				...state,
				buisnessLicence: action.buisnessLicence,
			};
		case SignUpAction.SIGNUP_USER_TYPE:
			return {
				...state,
				usertype: action.usertype,
			};

		case SignUpAction.IS_LOGGED:
			return {
				...state,
				isLoggedIn: action.isLoggedIn,
			};
		case SignUpAction.SIGNUP_TANKER_TYPE:
			return {
				...state,
				tankerTypes: action.tankerTypes,
			};

		case "SIGNUP_RESET":
			return signupInittialState;

		default:
			return state;
	}
};
