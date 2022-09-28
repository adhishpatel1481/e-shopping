import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constraint";

export const addToCart=(data)=>{
    console.warn('action');
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const removeFromCart=(id)=>{
    return {
        type:REMOVE_FROM_CART,
        id
    }
}
export const emptyCart=()=>{
    return {
        type:EMPTY_CART
    }
}
