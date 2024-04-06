//the bindActionCreators from redux and import action creators, the action creators perform differnt function like, with draw money, deposit money, we can do without action creators and also do without action creators. Now we do "bindActionCreators"   
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

//It will bind the different state. we can also do without bind action creators
import { bindActionCreators } from 'redux';

//This is the action creator which call diffeent functions that is why export from the outer file  
import { actionCreators } from "./state/index"

const Shop = () => {

    //we use useDipatch hook to dispatch the action tell what to do
    const dispatch = useDispatch();

    //we destructure the use the function
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)

    //To show the balace in between
    const balance = useSelector(state => state.balance)
    return (
        <div>
            <h2>Buy Shose</h2>
            <button className='btn-primary mx-2' onClick={() => { withdrawMoney(100) }}>-</button>
            Add to card({balance})
            <button className='btn-primary mx-2' onClick={() => { depositMoney(100) }}>+</button>
        </div>
    )
}

export default Shop
