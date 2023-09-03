import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Pressable, useColorScheme, Image } from "react-native";
import Colors from "../../../constants/Colors";
import { useNavigation } from "expo-router";
import { useSegments } from "expo-router";
import { useEffect, useState } from "react";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function AvatarHeader() {
  const navigation = useNavigation();
  //@ts-ignore
  const handlePress = () => navigation.openDrawer();
  return (
    <Pressable onPress={handlePress}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
        }}
        style={{ width: 40, aspectRatio: 1, borderRadius: 40, marginLeft: 10 }}
      />
    </Pressable>
  );
}

export const unstable_setting = {
  initialRouteName: "index",
};

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const segment = useSegments() as string[];
  const [headerShown, setHeaderShown] = useState(true);

  useEffect(() => {
    segment.includes("tweet") ? setHeaderShown(false) : setHeaderShown(true);
  }, [segment]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerLeft: AvatarHeader,
        headerShown: headerShown,
      }}
    >
      <Tabs.Screen
        name="(index)"
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
