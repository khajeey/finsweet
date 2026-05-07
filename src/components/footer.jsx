import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="mt-[40px]">
        <div className="w-[1250px] mx-auto flex justify-between mb-[20px]">
          <div className="flex flex-col gap-3 w-[500px]">
            <img className="w-[30px]" src="/icons/shape.svg" alt="" />
            <h1 className="text-[50px] font-semibold">
              Let's make something special
            </h1>
            <h3 className="text-[24px] font-semibold">Let's talk! 🤙 </h3>
            <p className="text-[18px] font-[500]">020 7993 2905</p>
            <p className="text-[18px] font-[500]">hi@finsweet.com</p>
            <hr className="text-gray-300 w-[300px]" />
            <p className="w-[250px] text-[14px]">
              DLF Cybercity, Bhubaneswar, India, &52050
            </p>
          </div>

          <div className="grid grid-cols-3 gap-10 mt-[40px]">
            <ul className="text-[20px] font-semibold flex flex-col gap-4">
              <Link className="hover:text-gray-500" to="/">
                Home
              </Link>
              <Link className="hover:text-gray-500" to="/company">
                Company
              </Link>
              <Link className="hover:text-gray-500" to="/career">
                Career
              </Link>
              <Link className="hover:text-gray-500" to="/news">
                News
              </Link>
            </ul>
            <ul className="flex flex-col gap-3">
              <p className="mb-[10px] font-semibold text-[20px]">Service</p>
              <li>Technical support</li>
              <li>Testing</li>
              <li>Development</li>
              <li>AWS/Azure </li>
              <li>Consulting</li>
              <li>Information Technology</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <p className="mb-[10px] font-semibold text-[20px]">Resourses</p>
              <li>About Us</li>
              <li>Testimonial</li>
              <Link to="/privacy">
                <li>Privacy Policy</li>
              </Link>
              <li>Terms of use</li>
              <li>Blog</li>
            </ul>

            <div className="col-start-3">
              <button className="flex gap-3 items-center cursor-pointer hover:text-gray-500">
                Contact Us <HiArrowLongRight />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#FFE6D2] py-[20px]">
          <div className="w-[1250px] mx-auto flex justify-between">
            <div className="flex gap-5">
              <h1>Finsweet</h1>
              <p>©2021 Finsweet</p>
            </div>
            <div className="flex gap-5">
              <FaFacebook className="cursor-pointer hover:scale-150" />
              <FaTwitter className="cursor-pointer hover:scale-150" />
              <FaInstagram className="cursor-pointer hover:scale-150" />
              <FaLinkedin className="cursor-pointer hover:scale-150" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
