import { Stack } from "expo-router";

const Layout = () => {
	return (
		<Stack>
			<Stack.Screen name="Welcome" options={{ headerShown: false }} />
			<Stack.Screen name="Signup" options={{ headerShown: false }} />
			<Stack.Screen name="Signin" options={{ headerShown: false }} />
		</Stack>
	);
};

export default Layout;
