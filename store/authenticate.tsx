import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import * as LocalAuthentication from 'expo-local-authentication';

export const authenticate = createAsyncThunk('authenticateAsync', async () => {
    const authenticateResult = await LocalAuthentication.authenticateAsync();
    return authenticateResult as LocalAuthentication.LocalAuthenticationResult;
});

interface AuthenticateState {
    authenticateResult: LocalAuthentication.LocalAuthenticationResult
};

const initialState: AuthenticateState = {
    authenticateResult: undefined
};

const authenticateSlice = createSlice({
    name: 'authenticate',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authenticate.fulfilled, (state, action) => {
            state.authenticateResult = action.payload;
        });
        builder.addCase(authenticate.rejected, (state) => {
            state.authenticateResult = {
                success: false,
                error: 'User rejected to authenticate'
            };
        });
      }
})

export default authenticateSlice.reducer;