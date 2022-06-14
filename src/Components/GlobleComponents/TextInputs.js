import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableWithoutFeedback,
	TouchableOpacity,
} from "react-native";
import { Dimen, Colors } from "../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../Utils/ConstantField";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

export const MainTextinput = (props) => {
	return (
		<View>
			<TextInput
				style={{ ...styles.MainTextInputStyle, ...props.style }}
				multiline={false}
				numberOfLines={1}
				keyboardType="default"
				placeholderTextColor={Colors.PlaceHolderColor}
				placeholder={props.children}
				onChangeText={(value) => {
					try {
						props.onChangeText(value);
					} catch (e) {}
				}}
			/>
		</View>
	);
};

export const PasswordTextInput = (props) => {
	return (
		<View>
			<TextInput
				style={{ ...styles.PasswordTextInputStyle, ...props.style }}
				multiline={false}
				numberOfLines={1}
				secureTextEntry={true}
				keyboardType="default"
				placeholderTextColor={Colors.PlaceHolderColor}
				placeholder={props.children}
				onChangeText={(value) => {
					props.onChangeText(value);
				}}
			/>
		</View>
	);
};

export const IconAndTextinputs = (props) => {
	return (
		<View
			style={{
				flexDirection: ConstantField.IOS ? "row-reverse" : "row",
				alignItems: "center",
			}}
		>
			<View>{props.children}</View>
			<TextInput
				style={{ ...styles.PasswordTextInputStyle, ...props.style }}
				multiline={false}
				numberOfLines={1}
				keyboardType="default"
				placeholderTextColor={Colors.PlaceHolderColor}
				placeholder="PlaceHolder"
				onChangeText={
					(value) => {}
					//props.onChangeText(value)
				}
			/>
		</View>
	);
};

export const IconAndTextinputs2 = (props) => {
	return (
		<View>
			<View
				style={{
					flexDirection: ConstantField.IOS ? "row-reverse" : "row",
					alignItems: "center",
				}}
			>
				<View>{props.children}</View>
				<TextInput
					style={{
						fontSize: Dimen.FontSize_Normal,
						padding: Dimen.TextInputPadding,
						textAlign: ConstantField.IOS ? "right" : "auto",
						fontFamily: "product_sans_regular",
					}}
					multiline={false}
					numberOfLines={1}
					keyboardType="default"
					placeholderTextColor={Colors.PlaceHolderColor}
					placeholder={props.hint}
					onChangeText={
						(value) => {}
						//props.onChangeText(value)
					}
				/>
			</View>
			<View style={{ borderTopWidth: 1, borderColor: Colors.BackButtonAndHadingColor }} />
		</View>
	);
};

export const UnTouchableTextinputWithIcon = (props) => {
	return (
		<View>
			<View
				style={{
					flexDirection: ConstantField.IOS ? "row-reverse" : "row",
					alignItems: "center",
				}}
			>
				<TouchableOpacity
					style={{
						flex: 1,
						//marginStart: ConstantField.IOS ? null : 10,
						//marginEnd: ConstantField.IOS ? 10 : null,
					}}
					onPress={() => {
						props.OnPress();
					}}
				>
					<TextInput
						style={{
							fontSize: Dimen.FontSize_Normal,
							textAlign: ConstantField.IOS ? "right" : "auto",
							fontFamily: "product_sans_regular",
							padding: Dimen.TextInputPadding,
							color: "black",
						}}
						numberOfLines={1}
						editable={false}
						placeholder={props.hint}
						// onChangeText={(value) => {
						// 	console.log(value);
						// }}
					>
						{props.text !== "" ? props.text : null}
					</TextInput>
				</TouchableOpacity>
				<View>{props.children}</View>
			</View>
			<View style={{ borderTopWidth: 1, borderColor: Colors.BackButtonAndHadingColor }} />
		</View>
	);
};

export const TextInputWithAddPitcher = (props) => {
	return (
		<View>
			<View
				style={{
					flexDirection: ConstantField.IOS ? "row-reverse" : "row",
					alignItems: "center",
				}}
			>
				<View
					style={{
						height: 17,
						width: 23,
						backgroundColor: Colors.MainColor,
						borderRadius: 5,
						alignItems: "center",
					}}
				>
					<Text style={{ fontWeight: "bold", color: Colors.White, fontSize: 12 }}>
						Ad
					</Text>
				</View>
				<TextInput
					style={{
						fontSize: Dimen.FontSize_Normal,
						padding: Dimen.TextInputPadding,
						textAlign: ConstantField.IOS ? "right" : "auto",
						fontFamily: "product_sans_regular",
						flex: 1,
					}}
					editable={false}
					multiline={false}
					numberOfLines={1}
					keyboardType="default"
					placeholderTextColor={Colors.PlaceHolderColor}
					placeholder={props.hint}
					onChangeText={
						(value) => {}
						//props.onChangeText(value)
					}
				/>
				<MaterialCommunityIcons name="camera-plus" size={24} color={Colors.MainColor} />
			</View>
			<View style={{ borderTopWidth: 1, borderColor: Colors.BackButtonAndHadingColor }} />
		</View>
	);
};

export const TextInputWithHeadingPassword = (props) => {
	return (
		<View>
			<View>
				<Text
					style={{
						fontSize: Dimen.FontSize_Small,
						color: Colors.BackButtonAndHadingColor,
						fontFamily: "product_sans_regular",
					}}
				>
					{props.children}
				</Text>
			</View>
			<TextInput
				style={{ ...styles.PasswordTextInputStyle, ...props.style }}
				multiline={false}
				numberOfLines={1}
				secureTextEntry={true}
				keyboardType="default"
				placeholderTextColor={Colors.PlaceHolderColor}
				placeholder="**************"
				onChangeText={
					(value) => {}
					//props.onChangeText(value)
				}
			/>
		</View>
	);
};
export const TextInputWithHeading = (props) => {
	return (
		<View>
			<View>
				<Text
					style={{
						fontSize: Dimen.FontSize_Small,
						color: Colors.BackButtonAndHadingColor,
						fontFamily: "product_sans_regular",
					}}
				>
					{props.children}
				</Text>
			</View>
			<TextInput
				style={{ ...styles.PasswordTextInputStyle, ...props.style }}
				multiline={false}
				numberOfLines={1}
				keyboardType="default"
				placeholderTextColor={Colors.PlaceHolderColor}
				placeholder={props.PlaceHolder}
				onChangeText={(value) => {
					//props.OnChangeText(value);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	MainTextInputStyle: {
		borderColor: Colors.EdtiTextBarColor,
		borderBottomWidth: Dimen.TextInputBorderWidth,
		fontSize: Dimen.FontSize_Normal,
		padding: Dimen.TextInputPadding,
		textAlign: ConstantField.IOS ? "right" : "auto",
		fontFamily: "product_sans_regular",
	},

	PasswordTextInputStyle: {
		borderColor: Colors.EdtiTextBarColor,
		borderBottomWidth: Dimen.TextInputBorderWidth,
		fontSize: Dimen.FontSize_Normal,
		padding: Dimen.TextInputPadding,
		textAlign: ConstantField.IOS ? "right" : ConstantField.AND ? "right" : "auto",
		fontFamily: "product_sans_regular",
	},
});
