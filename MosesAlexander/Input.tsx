import React from 'react';
import { StyleSheet, Text, View, TextInput, TextInputProps, ViewStyle } from 'react-native';

interface InputProps extends TextInputProps {
    label: string;
    containerStyle?: ViewStyle;
}

const Input: React.FunctionComponent<InputProps> = ({ label, containerStyle, ...textInputProps }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text>{label}</Text>
            <TextInput
                style={styles.input}
                {...textInputProps}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },
});

export default Input;