import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    TextInput,

} from 'react-native';

import { doc, setDoc } from "firebase/firestore";
import database from '../../config/firebaseConfig';

import styles from "./styles"

export default function Details({ navigation, route }) {
    const [descriptionEdit, setDescription] = useState(route.params.description)
    const idTask = route.params.id

    async function editTask() {
        await setDoc(doc(database, "Tasks", idTask), {
            description: descriptionEdit,
            status: true
        })
        navigation.navigate("Task")
    }

    return (
        < SafeAreaView style={styles.container} >
            <Text style={styles.label}>Description</Text>

            <TextInput
                style={styles.inputText}
                placeholder="Ex: Study Javascript"
                onChangeText={setDescription}
                value={descriptionEdit}
            />

            <View style={styles.containerButton} >
                <TouchableOpacity
                    style={styles.buttonNewTask}
                    onPress={() => { editTask() }}
                >
                    <Text style={styles.iconButton}>Edit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
