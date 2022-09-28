import {  SETPRODUCT_LIST, SETSEARCH_DATA } from "../constraint";
export const productList=(state=[],action)=>{
    switch(action.type){
    case SETPRODUCT_LIST:
                    return [...action.data];
    case SETSEARCH_DATA:
                    return [...action.data];
    default:
                return state;
    }
}