
//Note:This is the store where all of state of the appliation present
import { applyMiddleware, createStore } from "redux";

//Redux thunk help to execute asynchronious function
import thunk from "redux-thunk";
import reducers from "./reducers";

// Here we create our store, create stoe take all the reducers and than take initial state, redux will help to execute asynchornious function, now we consider it as a middleware, we want whole application take access the store. 
// Note: create store take all reducers, Reducer are the all functions, and then take intial state that is empty, and then take a middleware 

export const store = createStore(reducers, {}, applyMiddleware(thunk));

//Now our redux state is ready now how to use this state, I want my whole app get access this store, we go to index.js main file and wrap our app in the provider. And import the provider and then our whole aap get the access of redux store.
 