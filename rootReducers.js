import { combineReducers } from "redux";
import { changeBackgroundColorReducer } from "./ChangeBackgroundColor/ChangeBackground.reducer";

const rootReducers = combineReducers({
    changeBackgroundColorReducer
});

export default rootReducers;