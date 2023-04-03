import{createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState= {
    logs:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}
export const logSlice = createSlice({
    name:'goal',
    initialState,
    reducers:{
        reset:(state)=>initialState
    }
})
export const {reset}= logSlice.actions
export default logSlice.reducer