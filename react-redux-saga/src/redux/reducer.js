import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";

// let data = [];

export const cartData = (data=[], action) => {
    console.warn("Reducer called", action)

    // if(action.type === ADD_TO_CART){
    //     //some logic
    //     return data;
    // }
    // else{
    //     return "no action called"
    // }
    switch(action.type){
        case ADD_TO_CART:
            return 1+1;
        case REMOVE_TO_CART:
            return 2-1;
        default:
            return "no action match"
    }

    //return 100;
}