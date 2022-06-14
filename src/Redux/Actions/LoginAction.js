export const LoginActions = {
	LOGIN_CREDANTIAL: "LOGIN_CREDANTIAL",
	PHONE_NUMBER: "PHONE_NUMBER",
	PASSWORD: "PASSWORD",
	DEVICE_TOKEN: "DEVICE_TOKEN",
	IS_LOGGED: "IS_LOGGED",
	FORGET_PHONENUMBER: "FORGET_PHONENUMBER",
};

// export const updateLoginCredantial = (phonenumber, password) => {
// 	return {
// 		type: LoginActions.LOGIN_CREDANTIAL,
// 		credantial: {
// 			phonenumber: phonenumber,
// 			password: password,
// 		},
// 	};
// };
export const phoneNumberFun = (phonenumber) => {
	return {
		type: LoginActions.PHONE_NUMBER,
		phonenumber: phonenumber,
	};
};
export const passwordFun = (password) => {
	return {
		type: LoginActions.PASSWORD,
		password: password,
	};
};
export const deviceTokenFun = (devideToken) => {
	return {
		type: LoginActions.DEVICE_TOKEN,
		devideToken: devideToken,
	};
};
export const fogetPassNumberFun = (forgetPhoneNumber) => {
	return {
		type: LoginActions.FORGET_PHONENUMBER,
		forgetPhoneNumber: forgetPhoneNumber,
	};
};

export const isLoggedFun = (value) => {
	return {
		type: LoginActions.IS_LOGGED,
		isLoggedIn: value,
	};
};
