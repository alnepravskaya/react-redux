import { createSlice } from '@reduxjs/toolkit';

const uiSLice = createSlice({
  name: 'ui',
  initialState: { isCardVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.isCardVisible = !state.isCardVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      };
    }
  }
});

export const uiActions = uiSLice.actions;

export default uiSLice;
