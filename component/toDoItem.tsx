import React, { memo } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import { ToDo } from '../store/todo';

const ToDoItem: React.FC<{ item: ToDo, onRemove: (id: string) => void }> = (({ item, onRemove }) => {
    return (
        <View style={styles.container} key={item.id}>
            <View style={styles.left}>
                <View style={styles.circle} />
                <Text style={styles.title}>
                    {item.task}
                </Text>
            </View>
            <TouchableHighlight
                activeOpacity={0.5}
                underlayColor={'transparent'}
                onPress={() => onRemove(item.id)}>
                <Text 
                    style={styles.remove}
                    testID='remove'>
                    Remove
                </Text>
            </TouchableHighlight>
        </View>
    )
});

export default memo(ToDoItem);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 10,
        margin: 5,
        alignItems: 'center'
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#063D97'
    },
    title: {
        margin: 5,
        fontSize: 20,
        color: '#9C9C9C'
    },
    remove: {
        fontSize: 20,
        color: '#9C9C9C'
    }
});