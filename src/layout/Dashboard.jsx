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
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
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
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link>
                <FaHome />
                User Home
              </Link>
            </li>
            <li>
              <Link>
                <FaCalendarAlt />
                Reservation
              </Link>
            </li>
            <li>
              <Link>
                <FaWallet />
                Payment History
              </Link>
            </li>
            <li>
              <Link to="/dashboard/mycart">
                <FaShoppingCart />
                My Cart
              </Link>
            </li>
            <li>
              <Link>
                <FaRegCommentAlt />
                Add Review
              </Link>
            </li>
            <li>
              <Link>
                <FaCalendarCheck />
                My Booking
              </Link>
            </li>
            <div className="divider w-[70%]"></div>
            <li>
              <Link to="/">
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <FaBars />
                Menu
              </Link>
            </li>
            <li>
              <Link to="/order/salad">
                <FaShoppingBag />
                Shop
              </Link>
            </li>
            <li>
              <Link>
                <FaEnvelope />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
