import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name:'root',
    initialState:{
        name: "Name",
       price:"Price",
        aged:"Aged",
        make:"Make",
       



    },
    reducers:{
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseAged: (state, action) => { state.aged = action.payload},
        chooseMake: (state, action) => { state.make = action.payload},
        




    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, chooseMake, chooseAged, } = rootSlice.actions