import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import {Link} from "react-router-dom"

function Payment() {

	const [{basket, user}, dispatch] =useStateValue();
	return (
    <div className="payment">
      <div className="payment__container">
		  <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Mandela Road</p>
            <p>Sandton, Jhb</p>
          </div>
        </div>
        {/* Payment section - product review */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment section - product method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
		  <div className="payment__details">
			  {/* Payment gateway things go here --->> maybe Stripe? */}
		  </div>
        </div>
      </div>
    </div>
  );
}

export default Payment
