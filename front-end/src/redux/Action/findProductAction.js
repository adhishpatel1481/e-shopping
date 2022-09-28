import { FIND_PRODUCT } from "../constraint"

export const findProduct=(productId)=>{
    return{
        type:FIND_PRODUCT,
        productId
    }

}