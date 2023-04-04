import { useDispatch } from "react-redux"
import { deleteLogs} from '../features/logSlice'

function LogItem({logs}) {
    const dispatch = useDispatch()
    return (
    <div className="log">
        <div> 
         { new Date(logs.createdAt).toLocaleString('en-US')
        }
        </div>
        <h2> {logs.text} </h2>
        <button onClick={()=> dispatch(deleteLogs(logs._id))} className="close"> X </button>
    </div>
    
  )
}

export default LogItem