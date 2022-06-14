import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Alert,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Dimen, Colors } from "../../Utility/DimenAndColor/DimenAndColor";
import { ConstantField } from "../../Utils/ConstantField";

export const ProfilePitcherWithEditButton = (props) => {
	let uri = props.Uri;
	let editMode = props.Editmode;
	let imageHW = 80;
	return (
		<View
			style={{
				height: imageHW,
				width: imageHW,
				//marginTop: -40,
				//borderRadius: imageHW / 2,
				//overflow: "hidden",
			}}
		>
			{uri !== "" ? (
				<Image
					style={{
						height: imageHW,
						width: imageHW,
						//resizeMode: "stretch",
						//backgroundColor: Colors.MainColor,
						borderRadius: 10,
					}}
					source={{ uri: uri }} //Put imahe Uri here
				/>
			) : (
				<Image
					style={{
						height: imageHW,
						width: imageHW,
						resizeMode: "cover",
					}}
					source={require("../../assets/profile.png")}
				/>
			)}

			{editMode === true ? (
				<View
					style={{
						backgroundColor: Colors.White,
						height: imageHW,
						width: imageHW,
						position: "absolute",
						opacity: 0.6,
						alignItems: "center",
						justifyContent: "center",
						borderRadius: imageHW / 2,
						overflow: "hidden",
					}}
				>
					<Feather
						name="edit"
						size={25}
						color={Colors.Black}
						onPress={() => {
							//props.Pickimage();
						}}
					/>
				</View>
			) : props.ShowEditIcon ? (
				<TouchableWithoutFeedback
					onPress={() => {
						props.EditClick();
					}}
				>
					<Feather
						style={{
							height: 25,
							width: 25,
							position: "absolute",
							alignSelf: ConstantField.IOS ? "flex-start" : "flex-end",
						}}
						name="edit"
						size={20}
						color={Colors.Black}
						onPress={() => {
							//props.Pickimage();
						}}
					/>
				</TouchableWithoutFeedback>
			) : null}

			{props.ShowSaveButton ? (
				<TouchableWithoutFeedback
					onPress={() => {
						props.SaveButtonClick();
					}}
				>
					<View
						style={{
							height: 25,
							width: 25,
							position: "absolute",
							alignSelf: ConstantField.IOS ? "flex-start" : "flex-end",
							borderRadius: 14.5,
							backgroundColor: Colors.MainColor,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<MaterialIcons name="done" size={18} color="black" />
					</View>
				</TouchableWithoutFeedback>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({});
