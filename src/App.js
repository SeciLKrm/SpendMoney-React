import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header";
import Product from "./components/product";
import Basket from "./components/Basket";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(1000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);


  // Sepeti Sıfırla
  const resetBasket = () => {
    setBasket([]);
    
  };
  // TOTAL DEĞERİNİ HESAPLAMA , SEPET TUTARINI HESAPLA
  useEffect(() => {
    console.log(basket);

    setTotal(
			basket.reduce((acc, item) => {
				return (acc + item.amount * (products.find((product )=> product.id === item.id).price));
			}, 0),
		)
  }, [basket]);
 
  console.log("App.jsteki total", total);
  return (
    <div className="App">
      <Header money={money} total={total} />

      <div className="container products">
        {products.map((product) => (
          <Product
            product={product}
            basket={basket}
            setBasket={setBasket}
            money={money}
            total={total}
          />
        ))}
      </div>
      {
        <Basket
          resetBasket={resetBasket}
          products={products}
          total={total}
          basket={basket}
        

        />
      }
    </div>
  );
}

export default App;

//  const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum); // Output: 15
