import { FC, ReactNode } from "react";

import { Bag, Cross } from "@components/icons";

interface Props {}

const CartSidebar: FC<Props> = () => {
  const isEmpty = true;

  return (
    <div className='cartsidebar-container'>
      {isEmpty ? (
        <>
          <div className='cartsidebar-close-btn'>
            <Cross />
          </div>
          <div className='cartsidebar-content'>
            <h4>Your Cart is empty</h4>
          </div>
        </>
      ) : (
        <>
          <div className='cartsidebar-close-btn'>
            <Cross />
          </div>
          <div className='cartsidebar-content'>
            <h4>Your Cart</h4>
            <p>Cart items here!</p>
            <div className='cartsidebar-items'>
              <div className='cartsidebar-item'>
                <p>Subtotal</p>
                <p>€ 60</p>
              </div>
              <div className='cartsidebar-item'>
                <p>Taxes</p>
                <p>€ 15</p>
              </div>
              <div className='cartsidebar-item'>
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className='cartsidebar-item'>
                <h5>Total</h5>
                <h5>€ 130</h5>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
