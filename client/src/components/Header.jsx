import { Link } from "react-router-dom";
import { Logo, shoppingBag } from "../assets/images";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.stellarCart.productData);
  const userInfo = useSelector((state) => state.stellarCart.userInfo);
  return (
    <div className="w-full h-20 bg-[#DEDEDE] border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <div>
            <img src={Logo} alt="" className="w-28" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="hidden sm:flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to={"/cart"}>
            <div className="relative">
              <img className="w-10" src={shoppingBag} alt="" />
              {/*//! Some Changes */}
              <span className="absolute w-10 top-4 left-0 lg:top-2 lg:left-0 text-xs lg:text-xl flex items-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link className="flex gap-1 items-center p-1" to={"/login"}>
            <img
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="userLogo"
              className="w-6 h-6 lg:w-10 lg:h-10 rounded-full object-cover "
            />
            {userInfo && (
              <p className="text-xs font-titleFont font-semibold underline underline-offset-2">
                {userInfo.name}
              </p>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
