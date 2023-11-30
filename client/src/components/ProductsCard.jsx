/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/stellarCartSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = ({ item }) => {
  const dispatch = useDispatch();
  const id = item.title;
  const remvoeSpace = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const rootId = remvoeSpace(id);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: item,
      },
    });
  };
  return (
    <div className="group ">
      <div
        onClick={handleClick}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
      </div>
      <div>
        <div className="w-full border-[1px] px-2 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-titleFont text-base font-bold">
                {item.title.substring(0, 15)}
              </h2>
            </div>
            <div className="flex justify-center gap-2 text-sm relative overflow-hidden w-28 hover:cursor-pointer">
              <div className="flex gap-2 relative justify-end transform group-hover:translate-y-28 duration-500">
                <p className="line-through text-gray-500">
                  &#8377;{item.oldPrice * 10}
                </p>
                <p>&#8377;{item.price * 10}</p>
              </div>
              <p
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description,
                    })
                  ) & toast.success(`${item.title} is added`)
                }
                className="absolute z-20 w-[100px] top-0 transform -translate-y-32 group-hover:translate-y-0 duration-500 text-gray-500 flex items-center gap-2"
              >
                Add to cart
                <span>
                  <BsArrowRight />
                </span>
              </p>
            </div>
          </div>

          <dir></dir>
        </div>
      </div>
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

export default ProductsCard;
