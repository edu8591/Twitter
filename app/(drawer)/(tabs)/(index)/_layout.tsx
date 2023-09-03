import { Stack } from "expo-router/stack";

export default function FeedLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="tweet/[id]"
        options={{ headerShown: true, title: "Tweet" }}
      />
    </Stack>
  );
}
