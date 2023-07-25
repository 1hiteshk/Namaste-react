import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            state.items.map((item) => {
                if(item.card.info.id === action.payload.card.info.id){
                    const updatedItems = state.items.filter(
                        (itm) => itm.card.info.id !== item.card.info.id
                    );

                    state.items = updatedItems;
                    
                }
            })
        },
        clearCart: (state) => {
            //  state.items = []  // this meana w'r just changing the state, not mutating the state, adding another ref. to it
            state.items.length = 0; // state = [] mutating the state
        },

    },
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;