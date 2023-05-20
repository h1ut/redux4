

import {  useSelector, } from 'react-redux'
import '../App.css'
const Cart = () => {
    const products = useSelector((state) => state.cart);


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