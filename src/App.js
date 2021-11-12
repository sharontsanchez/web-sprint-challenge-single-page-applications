import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import OrderForm from "./OrderForm";


export const toppings = ["meat lovers", "veggie lovers", "cheese lovers", "pineapple"]
const App = () => {
  // initial values 
  const initialFormValues = {
    name: "",
    size: "",
    specialInstructions: "",
  };
  const initialErrorValues = { ...initialFormValues};
// include toppings in initial values 
  toppings.forEach((topping) => (initialFormValues[topping] = false));
  toppings.forEach((topping) => (initialErrorValues[topping] = ""));
  // Set up States 
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorValues, setErrorValues] = useState(initialErrorValues);
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/pizza">Pizza</Link>
      </header>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/">
          <Home/>
         </Route>
        <Route path="/pizza">
          <OrderForm/>
        </Route>
      </Switch>
    </>
  );
};
export default App;
