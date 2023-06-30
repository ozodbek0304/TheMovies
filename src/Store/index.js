import { createSlice} from "@reduxjs/toolkit";

export const cardSilce= createSlice({
    name:"card",
    initialState:JSON.parse(localStorage.getItem('card')) || [],
    reducers:{
         addItem:(state, action)=>{
          let item=state.find((item)=>item.id===action.payload.id);
          if (item) item.vote_count++;
          else state.push(action.payload)
         localStorage.setItem('card', JSON.stringify(state))
         },   

         removeItem:(state, action)=>{
       return state.filter((item) => item.id !== action.payload) 
         },

         plusItem:(state, action)=>{
       return state.map((item) => item.id === action.payload ? {...item, vote_count: item.vote_count+1}:item) 
          
         },

         minusItem:(state, action)=>{
          return state.map((item) => item.id === action.payload ? {...item, vote_count: item.vote_count-1}:item) 
         }
    }

})

export const {addItem, removeItem, plusItem, minusItem}=cardSilce.actions;
export default cardSilce.reducer