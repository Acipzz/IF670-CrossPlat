import React, { useState, useEffect } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import userData from '../data.json';
import styles from '../App.styles';

const UserList = ({ navigation }) => {
    return (
        <ScrollView>
            {userData.map((users)=>{
                return (
                    <View style={styles.userList} key={users.name}>
                        <TouchableOpacity 
                            style={styles.card}
                            onPress={() =>
                                navigation.navigate("Profile", { userName: users.name})
                            }
                        >
                            <Image
                                source={{
                                    uri: users.photo_url,
                                }}
                                style={styles.avatar}
                            />
                            <View>
                                <Text style={ styles.boldText}>{users.name}</Text>
                                <Text>{users.email}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </ScrollView>
    );
};


export default UserList;