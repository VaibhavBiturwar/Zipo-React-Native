import React, { useState } from "react";
import {
	Button,
	View,
	Text,
	StyleSheet,
	ImageBackground,
	I18nManager,
	StatusBar,
	TouchableOpacity,
	Modal,
	TouchableWithoutFeedback,
} from "react-native";
import { ChatScreenMap } from "../../../../Components/GlobleComponents/CustomMap";
import IosHeaderMargin from "../../../../Components/GlobleComponents/IosHeaderMargin";
import { ConstantField } from "../../../../Utils/ConstantField";
import { Dimen, Colors } from "../../../../Utility/DimenAndColor/DimenAndColor";
export default function ChatScreenCallModel(props) {
	const [nav, setNav] = useState(false);

	return (
		<Modal animationType="slide" transparent={true} visible={props.Call} style={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					marginTop: 129,
					justifyContent: "center",
				}}
			>
				{/* <ChatScreenMap /> */}
				<StatusBar />
				<IosHeaderMargin />
				<TouchableWithoutFeedback
					onPress={() => {
						props.Cancel();
					}}
				>
					<View style={{ flex: 1 }}></View>
				</TouchableWithoutFeedback>

				<View
					style={{
						backgroundColor: "#F4F2F2",
						height: 100,
						width: 250,
						//marginTop: 70,
						borderRadius: 15,
						overflow: "hidden",
						alignSelf: "center",
					}}
				>
					<View
						style={{
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Text style={{ fontWeight: "bold", color: Colors.Black }}>
							(966) 509- xxxxxx
						</Text>
					</View>
					<View style={{ borderBottomWidth: 0.4 }} />
					<View
						style={{
							flexDirection: ConstantField.IOS ? "row-reverse" : "row",
							flex: 1,
						}}
					>
						<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
							<TouchableOpacity
								onPress={() => {
									props.Cancel();
								}}
							>
								<Text
									style={{
										fontWeight: "bold",
										color: Colors.Black,
									}}
								>
									Cancel
								</Text>
							</TouchableOpacity>
						</View>
						<View style={{ borderLeftWidth: 0.4, height: "100%" }} />
						<TouchableOpacity
							style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
							onPress={() => {
								props.call();
							}}
						>
							<View>
								<Text
									style={{
										fontWeight: "bold",
										color: "green",
									}}
								>
									Call
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<TouchableWithoutFeedback
					onPress={() => {
						props.Cancel();
					}}
				>
					<View style={{ flex: 1 }}></View>
				</TouchableWithoutFeedback>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {},
});
