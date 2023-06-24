import React from 'react'
import Nav from '../Nav'
import formatCurrency from '../Util'
import { useDispatch, useSelector } from "react-redux"
function Cart() {
  const cart = useSelector((store) => store)
  const dispatch = useDispatch()
  const addition = (acc,currentvlue) => {
    return acc + currentvlue.price * currentvlue.quentity;

  }
  const total = cart.reduce(addition,0)

  return (
    <>
      <Nav />
      <div className='cart'>
        {
          cart.map((item) => {
           
            return (

              <div className='cart-item' key={item.id}>
                <img src={process.env.PUBLIC_URL  + item.image} alt="" />
                <div className='cart-item-text'>
                  <div className='cart-item-info'>
                    <h4>{item.title}</h4>
                    <h5>{formatCurrency(item.price)}</h5>
                    <h5>مجموع : {formatCurrency(item.price * item.quentity)}</h5>
                    <button type="" onClick={() => dispatch({type : "REMOVE", payload : item})}>حذف از سبد خرید</button>
                  </div>
                  <div className='add-to-cart'>
                    <button className={`${item.quentity < 2 ? "" : ""}`} onClick={() => {
                      if(item.quentity > 1){
                        dispatch({ type: "DECREASE", payload: item })
                      
                      }else{
                        dispatch({ type: "REMOVE", payload: item })
                      }
                    }} type="">-</button>
                    <span>تعداد : {item.quentity}</span>
                    <button  onClick={() => dispatch({ type: "INCREASE", payload: item })} type="">+</button>
                  </div>
                </div>
              </div>
            )

          })
        }
   
       <div className='total'>
        {
          total > 0 ? <p>مجموع قیمت : {formatCurrency(total)}</p> : <p>سبد خرید خالی است</p>
        }
       </div>
      </div>
    </>
  )
}

export default Cart