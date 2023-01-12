import "./App.css";
import NavBar from "./Components/NavBar.js";
import ItemDetailContainer from "./Components/ItemDetailCont/ItemDetailContainer";
import ItemListContainer from "./ItemListCont/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  fetch("https://fakestoreapi.com/products").then((res) => res.json());

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
