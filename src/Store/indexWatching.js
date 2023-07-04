import { createSlice} from "@reduxjs/toolkit";

export const cardSilceWatching= createSlice({
    name:"watching",
    initialState:JSON.parse(localStorage.getItem('watching')) || [],
    reducers:{  
         addItemWatching:(state, action)=>{
          let item=state.find((item)=>item.id===action.payload.id);
          if (item) item.count++;
          else state.push({...action.payload, count:0})
         localStorage.setItem('watching', JSON.stringify(state))
         },   
         
         removeItemWatching:(state, action)=>{
         let currentCard = JSON.parse(localStorage.getItem('watching'))
         currentCard = currentCard.filter((item) => item.id !== action.payload) 
         localStorage.setItem('watching', JSON.stringify(currentCard));
          
       return state.filter((item) => item.id !== action.payload) 
         },

    }

})

export const {addItemWatching, removeItemWatching}=cardSilceWatching.actions;
export default cardSilceWatching.reducer