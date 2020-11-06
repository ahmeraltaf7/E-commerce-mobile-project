import React from 'react';

const CartColumn = () => {
    return ( 
        <div className="contianer-fluid text-center mt-3 d-none d-md-block">
            <div className="row text-uppercase text-capitalize text-center">
                <div className="col-10 col-md-2 mx-auto">
                    <h3>product</h3>
                </div>
                <div className="col-md-2 mx-auto">
                <h3>name of product</h3>
                </div>
                <div className="col-md-2 mx-auto">
                <h3>price</h3>
                </div>
                <div className="col-md-2 mx-auto">
                <h3>quantity</h3>
                </div>
                <div className="col-md-2 mx-auto">
                <h3>remove</h3>
                </div>
                <div className="col-md-2 mx-auto">
                <h3>total</h3>
                </div>
            </div>
        </div>
     );
}
 
export default CartColumn;