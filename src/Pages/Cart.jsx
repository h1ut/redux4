// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import '../App.css'

// const Cart = () => {
//     const products = useSelector((state) => state.cart);
//     const dispatch = useDispatch();

//     const handleRemove = (id) => {

//     }
//   return (
//        <div className='cartMap'>
//         <h3>Cart</h3>
//         <div className='cartWrapper'>
//             {products.map((product) => {
//                          <div key={product.id} className='cartCard'>

//                          <img src={product.image} alt=""  className='cartImage'/>
//                          <h5>{product.title}</h5>
//                          <h5>{product.price}</h5>
//                          <button className='btn'>remove</button>
         
//                      </div>
//             })}
//             <div>
//             <h5>total:</h5>
//            </div>

//         </div>
//     </div>
//   )
// }

// export default Cart

import {  useSelector, } from 'react-redux'
import '../App.css'
// import { dell, increment, decrement, value } from '../Redux/cartSlise';
const Cart = () => {
    const products = useSelector((state) => state.cart);
    // const dispatch = useDispatch()


    return (

                <div className="basket_inner">

                    {
                  products.map((product) => {
                        return (
                            <div key={product.id} className="cart_basket">
                                <div className="names">
                                    <img className='CartImg' src={product.image} alt="" />
                                    <h5 className='product_title_basket'>{product.title}</h5>
                                </div>
                                <div className="product_prices">
                                    <h5 className='product_price_basket'>{product.price}$</h5>
                                    <h5>{product.price}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>

    )
}

export default Cart