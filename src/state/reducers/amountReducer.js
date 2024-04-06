//After initiation amount reducer perform it's function it will change the money  
//We export default function name "reducer" it will take intial state by default it is zero other thing it will take is action. Either you want to add money or withdraw money. We may have more reducer which perform other funtion. After that we create a store from "action-creators" and "reducer" and we give the access the store to the whole application. We combine all the reducer and export as a single function. Reducer is a function which take state and function, and perform this function. If we have more than one reducer we combine all the reducer and export all of it. 
//we perform this by making a file "index.js" in reducers folder 

const reducer = (state = 0, action) => {
    //If action type is deposit then we change the state, amount is our state
    if (action.type === "deposit") {
        return state + action.payload 
    }
    else if (action.type === "withdraw") {
        return state - action.payload
    }
    //if nothing is do we just return the stae
    else if (action.type === "alert") {
        return state + action.payload
    }
    else {
        return state;
    }

}
export default reducer;