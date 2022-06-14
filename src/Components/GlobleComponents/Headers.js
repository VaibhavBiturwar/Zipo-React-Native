import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Switch,
} from "react-native";
import { Dimen, Colors } from "../../Utility/DimenAndColor/DimenAndColor";
import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Localization from "expo-localization";
import { ConstantField } from "../../Utils/ConstantField";
import IosHeaderMargin from "./IosHeaderMargin";

export const SimpleGreenBackButton = (props) => {
	return (
		<View>
			<IosHeaderMargin />
			<View
				style={{
					marginTop: 30,
					flexDirection: ConstantField.IOS ? "row-reverse" : "row",
				}}
			>
				<TouchableWithoutFeedback
					onPress={() => {
						props.navigation.goBack();
					}}
				>
					<View
						style={{
							borderColor: Colors.White,
							borderWidth: 1,
							height: Dimen.BackButton_Size,
							width: Dimen.BackButton_Size,
							borderRadius: 15,
							marginStart: 30,
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: Colors.White,
							marginEnd: ConstantField.IOS ? 30 : null,
						}}
					>
						{Localization.isRTL ? (
							<AntDesign
								name="right"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						) : (
							<AntDesign
								name="left"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						)}
					</View>
				</TouchableWithoutFeedback>
				<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
					<Text
						style={{
							color: Colors.BackButtonAndHadingColor,
							fontSize: Dimen.FontSize_MediamBig,
							marginEnd: ConstantField.IOS ? null : 60,
							marginStart: ConstantField.IOS ? 60 : null,
						}}
					>
						{props.children}
					</Text>
				</View>
			</View>
		</View>
	);
};
export const SimpleGreenBackButton2 = (props) => {
	return (
		<View>
			<IosHeaderMargin />
			<View
				style={{
					marginTop: 30,
					flexDirection: ConstantField.IOS ? "row-reverse" : "row",
				}}
			>
				<TouchableWithoutFeedback
					onPress={() => {
						props.navigation.goBack();
					}}
				>
					<View
						style={{
							borderColor: Colors.White,
							borderWidth: 1,
							height: Dimen.BackButton_Size,
							width: Dimen.BackButton_Size,
							borderRadius: 15,
							marginStart: 30,
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: Colors.BackButtonColor,
							marginEnd: ConstantField.IOS ? 30 : null,
						}}
					>
						{Localization.isRTL ? (
							<AntDesign
								name="right"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						) : (
							<AntDesign
								name="left"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						)}
					</View>
				</TouchableWithoutFeedback>
				<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
					<Text
						style={{
							color: Colors.BackButtonAndHadingColor,
							fontSize: Dimen.FontSize_Heading_2,
							marginEnd: ConstantField.IOS ? null : 60,
							marginStart: ConstantField.IOS ? 60 : null,
							fontWeight: "bold",
						}}
					>
						{props.children}
					</Text>
				</View>
			</View>
		</View>
	);
};

export const SimpleHeader = (props) => {
	return (
		<View>
			<IosHeaderMargin />
			<View style={{ marginBottom: 10 }}>
				<Text
					style={{
						color: Colors.IntroTextColor,
						fontSize: Dimen.FontSize_Signup_Heading,
						alignSelf: ConstantField.IOS ? "flex-end" : "flex-start",
						fontFamily: "product_sans_regular",
					}}
				>
					{props.children}
				</Text>
			</View>
		</View>
	);
};

export const BackButtonWithBelowHeading = (props) => {
	const APPBAR_HEIGHT = Platform.OS === "ios" ? 25 : null;
	return (
		<View>
			{Platform.OS === "ios" ? (
				<View
					style={{
						height: APPBAR_HEIGHT,
						backgroundColor: Colors.StatusBarColor,
					}}
				/>
			) : null}
			<View style={{ marginTop: 30 }}>
				<TouchableWithoutFeedback
					onPress={() => {
						props.navigation.goBack();
					}}
				>
					<View
						style={{
							borderColor: Colors.BackButtonColor,
							borderWidth: 1,
							height: Dimen.BackButton_Size,
							width: Dimen.BackButton_Size,
							borderRadius: 15,
							marginStart: 30,
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: Colors.BackButtonColor,
							marginEnd: ConstantField.IOS ? 30 : null,
						}}
					>
						{Localization.isRTL ? (
							<AntDesign
								name="right"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						) : (
							<AntDesign
								name="left"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						)}
					</View>
				</TouchableWithoutFeedback>
				<View
					style={{
						justifyContent: "center",
						backgroundColor: Colors.StatusBarColor,
						marginLeft: Dimen.MarginmainConatiner,
						marginRight: Dimen.MarginmainConatiner,
						marginTop: 20,
						alignItems: ConstantField.IOS ? "flex-end" : "flex-start",
					}}
				>
					<Text
						style={{
							color: Colors.BackButtonAndHadingColor,
							fontSize: Dimen.FontSize_Heading_2,
							//fontFamily: "product_sans_bold",
							fontWeight: "bold",
						}}
					>
						{props.children}
					</Text>
				</View>
			</View>
		</View>
	);
};

export const ChatScreenHeader = (props) => {
	return (
		<View>
			<IosHeaderMargin />
			<View
				style={{
					marginTop: 30,
					flexDirection: ConstantField.IOS ? "row-reverse" : "row",
				}}
			>
				<TouchableWithoutFeedback
					onPress={() => {
						props.navigation.goBack();
					}}
				>
					<View
						style={{
							borderColor: Colors.White,
							borderWidth: 1,
							height: Dimen.BackButton_Size,
							width: Dimen.BackButton_Size,
							borderRadius: 15,
							marginStart: 30,
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: Colors.BackButtonColor,
							marginEnd: ConstantField.IOS ? 30 : null,
						}}
					>
						{Localization.isRTL ? (
							<AntDesign
								name="right"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						) : (
							<AntDesign
								name="left"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						)}
					</View>
				</TouchableWithoutFeedback>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<View
						style={{
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Image
							style={{
								height: Dimen.ImageChatScreen,
								width: Dimen.ImageChatScreen,
								resizeMode: "cover",
								borderRadius: 35,
								overflow: "hidden",
							}}
							source={require("../../assets/profile.png")}
						/>
						<Text
							style={{
								color: Colors.BackButtonAndHadingColor,
								fontSize: Dimen.FontSize_MediamBig,
								fontFamily: "product_sans_regular",
								marginTop: 10,
							}}
						>
							Wadi Station
						</Text>
					</View>
				</View>
				<TouchableOpacity
					onPress={() => {
						props.CallButtonPress();
					}}
				>
					<View
						style={{
							backgroundColor: Colors.BackButtonColor,
							height: 35,
							width: 35,
							borderRadius: 10,
							marginStart: ConstantField.IOS ? 30 : null,
							marginEnd: ConstantField.IOS ? null : 30,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Ionicons name="call-outline" size={22} color={"green"} />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export const BackButtonAndProfilePicture = (props) => {
	return (
		<View>
			<IosHeaderMargin />
			<View
				style={{
					marginTop: 30,
					flexDirection: ConstantField.IOS ? "row-reverse" : "row",
				}}
			>
				<TouchableWithoutFeedback
					onPress={() => {
						props.navigation.goBack();
					}}
				>
					<View
						style={{
							borderColor: Colors.White,
							borderWidth: 1,
							height: Dimen.BackButton_Size,
							width: Dimen.BackButton_Size,
							borderRadius: 15,
							marginStart: 30,
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: Colors.BackButtonColor,
							marginEnd: ConstantField.IOS ? 30 : null,
						}}
					>
						{Localization.isRTL ? (
							<AntDesign
								name="right"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						) : (
							<AntDesign
								name="left"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						)}
					</View>
				</TouchableWithoutFeedback>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<View
						style={{
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Image
							style={{
								height: Dimen.ImageChatScreen,
								width: Dimen.ImageChatScreen,
								resizeMode: "cover",
								borderRadius: Dimen.ImageChatScreen / 2,
								overflow: "hidden",
							}}
							source={require("../../assets/profile.png")}
						/>
						<Text
							style={{
								color: Colors.BackButtonAndHadingColor,
								fontSize: Dimen.FontSize_MediamBig,
								fontFamily: "product_sans_regular",
								marginTop: 10,
							}}
						>
							Wadi Station
						</Text>
					</View>
				</View>
				<View style={{ width: 60 }} />
			</View>
		</View>
	);
};

export const BackButtonAndLogoutButton = (props) => {
	return (
		<View>
			<IosHeaderMargin />
			<View
				style={{
					marginTop: 30,
					flexDirection: ConstantField.IOS ? "row-reverse" : "row",
					alignItems: "center",
				}}
			>
				<TouchableWithoutFeedback
					onPress={() => {
						props.navigation.goBack();
					}}
				>
					<View
						style={{
							borderColor: Colors.White,
							height: Dimen.BackButton_Size,
							width: Dimen.BackButton_Size,
							borderRadius: 15,
							marginStart: 30,
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: Colors.White,
							marginEnd: ConstantField.IOS ? 30 : null,
						}}
					>
						{Localization.isRTL ? (
							<AntDesign
								name="right"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						) : (
							<AntDesign
								name="left"
								color={Colors.Black}
								size={Dimen.BackButtonArrow_Size}
							/>
						)}
					</View>
				</TouchableWithoutFeedback>
				<View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{<Text style={{ fontFamily: "product_sans_regular" }}>{props.children}</Text>}
				</View>
				<TouchableOpacity
					onPress={() => {
						props.OnLogout();
					}}
				>
					<View
						style={{
							backgroundColor: Colors.LogoutBackGroundColor,
							height: 35,
							width: 35,
							borderRadius: 10,
							marginStart: ConstantField.IOS ? 30 : null,
							marginEnd: ConstantField.IOS ? null : 30,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Ionicons name="power" size={22} color={Colors.BackButtonColor} />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export const SwitchAndHeading = (props) => {
	return (
		<View>
			<IosHeaderMargin />
			<View
				style={{
					flexDirection: ConstantField.IOS ? "row-reverse" : "row",
					height: 30,
					paddingHorizontal: 30,
					alignItems: "center",
					marginTop: 30,
				}}
			>
				<View
					style={{
						flexDirection: ConstantField.IOS ? "row-reverse" : "row",
						alignItems: "center",
					}}
				>
					<Switch
						trackColor={{ false: Colors.DrawerColor, true: Colors.MainColor }}
						thumbColor={Colors.White}
						ios_backgroundColor="#3e3e3e"
						//onValueChange={true}
						value={false}
					/>
					<Text
						style={{
							color: Colors.BackButtonAndHadingColor,
							fontFamily: "product_sans_regular",
						}}
					>
						{/* Activate to Receive request */}
						{props.message}
					</Text>
				</View>
				<View
					style={{
						flex: 1,
						alignItems: ConstantField.IOS ? "flex-start" : "flex-end",
					}}
				>
					<Text
						style={{
							alignSelf: "flex-end",
							color: Colors.BackButtonAndHadingColor,
							fontFamily: "sanse_bold",
							fontSize: Dimen.FontSize_VeryBig,
							fontSize: 30,
						}}
					>
						{props.heading}
					</Text>
				</View>
			</View>
		</View>
	);
};

export const BackButtonWithBelowHeadingAndIcon = (props) => {
	const APPBAR_HEIGHT = Platform.OS === "ios" ? 25 : null;
	return (
		<View>
			{Platform.OS === "ios" ? (
				<View
					style={{
						height: APPBAR_HEIGHT,
						backgroundColor: Colors.StatusBarColor,
					}}
				/>
			) : null}
			<View style={{ marginTop: 30 }}>
				<View
					style={{
						flexDirection: ConstantField.IOS ? "row-reverse" : "row",
						justifyContent: "space-between",
						paddingHorizontal: 30,
					}}
				>
					<TouchableWithoutFeedback
						onPress={() => {
							props.navigation.goBack();
						}}
					>
						<View
							style={{
								borderColor: Colors.BackButtonColor,
								borderWidth: 1,
								height: Dimen.BackButton_Size,
								width: Dimen.BackButton_Size,
								borderRadius: 15,
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: Colors.BackButtonColor,
							}}
						>
							{Localization.isRTL ? (
								<AntDesign
									name="right"
									color={Colors.Black}
									size={Dimen.BackButtonArrow_Size}
								/>
							) : (
								<AntDesign
									name="left"
									color={Colors.Black}
									size={Dimen.BackButtonArrow_Size}
								/>
							)}
						</View>
					</TouchableWithoutFeedback>
					<View style={{ alignItems: "center" }}>
						<TouchableWithoutFeedback
							onPress={() => {
								props.OnAddClick();
							}}
						>
							<View
								style={{
									height: 40,
									width: 40,
									borderRadius: 20,
									alignItems: "center",
									justifyContent: "center",
									backgroundColor: Colors.White,
									elevation: 3,
									shadowColor: Colors.MainColor,
									shadowOffset: { width: 0, height: 2 },
									shadowOpacity: 0.5,
									shadowRadius: 2,
								}}
							>
								<MaterialCommunityIcons
									name="plus"
									size={35}
									color={Colors.MainColor}
								/>
							</View>
						</TouchableWithoutFeedback>
						<Text style={{ fontFamily: "product_sans_regular", marginTop: 5 }}>
							{props.textHeading}
						</Text>
					</View>
				</View>
				<View
					style={{
						justifyContent: "center",
						backgroundColor: Colors.StatusBarColor,
						marginLeft: Dimen.MarginmainConatiner,
						marginRight: Dimen.MarginmainConatiner,
						alignItems: ConstantField.IOS ? "flex-end" : "flex-start",
					}}
				>
					<Text
						style={{
							color: Colors.BackButtonAndHadingColor,
							fontSize: Dimen.FontSize_Heading_2,
							//fontFamily: "product_sans_bold",
							fontWeight: "bold",
						}}
					>
						{props.children}
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});
