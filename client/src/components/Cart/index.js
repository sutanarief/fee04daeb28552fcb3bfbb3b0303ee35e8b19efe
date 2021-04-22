import React from "react";
import { useSelector } from "react-redux";
import {
  CartButton,
  CartIconWrapper,
  CartSubText,
  CartText,
  CartTextWrapper,
  CartWrapper,
} from "./CartElements";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <CartWrapper>
      {cart.length > 0 ? (
        <CartButton>
          <CartTextWrapper>
            <CartText>
              {cart.length} {cart.length > 1 ? "Items" : "Item"} l Rp{" "}
              {cart.reduce((a, b) => a + (b.price || 0), 0)}
            </CartText>
            <CartSubText>Termasuk ongkos kirim</CartSubText>
          </CartTextWrapper>
          <CartIconWrapper>
            <span className="material-icons-outlined">shopping_cart</span>
            <span className="material-icons-round">keyboard_arrow_right</span>
          </CartIconWrapper>
        </CartButton>
      ) : null}
    </CartWrapper>
  );
};

export default Cart;
