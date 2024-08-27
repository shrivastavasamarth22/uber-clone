import { icons } from "@/constants";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";

const TabIcon = () => (
	<View>
		<View>
			<Image />
		</View>
	</View>
);
const Layout = () => (
	<Tabs
		initialRouteName="index"
		screenOptions={{
			tabBarActiveTintColor: "white",
		}}
	>
		<Tabs.Screen
			name="Home"
			options={{
				title: "Home",
				headerShown: false,
				tabBarIcon: ({ focused }) => (
					<TabIcon focused={focused} source={icons.home} />
				),
			}}
		/>
		<Tabs.Screen
			name="Rides"
			options={{
				title: "Rides",
				headerShown: false,
				tabBarIcon: ({ focused }) => (
					<TabIcon focused={focused} source={icons.list} />
				),
			}}
		/>
		<Tabs.Screen
			name="Chat"
			options={{
				title: "Chat",
				headerShown: false,
				tabBarIcon: ({ focused }) => (
					<TabIcon focused={focused} source={icons.chat} />
				),
			}}
		/>
		<Tabs.Screen
			name="Profile"
			options={{
				title: "Profile",
				headerShown: false,
				tabBarIcon: ({ focused }) => (
					<TabIcon focused={focused} source={icons.profile} />
				),
			}}
		/>
	</Tabs>
);

export default Layout;
