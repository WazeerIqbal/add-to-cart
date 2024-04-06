//we write a function that we are going to export
// It will increate a amount using state. Once the amount is added to the account it will return a function name "disptach". We return a function inside this a function is call. Deposit money return a function which contain a amoint also. Action creators just initiate a function the next work is perform by reducers. Reducer can be many 

import { type } from "@testing-library/user-event/dist/type"

export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }

}
export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }

}
export const notification = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "alert",
            payload: amount
        })
    }
}