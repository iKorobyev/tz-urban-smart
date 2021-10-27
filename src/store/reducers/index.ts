import {combineReducers} from "redux";
import {userReducer} from "./fetchData";

export const rootReducer = combineReducers({
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>