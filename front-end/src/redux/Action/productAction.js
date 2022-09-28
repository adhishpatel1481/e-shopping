import { CART_PRODUCT_LIST, PRODUCT_LIST, SEARCH_DATA } from "../constraint";

export const productList=()=>{

    return{
        type:PRODUCT_LIST
    }
}
export const searchData=(word)=>{

    return{
        type:SEARCH_DATA,
        word
    }
}
export const cartProductList=(userId)=>{
    return{
        type:CART_PRODUCT_LIST,
        userId
    }
}