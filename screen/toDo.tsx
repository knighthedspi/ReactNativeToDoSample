import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { add, update, remove, updateOrder } from '../store/todo';
import ToDoList from '../component/toDoList';

const ToDoScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [id, setId] = useState('');
    const { toDoList } = useSelector((state: RootState) => state.todo);
    const [text, setText] = useState('');
    const isAdded = id === '';

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                TODO:
            </Text>
            <ToDoList
                data={toDoList}
                onDragEnd={(data, f, t) => dispatch(updateOrder(data))}
                onItemSelected={(item) => {
                    setId(item.id);
                    setText(item.task);
                }}
                onItemRemoved={(id) => dispatch(remove(id))}
            />
            <SafeAreaView style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder="Enter here"
                />
                <Button
                    title={isAdded ? 'Add' : 'Update'}
                    onPress={() => {
                        isAdded ? dispatch(add(text)) : dispatch(update({ id: id, task: text }));
                        setText('');
                        setId('');
                    }}
                />
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default ToDoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ECECEC',
        paddingBottom: 10
    },
    title: {
        marginLeft: 10,
        fontSize: 20,
        color: '#063D97',
        fontWeight: 'bold'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        borderRadius: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: 'lightgrey'
    }
});
