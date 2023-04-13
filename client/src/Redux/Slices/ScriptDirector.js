import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    ScriptStatus:"",
    ScriptSucess:"",
    ScriptError:"",
    ScriptList:[],
    ScriptListError:"",
}

export const DirectorScript = createAsyncThunk(
    "Dscript,DirectorScript",
    async (values,{rejectWithValue})=>{
        try {
            let Data = await axios.get(`http://localhost:5000/api/Dscript`)

            return Data.data

        } catch (error) {
             console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
)




const ScripDirectortSlice =createSlice({
    name:"Dscript",
    initialState,
    reducers:{
        removeStatus(state,action){
            return{
                ...state,
                ScriptStatus:"",
                ScriptSucess:"",
            }
        },
        removeScriptlistWriter(state,action){
            return{
                ...state,
                ScriptList:[],
                ScriptListError:"",
                ScriptError:"",
                ScriptStatus:"",
                ScriptSucess:"",
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(DirectorScript.pending,(state,action)=>{
            return {...state,ScriptStatus:"pending"}
        });
        builder.addCase(DirectorScript.fulfilled,(state,action)=>{
                
            const Script = action.payload; 

            return{
                ...state,
                ScriptStatus:"sucess",
                ScriptList:Script,
            }
    });
    builder.addCase(DirectorScript.rejected,(state,action)=>{
        return{
            ...state,
            ScriptListError:action.payload,
        }
    });
    }
})


export default ScripDirectortSlice.reducer;