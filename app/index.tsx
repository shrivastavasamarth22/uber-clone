import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Page = () => {
	const { isSignedIn } = useAuth();

	if (isSignedIn) return <Redirect href="/(root)/(tabs)/Home" />;

	return <Redirect href="/(auth)/Welcome" />;
};

export default Page;
