import React from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import ToDoItem from './toDoItem';
import { ToDo } from '../store/todo';

const ToDoList: React.FC<{
    data: ToDo[],
    onDragEnd: (data: ToDo[], from: number, to: number) => void,
    onItemSelected: (item: ToDo) => void,
    onItemRemoved: (id: string) => void
}> = (({ data, onDragEnd, onItemSelected, onItemRemoved }) => {
    return (
        <DraggableFlatList
            keyExtractor={(item, index) => `${item.id}_${index}`}
            data={data}
            onDragEnd={({data, from, to}) => onDragEnd(data, from, to)}
            numColumns={1}
            renderItem={({ item, drag, isActive }) => (
                <TouchableHighlight
                    activeOpacity={0.5}
                    underlayColor={'transparent'}
                    onLongPress={drag}
                    disabled={isActive}
                    onPress={() => onItemSelected(item)}
                >
                    <ToDoItem
                        item={item}
                        onRemove={(id) => onItemRemoved(id)}
                    />
                </TouchableHighlight>
            )}
            renderPlaceholder={() => (
                <View style={{ flex: 1, backgroundColor: "transparent" }} />
            )}
        />
    );
});

export default ToDoList;

const styles = StyleSheet.create({
    loader: {
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    container: {
        flexDirection: 'row',
        marginVertical: 10
    },
    dataContainer: {
        flexDirection: 'row'
    }
});