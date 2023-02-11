import "./App.css";
import background_01 from "./assets/bakground-01.jpg";
import brush from "./assets/bamboo_toothbrush.jpg";
import lofah from "./assets/loofah.jpg";
import container from "./assets/reusable_container.jpg";
import straw from "./assets/bamboo_straw.jpg";
import kit from "./assets/starter_kit.jpg";
import cups from "./assets/reusable_cups.jpg";
import { Fragment,useState } from "react";
import Hero from "./components/Hero";
 import Slider from "./components/Slider";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import HeaderCartButton from "./Layout/HeaderCartButton";
import Header from "./Layout/Header";
import CartProvider from "./store/cart-provider";
function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Shop" },
    { url: "#", title: "Contacts" },
  ];

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown&&<Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <div className="App1">
        <Hero imageSrc={background_01} />

        <Slider
          imageSrc={brush}
          title={"Bamboo Tooth-brush"}
          subtitle={
            "Eco-frientdly brush with soft bristles that are gentle on the enamel and gums"
          }
          cost={"$3.0"}
        />
      </div>

      <div className="App2 my-3">
        <Slider
          imageSrc={cups}
          title={"Reusable-Cups"}
          subtitle={
            "Plant based reusable cups are better for your health and they save your money"
          }
          cost="$3.5"
        />
      </div>
      <div className="App3 my-3">
        <Slider
          imageSrc={container}
          title={"Reusable-Container"}
          subtitle={
            "Plant based reusable container reduces the solid waste by upto 86%"
          }
          cost="$4.0"
        />
      </div>
      <div className="App4 my-3">
        <Slider
          imageSrc={straw}
          title={"Bamboo Straws"}
          subtitle={"Reusable straws that lasts for years"}
          cost="$5.2"
        />
      </div>
      <div className="App5 my-3">
        <Slider
          imageSrc={kit}
          title={"Sustainaiblity Starter Kit"}
          subtitle={
            "Complete eco-friendly sustainaiblity kit that minimizes waste"
          }
          cost="$10.0"
        />
      </div>

      <div className="App6 my-3">
        <Slider
          imageSrc={lofah}
          title={"Bamboo loofah"}
          subtitle={
            "Bamboo particles gently exfoliate the skin to remove impurites which improves cellular oxygenation."
          }
          cost="$7"
        />
      </div>
    </CartProvider>
  );
}

export default App;
