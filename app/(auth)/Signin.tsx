import { Image, ScrollView, Text, View, Alert } from "react-native";
import InputField from "@/components/InputField";
import { useState } from "react";
import { icons, images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Link, useRouter } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignIn } from "@clerk/clerk-expo";
import { useCallback } from "react";

const Signin = () => {
	const router = useRouter();
	const { isLoaded, signIn, setActive } = useSignIn();

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const onSignInPress = useCallback(async () => {
		if (!isLoaded) return;

		try {
			const signInAttempt = await signIn.create({
				identifier: form.email,
				password: form.password,
			});

			if (signInAttempt.status === "complete") {
				await setActive({ session: signInAttempt.createdSessionId });
				router.replace("/(root)/(tabs)/Home");
			} else {
				// See https://clerk.com/docs/custom-flows/error-handling for more info on error handling
				console.log(JSON.stringify(signInAttempt, null, 2));
				Alert.alert("Error", "Log in failed. Please try again.");
			}
		} catch (err: any) {
			console.log(JSON.stringify(err, null, 2));
			Alert.alert("Error", err.errors[0].longMessage);
		}
	}, [isLoaded, form]);

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
						onPress={onSignInPress}
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
