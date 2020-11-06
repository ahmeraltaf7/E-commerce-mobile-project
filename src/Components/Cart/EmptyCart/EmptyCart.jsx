import React from 'react';

const EmptyCart = () => {
    return (
        <div className="container mt-5 text-center mx-auto">
            <div className="row">
                <div className="col-12 text-capitalize">
                    <h5 className="display-4">your cart is currently empty</h5>
                </div>
            </div>
        </div>
      );
}
 
export default EmptyCart;