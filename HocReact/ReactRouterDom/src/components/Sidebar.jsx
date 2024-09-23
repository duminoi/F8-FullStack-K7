import { NavLink } from "react-router-dom";
import "../assets/css/Siderbar.css";
export default function Sidebar() {
  return (
    <div>
      <h2>Menu</h2>
      <ul className="nav flex-column">
        <li>
          <NavLink to={"/"} className="nav-link">
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink to={"/gioi-thieu"} className="nav-link ">
            Giới thiệu
          </NavLink>
        </li>
        <li>
          <NavLink to={"/san-pham"} className="nav-link">
            Sản phẩm
          </NavLink>
        </li>
        <li>
          <NavLink to={"/dat-hang"} className="nav-link">
            Đặt hàng
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
