import React from 'react'
import {Link} from "react-router-dom"
import {IoBasketOutline,IoHomeSharp} from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"

function Nav() {
  const cart = useSelector((store) => store)
  const dispatch = useDispatch()
  return (
    <nav>
        <Link className='card-icon' to="/cart">
            <IoBasketOutline/>
            <span className='notef'>{cart.length}</span>
        </Link>

        <Link to="/">
            <IoHomeSharp/>
        </Link>
    </nav>
  )
}

export default Nav