import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const MainComponent = () => {
    let Name = "Jack";
    const [age, setAge] = useState(55);

    const Data = () => {
        if (age) {
            setAge("")
        }
        else {
            setAge("55")
        }
        console.log("OMG File");

    };

    return (
        <View style={{ backgroundColor: "rgb(214 214 214);" }}>
            <Text> My Name Is {Name}</Text>
            <Button title="BTN" onPress={Data}></Button>
            <Text > My Age Is  <span style={{ color: 'white', background: 'red', fontSize: 33, }} >{age ? age : ""}</span></Text>
        </View>
    );
};

export default MainComponent;
