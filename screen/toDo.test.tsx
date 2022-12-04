import * as React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';
import { renderWithRedux } from '../test/testUtils';
import ToDoScreen from './toDo';

describe('Test ToDo screen', () => {
  test('adds a new TODO', async () => {
    const { store } = renderWithRedux(<ToDoScreen/>);

    const input = await screen.findByTestId("toDoInput");
    console.log(input.toJSON())
    expect(input).toBeTruthy();

    const textToEnter = 'Test1';
    fireEvent.changeText(input, textToEnter);
    fireEvent.press(screen.getByTestId('submit'));

    const { toDoList } = store.getState().todo;

    expect(toDoList.length).toEqual(1);
    expect(toDoList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          task: textToEnter
        }),
      ])
    );
  });

  test('update TODO', async () => {
    renderWithRedux(<ToDoScreen/>);

    const input = await screen.findByTestId("toDoInput");
    const textToEnter = 'Test1';
    fireEvent.changeText(input, textToEnter);
    fireEvent.press(screen.getByText('Add'));

    const updateTodo = 'Test1 Updated';
    const toDo = screen.findByText(textToEnter);
    fireEvent.press(toDo);
    fireEvent.changeText(input, updateTodo);

    const toDoUpdateList = await screen.findAllByText(/Updated/i);
    expect(toDoUpdateList.length).toEqual(1);
    expect(toDoUpdateList).toEqual(
        expect.arrayContaining(
            expect.objectContaining({
                task: updateTodo
            })
        )
    );
  });

  test('remove TODO', async () => {
    renderWithRedux(<ToDoScreen/>);

    const input = await screen.findByTestId("toDoInput");

    const toDo1 = 'Test1';
    fireEvent.changeText(input, toDo1);
    fireEvent.press(screen.getByText('Add'));

    const toDo2 = 'Test1';
    fireEvent.changeText(input, toDo2);
    fireEvent.press(screen.getByText('Add')); 

    fireEvent.press(screen.getByTestId('remove'));

    const toDoUpdateList = await screen.findAllByText(/Test/i);
    expect(toDoUpdateList.length).toEqual(1);
  });
});