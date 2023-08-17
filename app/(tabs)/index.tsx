import { FlatList, StyleSheet, View } from "react-native";

import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";

export default function TabOneScreen() {
  return (
    <FlatList
      data={tweets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Tweet tweet={item} />}
    />
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
