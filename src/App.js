import { useState, useEffect } from "react";
import Product from "./components/Product.js";
import ShopButton from "./components/ShopButton.js";
import ShopElement from "./components/ShopElement.js";
import ShopSummary from "./components/ShopSummary.js";

function App() {
const [products, setProducts] = useState([
  {
    id: 1,
    type: 'FaBiking',
    description: 'Rower szybki',
    price: 4499,
    quantity: 5,
    color: "pink"
  },
  {
    id: 2,
    type: 'FaBiking',
    description: 'Rower wolny',
    price: 2499,
    quantity: 13,
    color: "brown"
  },
  {
    id: 3,
    type: 'FaBowlingBall',
    description: 'Dziurawa kula do kręgli',
    price: 150,
    quantity: 1,
    color: "black"
  },
  {
    id: 4,
    type: 'FaSnapchatGhost',
    description: 'Duszek',
    price: 1000000,
    quantity: 1,
    color: "blue"
  },
  {
    id: 5,
    type: 'FaBabyCarriage',
    description: 'Wózek 2-śladowy',
    price: 500,
    quantity: 5,
    color: "red"
  },
  {
    id: 6,
    type: 'FaBaby',
    description: 'Sztuczne dziecko',
    price: 20000,
    quantity: 5,
    color: "yellow"
  },
  {
    id: 7,
    type: 'FaEgg',
    description: 'Jajeczko',
    price: 25,
    quantity: 100,
    color: "yellow"
  },
  {
    id: 8,
    type: 'FaHorse',
    description: 'Klacz wyścigowa',
    price: 1000,
    quantity: 10,
    color: "brown"
  },
  {
    id: 9,
    type: 'FaSmileBeam',
    description: 'Dobry humor',
    price: 1000000,
    quantity: 77,
    color: "yellow"
  },
  {
    id: 10,
    type: 'FaTshirt',
    description: 'Koszulka uniwersalna',
    price: 20,
    quantity: 100,
    color: "gray"
  },
  {
    id: 11,
    type: 'FaMoneyBillAlt',
    description: 'Banknot 1-dolarowy',
    price: 10,
    quantity: 10,
    color: "green"
  },
  {
    id: 12,
    type: 'FaApple',
    description: 'Jabłko Adama',
    price: 10000000,
    quantity: 1,
    color: "red"
  }
]);


const initialBasket = products.map((product) => ({
  id: product.id,
  quantity: 0,
  color: product.color}));

const [basket, setBasket] = useState(initialBasket);

const [showBasketLogo, setShowBasketLogo] = useState(false);
const [showBasket, setShowBasket] = useState(false);

const toggleBasket = () => {
  setShowBasket(!showBasket);
}

const addToBasket = (id,qnt,color) => {
  setProducts(products.map(product => product.id === id ? {...product, quantity: (product.quantity-qnt)} : product));
  setBasket(basket.map(bask => bask.id === id ? {...bask, quantity: (bask.quantity+parseInt(qnt))} : bask));
};

const deleteProduct = (id,qnt) => {
  setProducts(products.map(product => product.id === id ? {...product, quantity: (product.quantity+qnt)} : product));
  setBasket(basket.map(bask => bask.id === id ? {...bask, quantity: 0} : bask));
  console.log(basket);
};

useEffect(() => {
  console.log("APP");

  for (const bask of basket) {
    if (bask.quantity>0) { setShowBasketLogo(true); break; }
    setShowBasketLogo(false);
    
  };
  if (showBasketLogo===false) setShowBasket(false);

  console.log(showBasketLogo);
}, [showBasketLogo, basket]);

  return (
    <div className="container">
      <div className="shop">
        <Product art={products[0]} addToBasket={addToBasket}/>
        <Product art={products[1]} addToBasket={addToBasket}/>
        <Product art={products[2]} addToBasket={addToBasket}/>
        <Product art={products[3]} addToBasket={addToBasket}/>
        <Product art={products[4]} addToBasket={addToBasket}/>
        <Product art={products[5]} addToBasket={addToBasket}/>
        <Product art={products[6]} addToBasket={addToBasket}/>
        <Product art={products[7]} addToBasket={addToBasket}/>
        <Product art={products[8]} addToBasket={addToBasket}/>
        <Product art={products[9]} addToBasket={addToBasket}/>
        <Product art={products[10]} addToBasket={addToBasket}/>
        <Product art={products[11]} addToBasket={addToBasket}/>
      </div>
      
      <div className="basket">
        {showBasketLogo ? <ShopButton toggleBasket={toggleBasket}/> : ""}
        {basket.map((bask) => (
          (bask.quantity>0 && showBasket) ? <ShopElement key={bask.id} basket={bask} product={products[bask.id-1]} deleteProduct={deleteProduct}/> : ""
        ))}
        {showBasket ? <ShopSummary products={products} basket={basket}/> : ""}
      </div>
    </div>
  );
}

export default App;