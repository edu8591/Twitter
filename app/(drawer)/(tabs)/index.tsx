import { FlatList, StyleSheet, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

import Tweet from "../../../components/Tweet";
import tweets from "../../../assets/data/tweets";

export default function TabOneScreen() {
  const renderItem = ({ item }: { item: object }) => {
    return <Tweet tweet={item} />;
  };

  const keyExtractor = (item: { id: string }) => item.id;

  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />

      <Link href={"/tweet/new"} asChild>
        <Pressable
          style={styles.floatingButton}
          onPress={() => console.log("new tweet")}
        >
          <Entypo name="plus" size={24} color="white" />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
  floatingButton: {
    backgroundColor: "#1c9bf0",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 15,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRTadius: 3.84,
    elevation: 5,
  },
});
