import React from 'react'

const Header = () => {

    let companyName = "TNI"

    const showMessage = () => {
        return companyName + ".com"
    }

    return (
        <div>
            <h1>Hello {showMessage()}</h1>
        </div>
    )
}

export default Header;