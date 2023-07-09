import { ShoppingCart } from "@mui/icons-material"
import { useRef } from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {

const hamburgerCheck = useRef()
const navLists = ['home', 'products', 'contact', 'about']

  return (
    <div className='navbar'>
        <div className="logo">Purohit Store</div>
        <label className="hamburger-menu">
            <input type="checkbox" ref={hamburgerCheck} />
        </label>
        <div className="nav-lists">
            <ul>
                {navLists.map((navlist, index) => {
                    return <NavLink 
                     to={navlist === 'home' ? '/' : `/${navlist}`} key={index} style={({isActive}) => { return {color: isActive ? 'rgb(77, 77, 247)' : 'black', textDecoration: 'none'}}} onClick={()=> hamburgerCheck.current.click()}>
                        {navlist}
                    </NavLink>
                })}
            </ul>
            <div className="account-cart">
                <div className="account">
                    <button onClick={()=> hamburgerCheck.current.click()}>login</button>
                </div>
                <NavLink to={'/cart'} style={{color: 'rgb(77, 77, 247)'}}>
                    <div className="cart-logo" onClick={()=> hamburgerCheck.current.click()}>
                        <ShoppingCart />
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}
