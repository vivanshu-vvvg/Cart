import React from 'react'
import  './index.css'
// const Cart_item = () => {
  class Cart_item extends React.Component{
 
  // increaseQuantity = ()=>{
  //   // this.state.Qty +=1;
  //   // this.setState({
  //   //   Qty : this.state.Qty +1
  //   // });
  //   this.setState((prevState)=> {
  //     return{Qty: prevState.Qty +1}
  //   });
  //   console.log('this.state');
  // }
  // decreaseQuantity =()=>{
  //   this.setState((prevState)=>{if(prevState.Qty>0){
  //     return{Qty: prevState.Qty-1}}
  //   });
  // }



  render(){
    const{price,title,Qty}=this.props.products;
  return (
    <div className='Cart-item'>
      <div className='Left-block'style={{backgroundColor:'grey'}}>
        <img />
      </div>
      <div className='right-block'>
        <div style={{fontSize:25}}>{title}</div>
        <div style={{color:'#777'}}>Rs {price}</div>
        <div style={{color:'#777'}}>Qty: {Qty}</div>
        <div className='cart-item-actions'>
        {/*buttons*/}
        <img  alt='Increase' className='action-icons' src=''
          onClick={()=> this.props.onIncreaseQuantity(this.props.products)}/>
        <img alt='Decrease' className='action-icons' src=''
          onClick={()=> this.props.onDecreaseQuantity(this.props.products)}/>
        <img alt='Delete' className='action-icons' src=''/>
        </div>
      </div>

    </div>
  )
}
  }

export default Cart_item;
