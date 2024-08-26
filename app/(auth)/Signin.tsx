import { Image, ScrollView, Text, View } from "react-native";
import InputField from "@/components/InputField";
import { useState } from "react";
import { icons, images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const Signin = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const onSigninPress = async () => {};

	return (
		<ScrollView className="flex-1 bg-white">
			<View className="flex-1 bg-white">
				<View className="relative w-full h-[250px]">
					<Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
					<Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
						Welcome 👋🏻
					</Text>
				</View>
				<View className="p-5">
					<InputField
						label="Email"
						placeholder="Enter email"
						icon={icons.email}
						textContentType="emailAddress"
						value={form.email}
						onChangeText={(value) => setForm({ ...form, email: value })}
					/>
					<InputField
						label="Password"
						placeholder="Enter password"
						icon={icons.lock}
						secureTextEntry={true}
						textContentType="password"
						value={form.password}
						onChangeText={(value) => setForm({ ...form, password: value })}
					/>
					<CustomButton
						title="Sign In"
						className="mt-6"
						onPress={onSigninPress}
					/>

					{/* oAuth */}
					<OAuth />

					<Link
						href={"/Signup"}
						className="text-lg text-center text-general-200 mt-10"
					>
						<Text>Don't have an account? </Text>
						<Text className="text-primary-500">Sign Up</Text>
					</Link>
				</View>
				{/* Verfication Modal */}
			</View>
		</ScrollView>
	);
};

export default Signin;
