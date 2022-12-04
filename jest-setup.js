jest.mock('redux-persist', () => {
    const real = jest.requireActual('redux-persist');
    return {
        ...real,
        persistReducer: jest
            .fn()
            .mockImplementation((_, reducers) => reducers),
    };
});
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);