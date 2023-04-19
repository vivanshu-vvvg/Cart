
import React from 'react'
import  './index.css'
import Cart_item from "./Cart_item";

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
          products:[
            {
                price:1999,  
                title:"Watch",
                Qty:0,
                img:'',
                id:1
            },
            {
                price: 9999,  
                title:"Mobile Phone",
                Qty:0,
                img:'',
                id:2
            },
            {
                price:58999,  
                title:"Laptop",
                Qty:0,
                img:'',
                id:3
            }
          ]
        }
    
      }
    render(){
       const {products} = this.state;
        return(
            <div className='Cart'>
                {products.map((products)=>{
                    return (
                        <Cart_item 
                        products={products} 
                        key={products.id}/>
                        )
                })}
                
                
            </div>
        );  
    }
}
export default Cart;


