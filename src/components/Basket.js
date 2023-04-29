import React from 'react'
import BasketItem from './BasketItem'
import {moneyFormat} from '../helper'

const Basket = ({basket, products, total, resetBasket }) => {
  console.log('Total degerı',total)
  return (
    <div className='basket-wrapper d-grid'>
    <div className='basket-container container p-3  rounded bg-light '>
        <h3 className='shadow p-2 fs-4 mb-2'>Alışveriş Detayları</h3>
<ul>
{
        basket.map(item => (
           <BasketItem key={item.id} item ={item} product={products.find( p=> p.id ===item.id )}  />
        ))
    }
</ul>
    <div className='total fw-bold fs-4'>
        Toplam : ${moneyFormat(total)}

    </div>
    
    <button onClick={resetBasket} className='bg-success text-light pointer rounded border-0 p-2 opacity-75' >Sepeti Sıfırla</button>
   
    </div>
   
    </div> 
  )
}

export default Basket