import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant"

export const addToCart = (data) => {
    console.warn("action is addToCart", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
    console.warn("action is removeToCart", data)
    return {
        type: REMOVE_TO_CART,
        data
    }
}

export const emptyCart = () => {
    console.warn("action is emptyCart")
    return {
        type: EMPTY_CART
    }
}