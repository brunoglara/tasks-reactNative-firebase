import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons'

import { collection, getDocs } from "firebase/firestore";
import database from '../../config/firebaseConfig';

import styles from "./styles"


async function getData() {
    const querySnapshot = await getDocs(collection(database, "Tasks"));

    const list = []
    querySnapshot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id })
    });
    return list
}


export default function Task({ navigation }) {
    const [task, SetTask] = useState([])

    useEffect(() => {
        SetTask(getData())
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
            />

            <TouchableOpacity
                style={styles.buttonNewTask}
                activeOpacity={0.6}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
