import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import jwtDecode from 'jwt-decode';
import axios from "axios";

const initialState ={
    token: localStorage.getItem("token"),
    name:"",
    email:"",
    _id:"",
    registerStatus:"",
    registerError:"",
}

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (values,{rejectWithValue})=>{
        try {
            const token =await axios.post(`http://localhost:5000/api/Sregister`,{
                Username: values.Username,
                Email: values.Email,
                Password: values.Password,
                ConfirmPassword:values.ConfirmPassword,
            });

            localStorage.setItem("token", token.data)

            return token.data

        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

export const registerDirector = createAsyncThunk(
    "auth/registerDirector",
    async (values,{rejectWithValue})=>{
        try {
            const token =await axios.post(`http://localhost:5000/api/Dregister`,{
                Username: values.Username,
                Email: values.Email,
                Password: values.Password,
                ConfirmPassword:values.ConfirmPassword,
            });

            localStorage.setItem("token", token.data)

            return token.data

        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

const AuthSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state,action)=>{
            return {...state,registerStatus:"pending"}
        });
        builder.addCase(registerUser.fulfilled,(state,action)=>{
            if(action.payload){
                
                const user = jwtDecode(action.payload)
                return{
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email:user.email,
                    _id: user._id,
                    registerStatus:"suceess"
                }
            }else return state
        });
        builder.addCase(registerUser.rejected,(state,action)=>{
            return{
                ...state,
                registerStatus:"rejected",
                registerError:action.payload,
            }
        });
        // director register
        builder.addCase(registerDirector.pending,(state,action)=>{
            return {...state,registerStatus:"pending"}
        });
        builder.addCase(registerDirector.fulfilled,(state,action)=>{
            if(action.payload){
                
                const user = jwtDecode(action.payload)
                return{
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email:user.email,
                    _id: user._id,
                    registerStatus:"suceess"
                }
            }else return state
        });
        builder.addCase(registerDirector.rejected,(state,action)=>{
            return{
                ...state,
                registerStatus:"rejected",
                registerError:action.payload,
            }
        });
    }
})

export default AuthSlice.reducer;