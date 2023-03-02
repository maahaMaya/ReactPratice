import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART condition ", action)
            return [action.data, ...data];
        case REMOVE_TO_CART:
            console.warn("REMOVE_TO_CART condition ", action)
            let renaminingItems = data.filter((item) => item.id !== action.data)
            return [...renaminingItems];
        case EMPTY_CART:
            console.warn("EMPTY_CART condition ")
            data = []
            return [...data];
        default:
            return data
    }
}