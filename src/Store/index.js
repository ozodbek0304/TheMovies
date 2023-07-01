import { createSlice} from "@reduxjs/toolkit";

export const cardSilce= createSlice({
    name:"card",
    initialState:JSON.parse(localStorage.getItem('card')) || [],
    reducers:{  
         addItem:(state, action)=>{
          let item=state.find((item)=>item.id===action.payload.id);
          if (item) item.count++;
          else state.push({...action.payload, count:0, prcie:100})
         localStorage.setItem('card', JSON.stringify(state))
         },   
         
         removeItem:(state, action)=>{
         let currentCard = JSON.parse(localStorage.getItem('card'))
         currentCard = currentCard.filter((item) => item.id !== action.payload) 
         localStorage.setItem('card', JSON.stringify(currentCard));
          
       return state.filter((item) => item.id !== action.payload) 
         },

         plusItem:(state, action)=>{
          return state.map((item) => item.id === action.payload ? {...item, count: item.count+1}:item) 

         },

         minusItem:(state, action)=>{
          return state.map((item) => item.id === action.payload ? {...item, count: item.count-1}:item) 
         }
    }

})

export const {addItem, removeItem, plusItem, minusItem}=cardSilce.actions;
export default cardSilce.reducer