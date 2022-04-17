import React from "react"
import{createBottomTabNavigator} from 
import Ionicons from "react-native-vector-icons/Ionicons"
import Feed from "../screens/Feed"
import CreatePost from "/screens/CreatePost"
const Tab= createBottomTabNavigator();

const BottomTabNavigator=()=>{
return(
<Tab.Navigator ScreenOptions={({route})=>({
tabBarIcon:({focused,color,size})=>{
let iconName;
if(route.name==Feed){
iconName=focused
?"book"
:"book-outline";
}else if(route.name="createPost"){
iconName=focused?'create':"create-outline";
}
 
},
})}
    tabBarOptions={{
        activeTintColor="tomato",
        inactiveTintColor="gray"

    }}
>
    <Tab.Screen name="Feed" component={Feed}/>
    <Tab.Screen name="CreatePost" component={CreatePost}/>
</Tab.Navigator>    
)
}
export default BottomTabNavigator