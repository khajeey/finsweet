import { HiArrowLongRight } from "react-icons/hi2"

export default function Career() {
    const courses = ["Full Stack Developer", "Testing Engineer", "Hr Manager", "Product Designer", "Wordpress Developer", "Jr. QA Tester", "Sr. UX Designer", "Social Media Manager", "Golang Developer"]
    return(
        <>
            <section className="w-[1250px] mx-auto mt-[50px]" >
                <div className="max-w-[700px] mx-auto self-center text-center">
                    <p className="font-semibold text-[14px] tracking-[0.21em]">CAREER AT FINSWEET</p>
                    <h2 className="font-[600] text-[48px]">We hired people who are Always Passionate about what they do</h2>
                    <p className="font-[300] text-[16px] leading-8">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
                </div>
                    <h1 className="bg-[url('/imgs/comp-1.png')] bg-cover bg-bottom-left text-transparent bg-clip-text text-[200px] text-center font-bold">Careers</h1>
                    <div className="text-center w-[200px] self-center mx-auto">
                        <p className="">See Our open positions 👇</p>
                    </div>
                <div className="grid grid-cols-3 bg-[#ECF8F9] gap-10 p-[40px] mt-[50px]">
                    {courses.map((course) =>(
                        <div className="bg-white py-[50px] px-[40px]">
                            <h3 className="text-[20px] font-semibold">{course}</h3>
                            <p className="text-gray-400 font-[300] mt-[10px]">Bengaluru · Full Time </p>
                            <p className="text-gray-400 font-[300] mb-[40px]">$10K - $18K · No equity </p>
                            <button className="flex gap-3 items-center text-blue-600 cursor-pointer hover:text-blue-950">
                                Apply Now <HiArrowLongRight />
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}