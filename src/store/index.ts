import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialUserState = {
  display_create: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUserState,
  reducers: {
    toggleCreate(state) {
      state.display_create = !state.display_create;
    }
  }
});

const store = configureStore({
  reducer: { ui: uiSlice.reducer }
});

export const uiActions = uiSlice.actions;

export default store; 

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch