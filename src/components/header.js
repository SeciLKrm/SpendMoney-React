import React from 'react'
import { moneyFormat } from '../helper'

const Header = ({money, total}) => {
console.log(money)

 
  return (
    <div>
 {total > 0 && money-total !== 0 &&  (
  <div className='header text-light w-100 fs-3 d-flex justify-content-center align-items-center'>Harcayacak <span className='fw-bold m-2 '> $ { moneyFormat(money- total) } </span> paranız kaldı  </div>
 )}

 {total === 0 && (
  <div className='header text-light  w-100 fs-3 d-flex justify-content-center align-items-center'>Harcayacak <span className='fw-bold m-2 '>$ {moneyFormat(money)}</span> paranız kaldı </div>

 )}  
 
 {money-total === 0 && (
  <div className='header text-light  empty w-100 fs-3 d-flex justify-content-center align-items-center'>Harcayacak Paranız Kalmadı ...</div>
 )}
 
 
 
    </div>
  )
}

export default Header