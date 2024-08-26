import { Image, ScrollView, Text, View } from "react-native";
import InputField from "@/components/InputField";
import { useState } from "react";
import { icons, images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const Signup = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
	});

	const onSignupPress = async () => {};

	return (
		<ScrollView className="flex-1 bg-white">
			<View className="flex-1 bg-white">
				<View className="relative w-full h-[250px]">
					<Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
					<Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
						Create Your Account
					</Text>
				</View>
				<View className="p-5">
					<InputField
						label="Name"
						placeholder="Enter name"
						icon={icons.person}
						value={form.name}
						onChangeText={(value) => setForm({ ...form, name: value })}
					/>
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
						title="Sign Up"
						className="mt-6"
						onPress={onSignupPress}
					/>

					{/* oAuth */}

					<Link
						href={"/Signin"}
						className="text-lg text-center text-general-200 mt-10"
					>
						<Text>Already have an account? </Text>
						<Text className="text-primary-500">Log In</Text>
					</Link>
				</View>
			</View>
		</ScrollView>
	);
};

export default Signup;
