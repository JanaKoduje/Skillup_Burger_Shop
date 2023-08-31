import React, { useState } from "react";
import { Link } from "react-router-dom";
import { burgers } from "../../data";


const CartItem = ({ value, title, img }) => {
  const [num, setNum] = useState(value);
  const decrement = () => num > 0 ? setNum(num - 1) : setNum(0);
  const increment = () => setNum(num + 1);

  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt={title} />
      </div>

      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={num} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
};

const Cart = () => {
  return (
    <section className="cart">
      <main>
        {burgers.map((item) => <CartItem
          key={item.itemNum}
          title={item.title}
          img={item.img}
          value={item.value}
        />)}

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart; 
