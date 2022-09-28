import {  EMPTY_CART, REMOVE_FROM_CART, ADD_TO_CART } from "../constraint"

export const cartData=(state=[],action)=>{
    switch(action.type){
      case ADD_TO_CART:
                       console.log('reducer',[action.data,...state] ) ;
                       return [action.data,...state];
      case REMOVE_FROM_CART:
                       console.warn(action)
                       let temp=state.filter((item)=>{
                        if(item._id!==action.id)
                            return true;
                        else{
                          action.id='';
                          return false;
                        }})
                          
                       console.log("right",temp);
                       return [...temp];
      case EMPTY_CART:
                       state=[];
                       return [...state];
      default:
            return [...state];
    }
    return state;
}
