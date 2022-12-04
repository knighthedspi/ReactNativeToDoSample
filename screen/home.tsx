import React from "react";
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { authenticate } from '../store/authenticate';
import ToDoScreen from './toDo';

const HomeScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { authenticateResult } = useSelector((state: RootState) => state.authenticate);
    if (authenticateResult) {
        const { success } = authenticateResult;
        if (success) {
            return (
                <ToDoScreen/>
            );
        }
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>
                    Failed to authenticate
                </Text>
            </SafeAreaView>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Authenticate to proceed
            </Text>
            <Button
                title="Authenticate"
                onPress={() => dispatch(authenticate())}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 10,
        paddingBottom: 10,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        alignItems: 'center',
        fontWeight: 'bold'
    },
});
