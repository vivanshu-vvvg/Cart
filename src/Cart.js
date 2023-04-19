
import React from 'react'
import  './index.css'
import Cart_item from "./Cart_item";

class Cart extends React.Component{
    render(){
        return(
            <div className='Cart'>
                <Cart_item/>
                <Cart_item/>
                <Cart_item/>
            </div>
        );  
    }
}
export default Cart;


