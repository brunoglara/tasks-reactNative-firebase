import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    label: {
        width: '90%',
        marginTop: 20,
        fontSize: 16,
        color: '#f92e6a',
        fontWeight: 'bold',
        marginLeft: 20,
    },
    inputText: {
        width: '90%',
        marginTop: 5,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#f92e6a',
        marginHorizontal: 20
    },
    buttonNewTask: {
        width: 100,
        height: 50,
        backgroundColor: '#f92e6a',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    containerButton: {
        alignItems: 'center',
        marginTop: 20,
    }
});

export default styles;