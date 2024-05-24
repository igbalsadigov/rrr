import React from 'react'
import style from '../Header/Header.module.css'
import logo from '../Images/logo (6).png'



const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.con}>
        <div>
        <img src={logo} alt="" />
        </div>
        <div>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">WINES</a></li>
                <li><a href="">SHOP</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
