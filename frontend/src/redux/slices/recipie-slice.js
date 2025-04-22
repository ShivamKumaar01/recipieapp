import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipies=createAsyncThunk("fetching recipie",async()=>{
    const recipies=await fetch("http://localhost:8080/recipies")
    return recipies.json();
})
const initialState={
    isLoading:false,
    data:null,
    isError:false
}
export const getRecipieSlice=createSlice({
    name:"fetch recipie",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchRecipies.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchRecipies.fulfilled,(state,action)=>{
            state.isLoading=false;
        })
    }
})
export default getRecipieSlice.reducer;