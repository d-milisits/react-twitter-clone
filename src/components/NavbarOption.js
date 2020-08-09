import React from 'react'
import '../css/NavbarOption.css';

function NavbarOption({active, text, Icon}) {
  return (
    <div className={`navbarOption ${active && 'navbarOption--active'}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default NavbarOption
