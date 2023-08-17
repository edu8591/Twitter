import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

export default function NewTweetScreen() {
  const [tweetContent, setTweetContent] = useState("");
  const router = useRouter();

  const onTweetPress = () => {
    setTweetContent("");
    router.back();
  };
  const handleTextChange = (text: string) => {
    setTweetContent(text);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href={"../"} style={{ fontSize: 18 }}>
            Cancel
          </Link>

          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: user.image }} style={styles.avatar} />
          <TextInput
            placeholder="Whats Happening?"
            multiline
            value={tweetContent}
            numberOfLines={5}
            style={{ flex: 1 }}
            onChangeText={setTweetContent}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1C9BF0",
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
