import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EMPTY_CART_IMG, ITEMS_IMG_ID } from '../utils/constant'
import { clearCart } from '../utils/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  
  const cartItems = useSelector((store) => store.cart.items)

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(clearCart())
  }
  const [quantities, setQuantities] = useState(new Array(cartItems.length).fill(1));
  const calculateCartValue = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const price = item.card.info.price / 100 || item.card.info.defaultPrice / 100;
      total += price * quantities[cartItems.indexOf(item)];
    });
    return total;
  };

  const incrementQuantity = (index) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index]++;
      return newQuantities;

    });
  };

  const decrementQuantity = (index) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index]--;
      }
      return newQuantities;
    });
  };




  return (
    <div className='container my-5 d-flex justify-content-center'>
      <div className='w-75'>
        <div>
          {
            cartItems.length > 0 && (<div className='d-flex justify-content-between'>  <h2>My Cart({cartItems.length})</h2><button className='btn btn-primary ' onClick={handleDelete}>Clear Cart</button></div>)
          }
          <hr />
        </div>
        <div className='my-4'>
          <div className=''>
            {
              cartItems.length === 0 && (
                <div className='p-1'>
                  <div className='text-center '>
                    <img height={300} width={300} src={EMPTY_CART_IMG}></img>
                  </div>
                  <div className='text-center'>
                    <div className='fs-5 mt-2 fw-semibold'>Your cart is empty</div>
                    <div className='text-secondary fs-6'>You can go to home page to view more restaurants</div>
                    <button className='btn btn-warning  mt-4'> <Link className='text-decoration-none text-white px-1' to="/">See restaurants near you</Link> </button>
                  </div>
                </div>
              )
            }
          </div>
          {
            cartItems.map((items, index) => (
              <div className='my-2'  >
                <div className='d-flex  justify-content-between align-items-center  ' key={items.card.info.id}>
                  <div className='w-50'>
                    <div className='fw-semibold fs-6'>  {items.card.info.name}</div>
                    <div className='text-secondary my-2 ' style={{ fontSize: "11px" }} >
                      {items.card.info.description}
                    </div>
                  </div>
                  <div className='border' style={{cursor:'pointer'}}>
                    <i onClick={() => decrementQuantity(index)} className='fa fa-minus m-2'></i>
                    <span className='m-2'>{quantities[index]}</span>
                    <i onClick={() => incrementQuantity(index)} className='fa fa-plus m-2'></i>
                  </div>
                  <div className='fw-normal fs-6 '>
                    ₹{items.card.info.price / 100 || items.card.info.defaultPrice / 100}
                  </div>
                  <div className='position-relative ' >
                    <img className='img-fluid   rounded-3' height={100} width={106} src={ITEMS_IMG_ID + items.card.info.imageId} alt="" />
                  </div>
                </div>
                <hr className='my-4' />
              </div>
            ))
          }
          {
            cartItems.length > 0 && (
              <div className='d-flex justify-content-between'>
                <div className='fw-semibold fs-5'>Total:</div>
                <div className='fw-semibold fs-5'>₹{calculateCartValue().toFixed(2)}</div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Cart;