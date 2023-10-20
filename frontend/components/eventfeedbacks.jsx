import { React, useState } from "react";
import {
    FlatList,
    SafeAreaView,
    Text,
    Dimensions,
    View,
    StyleSheet

} from 'react-native';
import FeedCard from "./feedCard";

const { width, height } = Dimensions.get("window");

export default function EventFeedbacks() {
    const [feedbackData, setFeedbackData] = useState([
        {
            id: "1",
            eventName: "wiramaya",
            userName: "John Doe",
            date: "2021-05-01",
            feedback: "This is a very good event. I really enjoyed it.",
            userImage: require("../assets/images/user.png"),
            rating: "1",
        },
        {
            id: "2",
            userName: "Doe",
            eventName: "wiramaya",
            date: "2021-05-01",
            feedback: "This is a very good event. I really enjoyed it.",
            userImage: require("../assets/images/user.png"),
            rating: "2",
        },
        {
            id: "3",
            userName: "John Doe",
            eventName: "React Native",
            date: "2021-05-01",
            feedback: "This is a very good event. I really enjoyed it.",
            userImage: require("../assets/images/user.png"),
            rating: "3",
        },
        {
            id: "4",
            userName: "John Doe",
            eventName: "ExpoGo",
            date: "2021-05-01",
            feedback: "This is a very good event. I really enjoyed it.",
            userImage: require("../assets/images/user.png"),
            rating: "4",
        },
    ]);


   




    return (
       <SafeAreaView style={styles} >
            <FlatList
                data={feedbackData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <FeedCard item={item} />}
            />
        </SafeAreaView>






    )



}

const styles=StyleSheet.create({

container:{
    flex:1,
    alignContent:"center",
    alignItems:"center",
    
}











})