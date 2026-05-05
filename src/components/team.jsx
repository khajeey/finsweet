import { Avatar, Stack } from "@mui/material";
import { HiArrowLongRight } from "react-icons/hi2";
import { useLocation } from "react-router-dom";

export default function Team() {
  const location = useLocation();
  const { img, name, position} = location.state || {};

  return (
    <>
    <section className="w-[1250px] mx-auto flex flex-col items-center justify-center mt-[50px] gap-[20px]">
      <Stack >
        <Avatar alt={name} src={img} sx={{ width: 300, height: 300 }} />
      </Stack>
      <h1 className="text-[30px] font-semibold">{name}</h1>
      <p>{position}</p>
      <p className="w-[500px] text-center text-[18px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit placeat, dolor fugit adipisci quos. Ullam quam possimus autem animi.</p>
    </section>
    
    <section className="bg-[#ecf8f9] mt-[100px]">
            <div className="max-w-[1250px] m-auto h-lvh">
                <div className="pt-[100px]">
                    <h2 className="font-[600] text-[48px]">Blog posts from {name}</h2>
                </div>
                <div className="flex justify-between mt-[100px]">
                    <div className="flex bg-white justify-between">
                        <img className="w-[300px]" src="/imgs/sec6-1.png" alt="" />
                        <div className="p-[20px]">
                            <p className="text-gray-500">Jan 19, 2021</p>
                            <h2 className="font-[600] text-[24px] w-[250px] pb-[20px]">Today’s best design trends for digital products</h2>
                            <a className="text-blue-700 items-center flex gap-4" href="#">Read more <HiArrowLongRight /></a>
                        </div>
                    </div>

                    <div className="flex bg-white justify-between">
                        <img className="w-[300px]" src="/imgs/sec6-2.png" alt="" />
                        <div className="p-[20px]">
                            <p className="text-gray-500">Jan 19, 2021</p>
                            <h2 className="font-[600] text-[24px] w-[250px] pb-[20px]">Today’s best design trends for digital products</h2>
                            <a className="text-blue-700 items-center flex gap-4" href="#">Read more <HiArrowLongRight /> </a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    </>
    
  );
}