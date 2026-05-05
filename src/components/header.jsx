import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="bg-[#232536]">
            <div className="max-w-[1250px] m-auto flex justify-between items-center py-5">
            <h1 className="text-3xl text-white">
                Finsweet
            </h1>
            <ul className="text-gray-400 flex gap-9">
                <Link to="/company" className="hover:text-gray-50 cursor-pointer">Company</Link>
                <Link to="/career" className="hover:text-gray-50 cursor-pointer">Career</Link>
                <Link to="/blog" className="hover:text-gray-50 cursor-pointer">Blog</Link>
                <Link to="/contact" className="hover:text-gray-50 cursor-pointer">Contact us</Link>
                <Link to="/clone" className="hover:text-gray-50 cursor-pointer">Clone project</Link>
            </ul>
        </div>
        </div>
    )
}

// const navigate = useNavigate()
//     return(
        
//             <div className="max-w-[1200px] mt-[50px] mx-auto flex justify-between py-[20px]">
//                 <img className="cursor-pointer" onClick={() => navigate("/")} src="/logo.png" alt="" />