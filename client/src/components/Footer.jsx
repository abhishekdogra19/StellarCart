import { paymentLogo, darkLogo } from "../assets/images";
import { ImGithub } from "react-icons/im";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsPaypal, BsPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={darkLogo} alt="logoLight" />
          <p className=" Itext-white text-sm tracking-wide">© ReactBD.com</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white  duration-300 cursor-pointer" />
            <FaYoutube className=" hover:text-white duration -300 cursor-pointer" />
            <FaFacebook className=" hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className=" hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className=" hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2x1 font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2 ">
            <p>Ad, Mandi, Smf-fdsdf</p>
            <p>Mobile: +91 9382393232</p>
            <p>Phone: +91 9122593332</p>
            <p>e-mail: stellarcart@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2x1 font-semibold Itext-white mb-4">profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        <div className="flex  flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
