import {
  FaBars,
  FaCalendarAlt,
  FaCalendarCheck,
  FaEnvelope,
  FaHome,
  FaRegCommentAlt,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
  return (
    <div>
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side w-[80%]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to="/dashboard/home">
                <FaHome />
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservations">
                <FaCalendarAlt />
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payment">
                <FaWallet />
                Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mycart">
                <FaShoppingCart />
                My Cart
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/review">
                <FaRegCommentAlt />
                Add Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/bookings">
                <FaCalendarCheck />
                My Booking
              </NavLink>
            </li>
            <div className="divider  w-[75%]"></div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaBars />
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaShoppingBag />
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FaEnvelope />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
