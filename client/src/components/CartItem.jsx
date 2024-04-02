import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/stellarCartSlice";
import { ToastContainer, toast } from "react-toastify";

export const CartItem = () => {
  const productData = useSelector((state) => state.stellarCart.productData);
  const dispatch = useDispatch();
  return (
    <div className="w-full lg:w-2/3 p-10  lg:p-0 lg:pr-10  ">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-6 border-2 lg:border-0 p-2"
          >
            <div className="flex flex-col-reverse lg:flex-row items-center gap-2">
              <MdOutlineClose
                onClick={() =>
                  dispatch(
                    deleteItem({
                      _id: item._id,
                    })
                  ) && toast.error(`${item.title} is removed`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                className="w-96  lg:w-32 lg:h-32 object-cover"
                src={item.image}
                alt=""
              />
            </div>
            <h2 className="text-xs lg:w-52">{item.title}</h2>
            <p className="w-10">&#8377;{item.price * 10 * item.quantity}</p>
            <div className="flex gap-3 py-3 px-2  border w-fit items-center">
              <p className="text-gray-500">Quantity</p>
              <button
                onClick={() =>
                  dispatch(
                    decrementQuantity({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description,
                    })
                  )
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                -
              </button>
              <span className="text-sm">{item.quantity}</span>
              <button
                onClick={() =>
                  dispatch(
                    incrementQuantity({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description,
                    })
                  )
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        className="bg-red-500 text-white mt-8 ml-1 lg:ml-7 py-1 px-6 hover:bg-red-800 duration-300 rounded-lg "
        onClick={() =>
          dispatch(resetCart()) && toast.error("All items removed")
        }
      >
        Reset Cart
      </button>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
