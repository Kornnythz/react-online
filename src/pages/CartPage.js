import React from "react";
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'



const CartPage = () => {

  const cart = useSelector((state) => state.cartReducer.cart)
  return (
    <div className="container">
      <h1 className="mt-4">CartPage</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>ProductID</th>
            <th>ProductName</th>
            <th>ProductPrice</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
            {cart.map((c, index) => {
                return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{c.id}</td>
                    <td>{c.name}</td>
                    <td>{c.price}</td>
                    <td>{c.qty}</td>
                    <td>{c.price*c.qty}</td>
                </tr>
                );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default CartPage;
