import { Form } from "native-base";
import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

import { Login } from "../Redusres/LoginScreenReduser";
import { SignUp } from "../Redusres/SignupReduser";

const rootReducer = combineReducers({
	Login: Login,
	SignUp: SignUp,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;
