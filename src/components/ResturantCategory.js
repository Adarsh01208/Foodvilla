import React, { useState } from 'react'
import ResturantMenu from './ResturantMenu'
import RestaurantsItems from './RestaurantsItems'

const ResturantCategory = ({ data }) => {


    const [ShowItems, setShowItems] = useState(true);

    const handleClick = () => {
      setShowItems(!ShowItems)
    }

    // console.log(data.title)
    return (
        <div className='card m-2 p-3  border-0 shadow-lg '>
            <div className='d-flex justify-content-between' style={{ cursor: "pointer" }} onClick={handleClick}>
                <div className='fw-bold '>
                    {data.title} ({data.itemCards.length})
                </div>
                <div className='fw-bold'>
                    {ShowItems ?
                        <i className="fa-solid fa-angle-up"></i> :
                        <i className="fa-solid fa-angle-down"></i>
                    }
                </div>
            </div>
            <div>
                {
                    ShowItems && <RestaurantsItems items={data.itemCards} />
                }
            </div>

        </div>
    )
}

export default ResturantCategory