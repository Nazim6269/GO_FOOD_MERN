import React from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

const Cart = () => {
  const data = useCart();
  const dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3 text-white">
          The cart is Empty
        </div>
      </div>
    );
  }

  const totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      <div className="container m-auto mt-5 table-responsive">
        <table className="table table-hover">
          <thead className="text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.quantity}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  {/* <button type="button" className="btn p-0">
                    <Delete
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    />
                  </button>{" "} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="text-white">Total Price: {totalPrice}</h1>
        </div>
        <div>
          <button className="btn bg-success mt-5">Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;