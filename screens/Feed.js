import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";

export default class FeedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
        <View style={styles.appIcon}>
        <Image
        source={require("../assets/logo.png")}
        style={styles.iconImage}
        >
        </Image>
        </View>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}>Spectagram</Text>
        </View>
        </View>
        <View style={styles.cardContainer}
        >
        <FlatList 
        keyExtractor={this.keyExtractor}
        data={post}
        renderItem={this.renderItem}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0E6F0"
  },
  text: {
    color: "#4C5D70",
    fontSize: 30
  }
});
