import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <Provider store={store}>
      <Navbar setToggle={setToggle} toggle={toggle} />
      {toggle ? <Cart /> : <Home />}
    </Provider>
  );
}

export default App;
