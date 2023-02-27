import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { depositMoney } from './state/action-creators'
import { actionCreators } from './state/index'

const Shop = () => {
const dispatch = useDispatch()
const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);
const balance = useSelector(state=>state.amount)
  return (
    <div>
        <h3>Deposit / Withdraw Money</h3>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Update Balance   
     use this method same work but bindactioncreators is easy 
      onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
  
   <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
   Update Balance ({balance})
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
     
    </div>
  )
}

export default Shop
