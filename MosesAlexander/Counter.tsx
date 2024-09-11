import React from "react";
import { Button, View, Text } from "react-native";

interface ICounter {
    handleIncrement: () => void;
    handleDecrement: () => void;
    value: number;
}



const Counter = ({
    handleDecrement, 
    handleIncrement,
    value,
}: ICounter) => {
    return(
        <View>
            <Text> {value}</Text>
            <Button title = "+" onPress={handleIncrement}/>
            <Button title = "-" onPress={handleDecrement}/>
        </View>
    );
};


export default Counter;