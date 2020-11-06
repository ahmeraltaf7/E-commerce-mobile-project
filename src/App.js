import React from "react";
import "./Scss/App.scss";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/ProductList/ProductList";
import Details from "./Components/Details/Details";
import Cart from "./Components/Cart/Cart";
import { GlobalProvider } from "./Context/GlobalState";
import { Switch, Route, Redirect } from "react-router-dom";


function App() {
  return (
    <>
      <GlobalProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </GlobalProvider>
    </>
  );
}

export default App;
