
// import Cart_item from "./Cart_item";
import Navbar from "./Navbar";
import Cart from "./Cart";
import React from "react";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      productsAll:[
        {
            price:1999,  
            title:"Watch",
            Qty:1,
            img:'',
            id:1
        },
        {
            price: 9999,  
            title:"Mobile Phone",
            Qty:1,
            img:'',
            id:2
        },
        {
            price:58999,  
            title:"Laptop",
            Qty:1,
            img:'',
            id:3
        },
        {
            price:2799,  
            title:"Charger",
            Qty:1,
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
  handleDeleteProduct=(id)=>{
    const{productsAll}=this.state;
    const items=productsAll.filter((item)=>item.id !== id);
    this.setState({
      productsAll:items
    })
  }
  getCartCount=()=>{
    const{productsAll}=this.state;
    let Count = 0;
    productsAll.forEach((products)=>{
      Count += products.Qty;
    })
    return Count;
  }

  getCartTotal=()=>{
    const{productsAll}=this.state;
    let cartTotal=0;
    productsAll.map((products) => {
      cartTotal=cartTotal +products.Qty * products.price;
    })
    return cartTotal;
  }
  render() {
    const {productsAll}= this.state;
    return (
      <div className="App">
      <Navbar Count={this.getCartCount()}/>
        <Cart 
          productsAll={productsAll}
          key={productsAll.key}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct ={this.handleDeleteProduct}
        />
        <div style={{fontSize: 20, padding:40 ,display:'flex'}}><b>TOTAL Amount: Rs {this.getCartTotal()}</b></div>
      </div>
    );
  }
}

export default App;
