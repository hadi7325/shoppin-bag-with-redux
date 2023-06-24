import {BrowserRouter,Routes,Route,HashRouter} from "react-router-dom"
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
     <HashRouter>
       <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>} />
       </Routes>
     </HashRouter>
    </div>

  );
}

export default App;
