// We bring all reducer here
//In reducer folder of "index.js" we combine all reducer 

//1-First we import reducer from reducx
import { combineReducers } from "redux";
//2-We also import amount reducer from "amountReducer.js"
import amountReducer from "./amountReducer";

//3-Now we export default all reducers 
const reducers = combineReducers({
    //Inside this we have all reducers now we have reducer name "amount" and then we create a redux store
    amount: amountReducer
})
export default reducers;