import React from 'react'
import  './index.css'
// const Cart_item = () => {
  class Cart_item extends React.Component{
  constructor(){
    super();
    this.state={
      price:999,  
      title:"Mobile Phone",
      Qty:0,
      img:''
    }

  }
  increaseQuantity = ()=>{
    // this.state.Qty +=1;
    // this.setState({
    //   Qty : this.state.Qty +1
    // });
    this.setState((prevState)=> {
      return{Qty: prevState.Qty +1}
    });
    console.log('this.state');
  }
  decreaseQuantity =()=>{
    this.setState((prevState)=>{if(prevState.Qty>0){
      return{Qty: prevState.Qty-1}}
    });
  }



  render(){
    const{price,title,Qty}=this.state;
  return (
    <div className='Cart-item'>
      <div className='Left-block'>
        <img />
      </div>
      <div className='right-block'>
        <div style={{fontSize:25}}>{title}</div>
        <div style={{color:'#777'}}>{price}</div>
        <div style={{color:'#777'}}>{Qty}</div>
        <div className='cart-item-actions'>
        {/*buttons*/}
        <img  alt='Increase' className='action-icons' src=''
          onClick={this.increaseQuantity}/>
        <img alt='Decrease' className='action-icons' src=''
        onClick={this.decreaseQuantity}/>
        <img alt='Delete' className='action-icons' src=''/>
        </div>
      </div>

    </div>
  )
}
  }

export default Cart_item;
