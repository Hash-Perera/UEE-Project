import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    Button,
    FlatList
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from 'expo-image-picker';

const { width, height } = Dimensions.get("window");

const EventForm = () => {
    const [eventName, setEventName] = useState("");
    const [eventType, setEventType] = useState("Concert");
    const [location, setLocation] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [expectedCrowd, setExpectedCrowd] = useState("");
    const [expectedBudget, setExpectedBudget] = useState("");
    const [ticketcount, setticketcount] = useState("");
    const [eventdescription, seteventdescription] = useState("");

    const [images, setImages] = useState([]);
    const [image, setImage] = useState(null);


    const handleSubmit = () => {
        console.log("Event Name:", eventName);
        console.log("Event Type:", eventType);
        console.log("Location:", location);
        console.log("Time:", time);
        console.log("Date:", date);
        console.log("Expected Crowd:", expectedCrowd);
        console.log("Expected Budget:", expectedBudget);
        console.log("Images:", images);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const newImages = [...images, result.uri];
            setImages(newImages);
            setImage(null);
        } else {
            setImage(null);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.formtitlecontainer}>
                    <Text style={styles.formtitle}>Event Form</Text>
                </View>

                <View style={styles.formstyle}>
                    <View style={styles.formstyleinner}>
                        <Text style={styles.label}>Event Name:</Text>
                        <TextInput
                            style={styles.input}
                            value={eventName}
                            placeholder="enter event name"
                            onChangeText={(text) => setEventName(text)}
                        />

                        <Text style={styles.label}>Event Type:</Text>
                        <Picker
                            selectedValue={eventType}
                            onValueChange={(itemValue, itemIndex) => setEventType(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Concert" value="Concert" />
                            <Picker.Item label="Conference" value="Conference" />
                            <Picker.Item label="Exhibition" value="Exhibition" />
                            <Picker.Item label="Other" value="Other" />
                        </Picker>

                        <View>
                            <Text style={styles.label}>Images:</Text>
                            <TouchableOpacity style={{ width: width * 0.5, marginBottom: 10 }} onPress={pickImage}>
                                <Text>ADD IMAGE</Text>
                            </TouchableOpacity>
                            <View style={styles.selectedImageContainer}>
                                {images.map((uri, index) => (
                                    <Image key={index} source={{ uri }} style={styles.selectedImage} />
                                ))}
                            </View>

                        </View>

                        <Text style={styles.label}>Location:</Text>
                        <TextInput
                            style={styles.input}
                            value={location}
                            placeholder="enter event location"
                            onChangeText={(text) => setLocation(text)}
                        />

                        <Text style={styles.label}>Time:</Text>
                        <TextInput
                            style={styles.input}
                            value={time}
                            placeholder="enter event time"
                            onChangeText={(text) => setTime(text)}
                        />

                        <Text style={styles.label}>Date:</Text>
                        <TextInput
                            style={styles.input}
                            value={date}
                            placeholder="enter event date"
                            onChangeText={(text) => setDate(text)}
                        />

                        <Text style={styles.label}>Expected Crowd:</Text>
                        <TextInput
                            style={styles.input}
                            value={expectedCrowd}
                            placeholder="enter expected crowd"
                            onChangeText={(text) => setExpectedCrowd(text)}
                            keyboardType="numeric"
                        />

                        <Text style={styles.label}>Expected Budget:</Text>
                        <TextInput
                            style={styles.input}
                            value={expectedBudget}
                            placeholder="enter expected budget"
                            onChangeText={(text) => setExpectedBudget(text)}
                            keyboardType="numeric"
                        />
                        <Text style={styles.label}>tickets count:</Text>
                        <TextInput
                            style={styles.input}
                            value={ticketcount}
                            placeholder="enter the ticket count"
                            onChangeText={(text) => setticketcount(text)}
                            keyboardType="numeric"
                        />
                        <Text style={styles.label}>Description:</Text>
                        <TextInput
                            style={styles.eventdescription}
                            value={eventdescription}
                            placeholder="enter event description"
                            onChangeText={(text) => seteventdescription(text)}
                            multiline={true}
                           
                           
                        />

                        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: "#16213E",
        borderRadius: width * 0.08,
    },
    label: {
        fontSize: 15,
        marginBottom: 5,
        color: "grey",
        fontWeight: "bold",
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    eventdescription:{
        height: 100,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 15,
       
        borderRadius: 10,
        backgroundColor: "#fff",

    },
    picker: {
        height: 40,
        marginBottom: 15,
        backgroundColor: "#fff",
        borderRadius: width * 0.5,
    },
    submitButton: {
        backgroundColor: "#16213E",
        marginTop: height * 0.02,
        padding: 15,
        borderRadius: width * 0.5,
        alignItems: "center",
        width: width * 0.5,
        marginLeft: width * 0.2,
    },
    submitButtonText: {
        color: "#fff",
        fontSize: 18,
    },
    formtitle: {
        fontFamily: "DMMedium",
        fontWeight: "bold",
        fontSize: 26,
        letterSpacing: 3,
        color: "white",
    },
    formtitlecontainer: {
        alignContent: "center",
        alignItems: "center",
        marginTop: height * 0.10,
        marginBottom: height * 0.1,
    },
    formstyle: {
        backgroundColor: "#ffffff",
        borderRadius: width * 0.1,
        width: "100%",
    },
    formstyleinner: {
        marginTop: height * 0.05,
        marginLeft: width * 0.02,
        marginRight: width * 0.02,
        marginBottom: height * 0.05,
    },
    selectedImageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15,
        marginTop: 10
    },
    selectedImage: {
        width: 100,
        height: 100,
        marginRight: 10,
        marginBottom: 10,
    },
});

export default EventForm;
