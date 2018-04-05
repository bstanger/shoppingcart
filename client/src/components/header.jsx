import React from 'react'
import ReactDOM from 'react-dom'
import HeaderSty from '../../dist/styles/header.css'

const Header = ({goToCheckout}) => (
  <header className={HeaderSty.nav}>
    <div className={HeaderSty.logo}>Serengeti</div>
    <button onClick={(e) => goToCheckout(e)} className={HeaderSty.checkout}>Checkout</button>
  </header>
)


export default Header
