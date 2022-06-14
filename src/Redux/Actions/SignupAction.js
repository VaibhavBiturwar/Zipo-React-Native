export const SignUpAction = {
	NAME: "NAME",
	SIGNUP_PHONE_NUMBER: "SIGNUP_PHONE_NUMBER",
	SIGNUP_PASSWORD: "SIGNUP_PASSWORD",
	IS_LOGGED: "IS_LOGGED",
	BUISNESS_LICENSE: "BUISNESS_LICENSE",
	NATINAL_ID: "NATINAL_ID",
	LOCATION: "LOCATION",
	SIGNUP_USER_TYPE: "SIGNUP_USER_TYPE",
	SIGNUP_TANKER_TYPE: "SIGNUP_TANKER_TYPE",
};

export const nameFun = (name) => {
	return {
		type: SignUpAction.NAME,
		name: name,
	};
};
export const phoneNumberFun = (phonenumber) => {
	return {
		type: SignUpAction.SIGNUP_PHONE_NUMBER,
		phonenumber: phonenumber,
	};
};
export const passwordFun = (password) => {
	return {
		type: SignUpAction.SIGNUP_PASSWORD,
		password: password,
	};
};
export const locationFun = (location) => {
	return {
		type: SignUpAction.LOCATION,
		location: location,
	};
};

export const natianIdFun = (natinalId) => {
	return {
		type: SignUpAction.NATINAL_ID,
		natinalId: natinalId,
	};
};

export const buisnessLicenceFun = (buisnessLicence) => {
	return {
		type: SignUpAction.BUISNESS_LICENSE,
		buisnessLicence: buisnessLicence,
	};
};

export const userTypeFun = (usertype) => {
	return {
		type: SignUpAction.SIGNUP_USER_TYPE,
		usertype: usertype,
	};
};

export const isLoggedFun = (value) => {
	return {
		type: SignUpAction.IS_LOGGED,
		isLoggedIn: value,
	};
};
export const tankertypesFun = (tankerTypes) => {
	return {
		type: SignUpAction.SIGNUP_TANKER_TYPE,
		tankerTypes: tankerTypes,
	};
};
