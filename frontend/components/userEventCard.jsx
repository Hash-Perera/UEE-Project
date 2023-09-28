import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const UserEventCard = ({item,handleCardPress}) => {
 
  return (
    <TouchableOpacity onPress = {()=> handleCardPress()}>
        <View >
        <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
        <Image source={require('../assets/images/sampleEvent.jpeg')} resizeMode ='contain' />
      </View>
        <View style={styles.detailsContainer}> 
            <Text style={styles.tittle}>Event Name</Text>
            <Text>Event Date : 23/04/2024</Text>
            <Text>Event Location : Kurunagala</Text>
            <Text>Time : 19 : 00</Text>
            </View>
        </View>  
    </View>
    </TouchableOpacity>
  )
}

export default UserEventCard;

const styles = StyleSheet.create({
    cardContainer : {
        marginTop : 10,
        flexDirection : 'row',
        backgroundColor : '#fff',
        borderBottomColor : '#040D12',
    },
    imageContainer:{
        height : 120,
        width : 120,
        borderRadius : 10,
        overflow : 'hidden',
        margin : 10,
    },
    detailsContainer : {
        flex : 1,
        margin : 10,
        gap : 10,
    },
    tittle : {
        fontSize : 20,
        fontWeight : 'bold',
    }
})