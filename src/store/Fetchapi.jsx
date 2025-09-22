import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
export const fetchapi = createAsyncThunk("posts/fetchapi", async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  return await response.json();
});
const Userslice=createSlice({
    name:'posts',
    initialState:{
        items:[],
        status:"null",
        error:null
    },
    reducers:{},
     extraReducers: (builder) => {
    builder
      .addCase(fetchapi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchapi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchapi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    }
})
export default Userslice.reducer;
