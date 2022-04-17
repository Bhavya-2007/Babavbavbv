import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default class CreatePostScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appIcon}>
        <Image
        source={require("../assets/logo.png")}
        style={styles.iconImage}
        >

        </Image>
        </View>
      </View>
      
    );
    
  }
  async addPost(){
    if(
      this.state.caption
    ){
    let postData={
      preview_image:this.state.previewImage,
      caption:this.state.caption,
      author: firebase.auth().currentUser.displayName,
      create_on:new Data(),
      author_uid:firebase.auth().currentUser.uid,
      profile_image:this.state.profile_image,
      likes:0
    };
    await firebase
    .database()
    .ref(
      "/posts/"+
      Math.random()
      .toString(36)
      .slice(2)
    )
    .set(postData)
    .then(function(snapshot){});
    this.props.setUpdateToTrue();
    this.props.navigation.navigate("Feed");
    }
    else{
    alert.alert(
    "Error",
    "All fields are required",
    [{text:"OK",onPress:()=>console.log("OK Pressed")}],
    {cancelabe:false}
    )
    }
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
