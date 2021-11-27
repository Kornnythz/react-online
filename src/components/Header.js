import React from 'react'
import Button from '../styles/button/Button'
import Title from '../styles/title/Title'
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
            <Title>Project React</Title>
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
            <Button onClick={showMe}>Click Me</Button>

            <Button keyword="correct" onClick={showMe}>Click Me</Button>

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