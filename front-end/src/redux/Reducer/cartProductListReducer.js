import { SETCART_PRODUCT_LIST } from "../constraint";

export const cartProductList=(state=[],action)=>{
    switch(action.type){
      case SETCART_PRODUCT_LIST:
                      
                       return [...action.data];
      default:
            return [];
    }
    return state;
}