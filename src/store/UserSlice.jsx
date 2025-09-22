import { createSlice } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
const UserSlice =createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addUser(state,action){},
        removeUser(state,action){},
        deleteUser(state,action){}
    },
});
console.log(users.actions)
export default UserSlice.reducer;