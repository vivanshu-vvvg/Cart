
import React from 'react'
import  './index.css'
import Cart_item from "./Cart_item";

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
          productsAll:[
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
            },
            {
                price:2799,  
                title:"Charger",
                Qty:0,
                img:'',
                id:4
            }
          ]
        }
    
      }
      handleIncreaseQuantity = (products)=>{
        const {productsAll}= this.state;
        const index = productsAll.indexOf(products);

        productsAll[index].Qty +=1;
        this.setState({productsAll})
      }
      handleDecreaseQuantity=(products)=>{
        const {productsAll}=this.state;
        const index = productsAll.indexOf(products);

        if(productsAll[index].Qty>0){
            productsAll[index].Qty -=1;
            this.setState({productsAll})
        }
      }
    render(){
       const {productsAll} = this.state;
        return(
            <div className='Cart'>
                {productsAll.map((products)=>{
                    return (
                        <Cart_item 
                        products={products} 
                        key={products.id}
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}/>
                        )
                })}
                
                
            </div>
        );  
    }
}
export default Cart;


