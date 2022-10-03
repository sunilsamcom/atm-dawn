import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer from "@app/store/reducers/rootReducer";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from 'redux-thunk';

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [thunkMiddleware],
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
