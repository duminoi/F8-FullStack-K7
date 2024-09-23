import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import Error from "./pages/Error";
export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/gioi-thieu" element={<About />}></Route>
            <Route path="/san-pham" element={<Products />}></Route>
            <Route path="/dat-hang" element={<Checkout />}>
              Đặt hàng
            </Route>
            <Route path="/dat-hang/cam-on" element={<ThankYou />}>
              Đặt hàng
            </Route>

            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
