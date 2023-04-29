import React from 'react'


const BasketItem = ({item, product})=> {
  return (
    <div>
  <li className='basket-item' key={item.id}>
  {product.title}
   <span> x {item.amount}  </span>
 <span className='fw-bold text-danger'> {product.price}</span>
  </li>
    </div>
  )
}

export default BasketItem