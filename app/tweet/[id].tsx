import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";

type localSearchParams = {
  id: string;
  element: object;
};
export default function TweetScreen() {
  const { id } = useLocalSearchParams();

  const tweet = tweets.find((tweet) => tweet.id === id);
  if (!tweet) {
    return <Text>Tweet {id} not found</Text>;
  }

  return <Tweet tweet={tweet} />;
}
