import React from 'react';
import CartItem from '../CartItem/CartItem';

const CartList = ({cart}) => {
    return ( 
        <div className="container-fluid my-3">
            {cart.map(item => 
            <CartItem key ={item.id} item={item} />
            )}
        </div>
     );
}
 
export default CartList;