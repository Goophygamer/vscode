import { useState } from "react"
import{useDispatch, useSelector} from 'react-redux'
import {createLog,getLogs} from '../features/logSlice'

import LogItem from './LogItem'
function LogsForm(){
    const[text,setText] = useState('')
    const dispatch = useDispatch()
    const onSubmit=e=>{
        e.preventDefault()
        dispatch(createLog({text}))
        setText('')
    } 
   
   
    const {logs} = useSelector((state)=>state.logs)
    dispatch(getLogs)
   
   
   return <section className="form">
        <form onSubmit={onSubmit}>
         <div className="form-group">
            <label htmlFor="text">Log book </label>
            <input type="text" name='text' id = 'text' value={text} onChange={(e)=>setText(e.target.value)}/>
         </div>
         <div className="form-group">
            <button className="btn btn-block" type='submit'> Add Log 
            </button>
         </div>
        <section className="content">
           {logs.length > 0 ? (
                <div className="logs">
                    {logs.map((logs)=>(
                        <LogItem key = {logs._id} logs={logs}/>
                    ))}
                </div>
           ):(<h3> You have no logs </h3>)}
        </section>
        </form>
    </section>
   
}

export default LogsForm