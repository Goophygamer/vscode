import{createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import logService from './logService'
const initialState= {
    logs:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}
//create logs
export const createLog = createAsyncThunk('logs/create',async(logData,thunkAPI)=>{
    try {
        //take token if necessary
        return await logService.createLog(logData)
    } catch (error) {
        const message = (error.response && error.data && error.response.data.message) || 
        error.message||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
//get logs
export const getLogs = createAsyncThunk('logs/create/getAll',async(_,thunkAPI)=>{
    try {
        return await logService.getLogs()
        
    } catch (error) {
        const message = (error.response && error.data && error.response.data.message) || 
        error.message||
        error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

//delete logs 
export const deleteLogs = createAsyncThunk('logs/delete',async(id,thunkAPI)=>{
    try {
        return await logService.deleteLogs(id)
        
    } catch (error) {
        const message = (error.response && error.data && error.response.data.message) || 
        error.message||
        error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

export const logSlice = createSlice({
    name:'log',
    initialState,
    reducers:{
        reset:(state)=>initialState,
    },
    extraReducers:(builder)=> {
        builder
         .addCase(createLog.pending,(state)=>{
            state.isLoading=true
         })
         .addCase(createLog.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.logs.push(action.payload)
         })
         .addCase(createLog.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=(action.payload)
         })
         .addCase(getLogs.pending,(state)=>{
            state.isLoading=true
         })
         .addCase(getLogs.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.logs = (action.payload)
         })
         .addCase(getLogs.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=(action.payload)
         })
         .addCase(deleteLogs.pending,(state)=>{
            state.isLoading=true
         })
         .addCase(deleteLogs.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.logs = state.logs.filter((log)=>log._id !== action.payload.id)
         })
         .addCase(deleteLogs.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=(action.payload)
         })
    },
})
export const {reset}= logSlice.actions
export default logSlice.reducer