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
    setDoc,
    where
} from "firebase/firestore";

import database from '../../config/firebaseConfig';

import styles from "./styles"




export default function Task({ navigation }) {
    const [task, SetTask] = useState([])

    async function getData() {
        const q = query(collection(database, "Tasks"), where("status", "==", true))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const list = []
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            });
            SetTask(list.sort((a, b) => {
                if (a.description > b.description) {
                    return 1;
                }
                if (a.description < b.description) {
                    return -1;
                }
                // a must be equal to b
                return 0;

            }))
        })
    }

    async function deleteTask(id, description) {
        // await deleteDoc(doc(database, "Tasks", id))
        await setDoc(doc(database, "Tasks", id), {
            description: description,
            status: false
        })
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
                                    deleteTask(item.id, item.description)
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
