import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#232536]">
      <div className="max-w-[1250px] m-auto flex justify-between items-center py-5">
        <h1
          className="text-3xl text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          Finsweet
        </h1>
        <ul className="text-gray-400 flex gap-9">
          <Link to="/company" className="hover:text-gray-50 cursor-pointer">
            Company
          </Link>
          <Link to="/career" className="hover:text-gray-50 cursor-pointer">
            Career
          </Link>
          <Link to="/blog" className="hover:text-gray-50 cursor-pointer">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-gray-50 cursor-pointer">
            Contact us
          </Link>
        </ul>
      </div>
    </div>
  );
}
