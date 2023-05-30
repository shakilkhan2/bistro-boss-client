import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  //   explore reduce:
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (row) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${row._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-[80%] mb-20">
      <Helmet>
        <title>My cart - Bistro Boss</title>
      </Helmet>
      <div className="">
        <div className="mt-96 w-full">
          <SectionTitle subHeading="---My Cart---" heading="WANNA ADD MORE?" />
        </div>
        <div className=" flex justify-between items-center uppercase text-xl font-bold my-4 ">
          <h3>Total Ordes: {cart.length}</h3>
          <h3>Total Items: ${total}</h3>
          <button className="btn bg-[#D1A054] border-0 hover:bg-yellow-700 text-white font-bold">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-lg">
                <th className="text-lg font-semibold">#</th>
                <th className="text-lg font-semibold">Food</th>
                <th className="text-lg font-semibold">Item Name</th>
                <th className="text-lg font-semibold">price</th>
                <th className="text-lg font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {cart.map((row, index) => (
                <tr key={row._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={row.image} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold"></div>
                      </div>
                    </div>
                  </td>
                  <td>{row.name}</td>
                  <td className="text-end text-lg">${row.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(row)}
                      className="btn bg-[#B91C1C] hover:bg-[#450707] border-0"
                    >
                      <FaTrashAlt className="text-xl   text-white " />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
