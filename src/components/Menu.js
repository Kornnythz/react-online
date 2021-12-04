import React , { useState } from 'react'
import useHover from '../hooks/useHover'

function Menu() {

    const [hover , mouseOver , mouseOut] = useHover()

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

export default Menu
