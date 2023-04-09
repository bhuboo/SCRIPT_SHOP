import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice"; 
import ScriptSlice from '../Slices/ScriptSlice';
import UpdatepassSlice from '../Slices/UpdatepassSlice';
import ScripDirectortSlice from "../Slices/ScriptDirector";
const store = configureStore({
    reducer:{
        auth:AuthSlice,
        script:ScriptSlice,
        upass:UpdatepassSlice,
        dScript:ScripDirectortSlice,
    }

})

export default store;