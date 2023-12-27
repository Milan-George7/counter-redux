import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/countSlice'


function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counterReducer.count)
  return (
    <div style={{width:'500px'}} className='border rounded p-5 text-center'>
        <h1 style={{fontSize:'100px'}}>{count}</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-5">
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
        </div>
    </div>
  )
}

export default Counter