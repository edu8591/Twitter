import { StyleSheet, Image, Text, View } from "react-native";
import { TweetType } from "../types";

type TweetProps = {
  tweet: TweetType;
};

export default function Tweet({ tweet }: TweetProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: tweet.user.image }} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: "600",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
});
