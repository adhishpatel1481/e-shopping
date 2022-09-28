import {takeEvery,put}  from 'redux-saga/effects'
import { SETADD_TO_CART,ADD_TO_CART, PRODUCT_LIST, SEARCH_DATA, SETPRODUCT_LIST, SETSEARCH_DATA, CART_PRODUCT_LIST, SETCART_PRODUCT_LIST, FIND_PRODUCT } from './constraint';
import { findProduct } from './Action/findProductAction';
import { cartProductList } from './Action/productAction';

function* getData(){
    let data=yield fetch('http://localhost:5000/products') 
    data= yield data.json();
    console.warn('call api here',data);
    yield put({type:SETPRODUCT_LIST,data:data});
}
function* searchData(action){
    let data;
    if(action.word!=='')
        data=yield fetch(`http://localhost:5000/search/${action.word}`) ;
    else
        data=yield fetch('http://localhost:5000/products') ;
    data= yield data.json();
    console.warn('call api searchData',data);
    yield put({type:SETSEARCH_DATA,data:data});
}
// function* addToCart(action){
//     console.log({productId:action.data.item._id,userId:action.data.userId});
//     let data=yield fetch('http://localhost:5000/addtocart',{
//         method:"post",
//         headers:{
//                'Content-Type':'application/json'
//         },
//         body:JSON.stringify({productId:action.data.item._id,userId:action.data.userId})
//     })
//     data=yield data.json();
//     yield put({type:SETADD_TO_CART,data:action.data.item});
// }

// function* cartProductList(action){
//      let data=yield fetch(`http://localhost:5000/productlist/${action.userId}`);
//      data=yield data.json();
//      yield put({type:SETCART_PRODUCT_LIST,data:data});
// }

// function* findProduct(action){
//     let product=yield fetch(`http://localhost:5000/product/${action.productId}`,{
//         method:"get"
//     })
//     yield put({type:SETFIND_PRODUCT,data:product});
// }
function* productSaga(){
 yield takeEvery(PRODUCT_LIST,getData);
 yield takeEvery(SEARCH_DATA,searchData);
//  yield takeEvery(ADD_TO_CART,addToCart);
//  yield takeEvery(CART_PRODUCT_LIST,cartProductList);
//  yield takeEvery(FIND_PRODUCT,findProduct);
}
export default productSaga;