import { LoginActions } from "../Actions/LoginAction";

const loginInitialState = {
	phoneNumber: "",
	password: "",
	isLoggedIn: false,
	forgetPhoneNumber: "",
	devideToken: "",
};

export const Login = (state = loginInitialState, action) => {
	const { type } = action;
	switch (type) {
		case LoginActions.PHONE_NUMBER:
			return {
				...state,
				phoneNumber: action.phonenumber,
			};
		case LoginActions.PASSWORD:
			return {
				...state,
				password: action.password,
			};
		case LoginActions.IS_LOGGED:
			return {
				...state,
				isLoggedIn: action.isLoggedIn,
			};

		case LoginActions.FORGET_PHONENUMBER:
			return {
				...state,
				forgetPhoneNumber: action.forgetPhoneNumber,
			};
		case LoginActions.DEVICE_TOKEN:
			return {
				...state,
				devideToken: action.devideToken,
			};
		case "LOGIN_RESET":
			return loginInitialState;

		default:
			return state;
	}
};
