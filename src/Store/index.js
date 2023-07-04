import { createSlice} from "@reduxjs/toolkit";

export const cardSilce= createSlice({
    name:"card",
    initialState:JSON.parse(localStorage.getItem('card')) || [],
    reducers:{  
         addItem:(state, action)=>{
          let item=state.find((item)=>item.id===action.payload.id);
          if (item) item.count++;
          else state.push({...action.payload, count:0})
         localStorage.setItem('card', JSON.stringify(state))
         },   
         
         removeItem:(state, action)=>{
         let currentCard = JSON.parse(localStorage.getItem('card'))
         currentCard = currentCard.filter((item) => item.id !== action.payload) 
         localStorage.setItem('card', JSON.stringify(currentCard));
          
       return state.filter((item) => item.id !== action.payload) 
         },

    }

})

export const {addItem, removeItem}=cardSilce.actions;
export default cardSilce.reducer