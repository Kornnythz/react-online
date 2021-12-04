import React , { useState } from 'react'

function Menu_Version1() {

    const [hover , setHover] = useState()

    const mouseOver = () => {
       setHover(true)
    }

    const mouseOut = () => {
        setHover(false)
    }

    return (
        <div>
            <h1>Menu</h1>
            {
                hover ? <h3>Welcome</h3> : null
            }
            <img onMouseOut={mouseOut} onMouseOver={mouseOver} src="./logo192.png" alt="logo"/>
        </div>
    )
}

export default Menu_Version1
