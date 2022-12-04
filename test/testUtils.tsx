import * as React from 'react';
import { render } from '@testing-library/react-native';
import store, { persistor } from '../store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export function renderWithRedux(component) {
    const queries = render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {component}
            </PersistGate>
      </Provider> 
    );
    return { ...queries, store };
}