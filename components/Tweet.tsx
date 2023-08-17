import { StyleSheet, Image, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import IconButton from "./IconButton";
// @ts-ignore
import { TweetType } from "../types";

type TweetProps = {
  tweet: TweetType;
};

export default function Tweet({ tweet }: TweetProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: tweet.user.image }} />

      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name} </Text>
        <Text style={styles.username}>{tweet.user.username}·2h</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          color="gray"
          style={{ marginLeft: "auto" }}
        />

        <Text style={styles.content}>{tweet.content}</Text>

        {tweet.image && (
          <Image style={styles.image} source={{ uri: tweet.image }} />
        )}
        <View style={styles.footer}>
          <IconButton icon="comment" text={tweet.numberOfComments} />
          <IconButton icon="retweet" text={tweet.numberOfRetweets} />
          <IconButton icon="heart" text={tweet.numberOfLikes} />
          <IconButton icon="chart" text={tweet.impressions} />
          <IconButton icon="share-apple" />
        </View>
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
  avatar: {
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
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },
  username: {
    color: "gray",
    marginLeft: 5,
  },
  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
});
