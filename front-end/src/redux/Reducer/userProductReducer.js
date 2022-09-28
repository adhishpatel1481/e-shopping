import { SETFIND_PRODUCT } from "../constraint";

export const userProducts=(state=[],action)=>{
    switch(action.type){
        case SETFIND_PRODUCT: return [action.data];

        default:
              return [];
    }
    return state;
}