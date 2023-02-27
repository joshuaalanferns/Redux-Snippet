import {createSlice} from '@reduxjs/toolkit';

const userListSlice = createSlice({
    name : 'userlist',
    initialState : {
        data : [],
       
    },
    reducers: {
        saveUserList : (state,action)=> {
            if (action.payload != null) {
                console.log("ggg "+JSON.stringify(action.payload.length))
                state.data = action.payload
               
            }
        },
       
    }
})

export const {saveUserList} = userListSlice.actions

export default userListSlice.reducer