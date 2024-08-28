import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
	const { user } = useUser();

	return (
		<SafeAreaView>
			<SignedIn>
				<Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
			</SignedIn>
			<SignedOut>
				<Link href="/(auth)/Signin">
					<Text>Sign In</Text>
				</Link>
				<Link href="/(auth)/Signup">
					<Text>Sign Up</Text>
				</Link>
			</SignedOut>
		</SafeAreaView>
	);
}
