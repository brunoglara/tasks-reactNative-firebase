import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons'

import {
    collection,
    onSnapshot,
    query,
    doc,
    deleteDoc
} from "firebase/firestore";

import database from '../../config/firebaseConfig';

import styles from "./styles"




export default function Task({ navigation }) {
    const [task, SetTask] = useState([])

    async function getData() {
        const q = query(collection(database, "Tasks"))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const list = []
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            });
            SetTask(list)
        })
    }

    async function deleteTask(id) {
        await deleteDoc(doc(database, "Tasks", id))
    }

    useEffect(() => {
        getData()

    }, [])

    return (
        <View style={styles.container}>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.Tasks}>
                            <TouchableOpacity
                                style={styles.deleteTask}
                                activeOpacity={0.6}
                                onPress={() => {
                                    deleteTask(item.id)
                                }}
                            >
                                <FontAwesome
                                    name='trash'
                                    size={23}
                                    color={'#f92e6a'}
                                />
                            </TouchableOpacity>

                            <Text
                                style={styles.descriptionTask}
                                onPress={() => {
                                    navigation.navigate("Details", {
                                        id: item.id,
                                        description: item.description
                                    })
                                }}
                            >
                                {item.description}
                            </Text>
                        </View>
                    )
                }}
            />

            <TouchableOpacity
                style={styles.buttonNewTask}
                activeOpacity={0.6}
                onPress={() => navigation.navigate("NewTask")}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
