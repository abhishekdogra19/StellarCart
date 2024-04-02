import { useSelector } from "react-redux";
import { CartItem } from "../components/CartItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.stellarCart.productData);
  const [totalAmount, setTotalAmount] = useState(0);
  const userInfo = useSelector((state) => state.stellarCart.userInfo);
  const [payNow, setPayNow] = useState(false);
  useEffect(() => {
    let sum = 0;
    productData.map((item) => {
      sum += item.quantity * item.price * 10;
      return sum;
    });
    setTotalAmount(sum);
  }, [productData]);
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please Sign in to Checkout ");
    }
  };
  const payment = async (token) => {
    await axios.post("https://stellarcart-dmtu.onrender.com/pay", {
      amount: totalAmount * 100,
      token: token,
    });
  };
  return (
    <div>
      <img
        className="w-full h-60 object-cover "
        src="https://images.unsplash.com/photo-1698998786168-eadefe66feca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      {productData.length > 0 ? (
        <div className="max-w-screen-xl mx-auto py-20 flex flex-col lg:flex-row">
          <CartItem />
          <div className="w-full lg:w-1/3 bg-[#fafafa] py-6 px-4 border mt-4 ">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6 ">
              <h2 className="text-2xl font-medium">Cart Totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal
                <span className="font-titleFont font-bold text-lg ">
                  &#8377; {totalAmount}
                </span>
              </p>
              <p className="flex items-center gap-4 text-base">
                Shipping
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total{" "}
              <span className="text-xl font-bold">&#8377; {totalAmount} </span>
            </p>
            <button
              onClick={handleCheckout}
              className=" text-base  w-full bg-black text-white py-3 mt-6 hover:bg-gray-800 duration-300 rounded-lg"
            >
              Proceed to checkout
            </button>
            {payNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_test_51OD9wtSJ6keK2QukmyYvEzyzIFIuVWBan8tFeN6uHQZRu55Un7lh2BqjPf9c3LTobTaxjbcJHCfebtZMOrEhjyK400mwWbje3d"
                  name="Stellar-Cart Online Shopping"
                  amount={totalAmount * 100}
                  label="Pay to Stellar-Cart"
                  description={`Your Payment amount is ${totalAmount}`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-5 lg:px-0  lg:py-5">
          <p className="text-xl text-red-500 my-2">
            Your Cart is Empty. Please go back to shopping and add products to
            Cart.
          </p>
          <Link
            to={"/"}
            className="flex items-center gap-2 text-gray-600 hover:text-black duration-300"
          >
            <BsArrowLeft /> <p>Go shopping</p>
          </Link>
        </div>
      )}
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

export default Cart;
