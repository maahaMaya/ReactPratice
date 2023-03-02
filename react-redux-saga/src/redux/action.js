import { ADD_TO_CART } from "./constant"

 export const addToCart = (data) => {
    console.warn("action is called", data)
    //return "hello";  /// give error because it will need key
    return {
        //type:'ADD_TO_CART',  /// any mistake in type value we must import constant value;
        //data:data   /// if key and value are then only we write directly 
        type: ADD_TO_CART,
        data
    }
}