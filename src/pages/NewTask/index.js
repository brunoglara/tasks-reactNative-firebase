import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {
    collection,
    addDoc
} from "firebase/firestore";

import styles from "./styles"

import database from '../../config/firebaseConfig'


export default function NewTask({ navigation }) {

    const [description, setDescription] = useState(null)


    async function addTask() {
        await addDoc(collection(database, "Tasks"), {
            description: description,
            status: true
        })
        navigation.navigate("Task")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>Description</Text>

            <TextInput
                style={styles.inputText}
                placeholder="Ex: Study Javascript"
                onChangeText={setDescription}
                value={description}
            />

            <View style={styles.containerButton} >
                <TouchableOpacity
                    style={styles.buttonNewTask}
                    onPress={() => { addTask() }}
                >
                    <Text style={styles.iconButton}>Add</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}
