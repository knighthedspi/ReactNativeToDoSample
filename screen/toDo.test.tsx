import * as React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';
import { renderWithRedux } from '../test/testUtils';
import ToDoScreen from './toDo';

describe('Add ToDo test', () => {
  test('adds a new TODO', async () => {
    const { store } = renderWithRedux(<ToDoScreen/>);

    const title = screen.getByText('TODO:');
    expect(title).toBeTruthy();
    const input = screen.getByPlaceholderText('Enter here');
    expect(input).toBeTruthy();

    const textToEnter = 'Test1';
    fireEvent.changeText(input, textToEnter);
    fireEvent.press(screen.getByText('Add'));

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
});