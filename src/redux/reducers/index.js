import {combineReducers} from "redux";
import {setHomeStateReducer} from "@/redux/reducers/setHomeState";
import {setScrollTopReducer} from "@/redux/reducers/setScrollTop";

export default combineReducers({
    homeState:setHomeStateReducer,
    scrollTop:setScrollTopReducer
});