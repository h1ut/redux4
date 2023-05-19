import React, { useEffect, useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux';
import { add } from '../Redux/cartSlice';

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();




  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json() 
    setProducts(data)  
  }

  useEffect(() => {
    fetchProducts();
    console.log('called');
  }, [])

  const handleClick = (e) => {
    dispatch(add(e))

  }

  return (
    <div className='productsWrapper'>
        <h1>product</h1>
          {
            products.map((item) => (
                 <div className='card'>
                <img className='cardImage' src={item.image} alt="" key={item.id}/>
                <h4 className='cardTitle'>{item.title}</h4>
                <h5 className='cardPrice'>{item.price}$</h5>
                <button className='btn' onClick={() => handleClick(item)}>add to cart</button>
            </div>
            ))
          }
         

    </div>
  )
}

export default Products