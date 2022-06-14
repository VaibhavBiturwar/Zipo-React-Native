import { Toast } from "native-base";
import { TostTop, TostBottom, ConstantField } from "./ConstantField";
import i18n from "i18n-js";

export const LogInCondition = (phoneNummber, password) => {
	if (phoneNummber.length < ConstantField.PhoneNumberLength) {
		TostTop(i18n.t("entrValidNo"));
		return false;
	} else if (password.length < ConstantField.Passwordlength) {
		TostTop(i18n.t("enterValidPassword"));
		return false;
	} else {
		return true;
	}
};

export const UserSignUpConadition = (phoneNummber, password, confirmPassword, TandA) => {
	if (phoneNummber.length < ConstantField.PhoneNumberLength) {
		TostTop(i18n.t("entrValidNo"));
		return false;
	} else if (password.length < ConstantField.Passwordlength) {
		TostTop(i18n.t("passwordNotLessThen6"));
		return false;
	} else if (confirmPassword != password) {
		TostTop(i18n.t("passwordNotMatch"));
		return false;
	} else if (!TandA) {
		TostTop(i18n.t("selectTermsAndCondition"));
		return false;
	} else {
		return true;
	}
};

export const UserSignUpConadition2 = (
	name,
	phoneNummber,
	password,
	location,
	BuisnessLicence_Or_Id,
	TandA
) => {
	if (phoneNummber.length < ConstantField.PhoneNumberLength) {
		TostTop(i18n.t("entrValidNo"));
		return false;
	} else if (password.length < ConstantField.Passwordlength) {
		TostTop(i18n.t("passwordNotLessThen6"));
		return false;
	} else if (!TandA) {
		TostTop(i18n.t("selectTermsAndCondition"));
		return false;
	} else {
		return true;
	}
};

export const ForgetPasswordConadition = (phoneNummber) => {
	if (phoneNummber.length < ConstantField.PhoneNumberLength) {
		TostTop(i18n.t("validPhoneNumber"));
		return false;
	} else {
		return true;
	}
};

export const AgentSignUpConadition = (
	name,
	mobileNumber,
	password,
	location,
	nationalIdOrBuisnesslicence,
	TandAselect
) => {
	if (!name) {
		TostTop(i18n.t("enterValidName"));
		return false;
	} else if (mobileNumber.length < ConstantField.PhoneNumberLength) {
		TostTop(i18n.t("entrValidNo"));
		return false;
	} else if (password.length < ConstantField.Passwordlength) {
		TostTop(i18n.t("enterValidPassword"));
		return false;
	} else if (location.address === "") {
		TostTop(i18n.t("enterLocation"));
		return false;
	} else if (!nationalIdOrBuisnesslicence) {
		TostTop(i18n.t("enterValidDocument"));
		return false;
	} else if (!TandAselect) {
		TostTop(i18n.t("selectTermsAndCondition"));
		return false;
	} else {
		return true;
	}
};

export const AgentUpdateSignUpCond = (
	mobileNumber,
	name,
	emailID,
	location,
	latitude,
	longitude,
	age,
	DOB,
	expiryDate,
	IDNumber,
	nationality,
	education,
	speciality,
	workExp,
	signiture
) => {
	if (!emailID) {
		TostTop(i18n.t("enterValidEmail"));
		return false;
	} else if (mobileNumber.length < ConstantField.PhoneNumberLength) {
		TostTop(i18n.t("entrValidNo"));
		return false;
	} else if (!location) {
		TostTop(i18n.t("enterLocation"));
		return false;
	} else if (!IDNumber) {
		TostTop(i18n.t("enterIdNumber"));
		return false;
	} else if (!expiryDate) {
		TostTop(i18n.t("enterExpiryDate"));
		return false;
	} else if (!DOB) {
		TostTop(i18n.t("enterDateOfBirth"));
		return false;
	} else if (!age) {
		TostTop(i18n.t("enterValidAge"));
		return false;
	} else if (!nationality) {
		TostTop(i18n.t("enterNatnality"));
		return false;
	} else if (!education) {
		TostTop(i18n.t("enterEducation"));
		return false;
	} else if (!workExp) {
		TostTop(i18n.t("selectWork"));
		return false;
	} else if (!speciality) {
		TostTop(i18n.t("enterSpeciality"));
		return false;
	} else if (!signiture) {
		TostTop(i18n.t("selectSignature"));
		return false;
	} else {
		return true;
	}
};

export const PasswordConadition = (password, confirmPassword) => {
	if (password.length < ConstantField.Passwordlength) {
		TostTop(i18n.t("passwordNotLessThen6"));
		return false;
	} else if (confirmPassword != password) {
		TostTop(i18n.t("passwordNotMatch"));
		return false;
	} else {
		return true;
	}
};

export const SelectAgentCondition = (
	showCalander,
	specificDate,
	specificDate1,
	onBehalfOf,
	reasonFor
) => {
	if (showCalander && specificDate === "" && specificDate1 === "") {
		TostTop(i18n.t("selectDate"));
		return false;
	} else if (onBehalfOf === "") {
		TostTop(i18n.t("fillBehalfOf"));
		return false;
	} else if (reasonFor === "") {
		TostTop(i18n.t("pleaseSelectReason"));
		return false;
	} else {
		return true;
	}
};

export const CardDetailConadition = (cardNumber, name, expMonth, expYear, cvv) => {
	if (cardNumber.length < 16) {
		TostTop(i18n.t("correctCardNumber"));
		return false;
	} else if (name.length < 6) {
		TostTop(i18n.t("nameNotLessThen6"));
		return false;
	} else if (expMonth.length < 1) {
		TostTop(i18n.t("correctMonth"));
		return false;
	} else if (expYear.length < 1) {
		TostTop(i18n.t("correctYear"));
		return false;
	} else if (cvv.length < 2) {
		TostTop(i18n.t("correctCVV"));
		return false;
	} else {
		return true;
	}
};

export const TostTop1 = (message) => {
	Toast.show({
		text: message,
		position: "top",
		type: "success",
		duration: 3000,
	});
};

export const TostBottom1 = (message) => {
	Toast.show({
		text: message,
		position: "bottom",
		type: "success",
		duration: 3000,
	});
};
