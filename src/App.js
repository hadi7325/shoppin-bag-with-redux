import {BrowserRouter,Routes,Route} from "react-router-dom"
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>} />
       </Routes>
     </BrowserRouter>
    </div>

  );
}

export default App;
