import { Image, ScrollView, Text, View } from "react-native";
import InputField from "@/components/InputField";
import { useState } from "react";
import { icons, images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";

const Signup = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [verification, setVerification] = useState({
		state: "default",
		error: "",
		code: "",
	});

	const { isLoaded, signUp, setActive } = useSignUp();

	const onSignUpPress = async () => {
		if (!isLoaded) {
			return;
		}

		try {
			await signUp.create({
				emailAddress: form.email,
				password: form.password,
			});

			await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

			setVerification({
				...verification,
				state: "pending",
			});
		} catch (err: any) {
			console.error(JSON.stringify(err, null, 2));
		}
	};

	const onPressVerify = async () => {
		if (!isLoaded) return;

		try {
			const completeSignUp = await signUp.attemptEmailAddressVerification({
				code: verification.code,
			});

			if (completeSignUp.status === "complete") {
				// TODO: Create a database user
				await setActive({ session: completeSignUp.createdSessionId });
				setVerification({
					...verification,
					state: "success",
				});
			} else {
				setVerification({
					...verification,
					state: "failed",
					error: "Verification failed",
				});
			}
		} catch (err: any) {
			setVerification({
				...verification,
				state: "failed",
				error: err.errors[0].longMessage,
			});
		}
	};

	return (
		<ScrollView className="flex-1 bg-white">
			<View className="flex-1 bg-white">
				<View className="relative w-full h-[250px]">
					<Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
					<Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
						, Create Your Account
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
						onPress={onSignUpPress}
					/>

					{/* oAuth */}
					<OAuth />

					<Link
						href={"/Signin"}
						className="text-lg text-center text-general-200 mt-10"
					>
						<Text>Already have an account? </Text>
						<Text className="text-primary-500">Log In</Text>
					</Link>
				</View>
				{/* Verfication Modal */}
			</View>
		</ScrollView>
	);
};

export default Signup;
