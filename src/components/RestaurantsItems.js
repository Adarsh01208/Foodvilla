import React from 'react'
import { ITEMS_IMG_ID } from '../utils/constant'

const RestaurantsItems = ({items}) => {
  return (
    <div>
      {
        items.map((items) => (
          <div className='my-4'  >
            <div className='d-flex  justify-content-between  ' key={items.card.info.id}>
              <div className='w-50'>
                <div className='fw-semibold fs-6'>  {items.card.info.name}</div>

                <div className='fw-normal fs-6 '>
                  ₹{items.card.info.price / 100 || items.card.info.defaultPrice / 100}
                </div>
                <div className='text-secondary my-2 ' style={{ fontSize: "11px" }} >
                  {items.card.info.description}
                </div>
              </div>
              <div className='position-relative ' >
                <div className=' position-absolute  text-center  '>
                  <button className='btn btn-success px-4 mx-3  bg-white text-success shadow-sm' style={{ marginTop: "72px", fontSize: "13px" }}>ADD</button>
                </div>
                <img className='img-fluid   rounded-3' height={100} width={106} src={ITEMS_IMG_ID + items.card.info.imageId} alt="" />
              </div>
            </div>
            <hr className='my-4' />
          </div>
        ))
      }
    </div>
  )
}

export default RestaurantsItems;