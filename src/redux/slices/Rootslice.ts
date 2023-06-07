import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name:'root',
    initialState:{
        name: "Name",
       price:"Price",
        year:"Year",
       model:"Model",
       description:"Description",
       car_quality:"Car quality "



    },
    reducers:{
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseCarQuality: (state, action) => { state.car_quality = action.payload},




    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, chooseModel, chooseDescription, chooseYear, chooseCarQuality} = rootSlice.actions