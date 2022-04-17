import React from "react";
import{createDrawerNavigator} from "/@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer= StackNavigator();
const StackNavigator=()=>{
    return(
<StackNavigator
initialRouteName="Home"
screenOption={
{
headerShown:false
}
}

>
<StackNavigator name="Home" component={TabNavigator}/>
<StackNavigator name="Post" component={CreatePostScreen}/>

</StackNavigator>
    )
}
export default DrawerNavigator