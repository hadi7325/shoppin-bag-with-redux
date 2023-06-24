import React from 'react'
import Nav from '../Nav'
import {Data} from "../data"
import formatCurrency from '../Util'
import {useDispatch,useSelector} from "react-redux"
console.log(Data)
function Products() {

    const cart = useSelector((store) => store)
    const dispatch = useDispatch()
    console.log(cart)
  return (
    <div>
        <Nav/>
        <div className="products">
            {
               Data.map((item) => 
               
                <div className='product-item'key={item.id}>
                    <img src={item.image} alt=""/>
                    <div className='product-item-text'>
                        <div className='product-item-info'>
                            <h4>{process.env.PUBLIC_URL + item.title}</h4>
                            <h5>{formatCurrency(item.price)}</h5>
                        </div>
                        <div className='add-to-cart'>
                            <button onClick={() => dispatch({type : "ADD" , payload : item})} type="">افزودن به سبد خرید</button>
                        </div>
                    </div>
                </div>
               
               ) 
            }
        </div>
    </div>
  )
}

export default Products