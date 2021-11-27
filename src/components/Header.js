import React from 'react'
import Logo from './Logo'

const Header = () => {

    let companyName = "TNI"

    const showMessage = () => {
        return companyName + ".com"
    }

    const isLogin = false;

    const showMe = () => {
        alert('Hello React')
    }

    const products = [
        {id:1, name: "Coke"},
        {id:2, name: "Pepsi"}
    ]

    return (
        <div>
            <h1>Hello {showMessage()}</h1>

            {
                // long term
                // isLogin === true ? (
                //         <Logo/>
                // ) : (
                //         <p>Need to login first.</p>
                // )

            }

            {
                // short term
                // isLogin && (
                //     <>
                //         <p>Student</p>
                //     </>
                // )
            }
            <button onClick={showMe}>Click Me</button>

            <ul>
                {
                    products.map((product,index) => {
                        return (<li key={product.id}>{index+1} {product.name}</li>)
                    })
                }
            </ul>
            
        </div>
    )
}

export default Header;