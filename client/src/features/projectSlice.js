import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    projectId:null
}
const projectSlice = createSlice({
    name:"currProject",
    initialState,
    reducers:{
      setProjectId:(state,action)=>{
        console.log(action)
        console.log(action)
        state.projectId = action.payload;
      }
    }
})

export const {setProjectId} = projectSlice.actions; 
export default projectSlice.reducer;   


