import React from 'react'
import { moneyFormat } from '../helper'

const Product = ({product,basket,setBasket, money,total, setMoney}) => {

    const basketItem = basket.find(item => item.id === product.id)

	
	const addBasket = () => {
    const checkBasket = basket.find(item => item.id === product.id);
    // ürün daha önce eklenmiş
    const updatedBasket = checkBasket
        ? [...basket.filter(item => item.id !== product.id), {...checkBasket, amount: checkBasket.amount += 1}]
        : [...basket, {id: product.id, amount: 1}];
    setBasket(updatedBasket);
	
}	
//    SEPETTEN ÇIKARMA
	const removeBasket = () => {
		const currentBasket = basket.find(item => item.id === product.id)
		const withoutCurrentBasket = basket.filter(item => item.id !== product.id )

		// yeni sepet, ürün sepette yoksa ya da adet 0 ise aynı kalır,
       // aksi takdirde yeni bir dizi ile birlikte güncellenir
		const newBasket = currentBasket && currentBasket.amount >0 ?
		[...withoutCurrentBasket, {...currentBasket, amount: currentBasket.amount -=1}]
        : withoutCurrentBasket;

	setBasket(newBasket)
	 }
	return (
		
			
				
					<div className="product border rounded p-2 ">
				<img src={product.image}  className='border rounded w-100 mb-1' alt=""/>
				<h6 className='mb-1 fs-4'>{product.title}</h6>
				<div className="price fs-4 mb-1">$ {moneyFormat(product.price)}</div>
				<div className="actions d-flex">
					<button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Sat</button>
					<span className="amount text-center ">{basketItem ? basketItem.amount : 0}</span>
					<button className="buy-btn" disabled={total + product.price > money} onClick={addBasket}>Satın al
					</button>
				</div>
				
     
		
			</div>
	)
}

export default Product