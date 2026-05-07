import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Company() {
  const team = [
    { number: 6, name: "Javena Melo", position: "Support Assistant" },
    { number: 7, name: "Caleb Norton", position: "Project Manager" },
    { number: 8, name: "Ariana Blake", position: "CEO" },
    { number: 9, name: "Derek Coleman", position: "UI Designer" },
    { number: 10, name: "Sophia Turner", position: "HR Manager" },
    { number: 11, name: "Marcus Reed", position: "Support Assistant" },
    { number: 12, name: "Lena Brooks", position: "Project Manager" },
    { number: 13, name: "Lena Kim", position: "Developer" },
  ];
  return (
    <>
      <main>
        <section className="w-[1250px] mx-auto mt-[50px] flex flex-col gap-10">
          <div className="flex justify-end">
            <img className="rotate-90" src="/icons/shape.svg" alt="" />
          </div>
          <div className="w-[600px]">
            <h3 className="tracking-[0.21em]">COMPANY</h3>
            <h1 className="text-[40px] font-semibold">
              Award-winning Company seen and used by millions around the world.
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized.{" "}
            </p>
          </div>
          <div className="flex gap-3">
            <img src="/imgs/comp-1.png" alt="" />
            <img src="/imgs/comp-2.png" alt="" />
            <img src="/imgs/comp-3.png" alt="" />
          </div>

          <div className="flex justify-between">
            <div className="w-[500px]">
              <p className="font-semibold">Our Story 👇 </p>
              <h1 className="text-[40px] font-semibold">
                From Startups to Titans of Industry
              </h1>
              <p>
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic unsatiable saw his giving Remain expense of gay
                produce excited perceived do an a china mean its so ye when in
                explained Hearts am next over match mr partiality not shoud
                latter thus as out no passed forming middleton exercise up
              </p>
            </div>

            <div className="bg-[#FFE6D2] px-[100px] py-[20px] grid grid-cols-2 gap-20">
              <div className="flex flex-col gap-2">
                <p className="text-[30px] font-semibold">1560+</p>
                <img src="/icons/long-shape.svg" alt="" />
                <h4>Project Delivered</h4>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[30px] font-semibold">100+</p>
                <img src="/icons/long-shape.svg" alt="" />
                <h4>Project Delivered</h4>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[30px] font-semibold">950+</p>
                <img src="/icons/long-shape.svg" alt="" />
                <h4>Project Delivered</h4>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[30px] font-semibold">10 yrs</p>
                <img src="/icons/long-shape.svg" alt="" />
                <h4>Project Delivered</h4>
              </div>
            </div>
          </div>

          <img src="/imgs/comp-4.png" alt="" />
        </section>

        <section className="bg-[#ecf8f9] mt-[100px]">
          <div className="max-w-[1250px] m-auto h-lvh flex justify-between items-center">
            <div className="max-w-[600px]">
              <p className="font-semibold text-[14px] tracking-[0.21em]">
                OUR EXPERTISE
              </p>
              <h2 className="font-[600] text-[48px]">
                We want to get local identification in every corner of the world
                in this era of global citizenship
              </h2>
              <p className="font-[300] text-[16px] leading-8">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position
                concluded.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex items-center px-[70px] py-[20px] gap-4 bg-white">
                <div>
                  <img src="/icons/sec3-1.svg" alt="" />
                </div>
                <div>
                  <h3 className="font-[600] text-[16px]">On Time Delivery</h3>
                  <p className="font-[300] text-[13px]">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </div>

              <div className="flex items-center px-[70px] py-[20px] gap-4 bg-white">
                <div>
                  <img src="/icons/sec3-2.svg" alt="" />
                </div>
                <div>
                  <h3 className="font-[600] text-[16px]">Best Quality</h3>
                  <p className="font-[300] text-[13px]">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </div>

              <div className="flex items-center px-[70px] py-[20px] gap-4 bg-white">
                <div>
                  <img src="/icons/sec3-3.svg" alt="" />
                </div>
                <div>
                  <h3 className="font-[600] text-[16px]">Support Assist</h3>
                  <p className="font-[300] text-[13px]">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </div>
              <img className="mt-[-30px]" src="/icons/2long-shape.svg" alt="" />
            </div>
          </div>
        </section>

        <section className="w-[1250px] mx-auto my-[20px] flex flex-col gap-10">
          <div className="w-[600px]">
            <h3 className="tracking-[0.21em]">OUR VISION</h3>
            <h1 className="text-[40px] font-semibold">
              We want to get local identification in every corner of the world
              in this era of global citizenship.
            </h1>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>
          <div className="">
            <img src="/imgs/comp-5.png" alt="" />
          </div>
        </section>

        <section className="w-[1250px] mx-auto  flex flex-col gap-10">
          <div className="w-[600px]">
            <h3 className="tracking-[0.21em]">MEET OUR TEAM</h3>
            <h1 className="text-[40px] font-semibold">
              Teamwork is the only way we work
            </h1>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable.
            </p>
          </div>

          <div className="grid grid-cols-4 ">
            {team.map((item) => (
              <div key={item.number} className="relative group overflow-hidden">
                <Link
                  to="/team"
                  state={{
                    img: `/imgs/comp-${item.number}.png`,
                    name: item.name,
                    position: item.position,
                  }}
                >
                  <img src={`/imgs/comp-${item.number}.png`} alt="" />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center px-6 cursor-pointer">
                    <h2 className="text-white text-2xl font-bold">
                      {item.name}
                    </h2>
                    <p className="text-gray-300 mb-4">{item.position}</p>

                    <div className="flex gap-4 text-white text-xl">
                      <FaTwitter />
                      <FaInstagram />
                      <FaLinkedin />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-[1250px] m-auto bg-blue-600 relative">
          <img className="" src="/icons/shape.svg" alt="" />
          <img
            className="w-[335px] rotate-90 absolute right-[-167px] top-[167px]"
            src="/icons/2long-shape.svg"
            alt=""
          />
          <div className="flex justify-between px-[60px] py-[60px]">
            <div className="text-white max-w-[450px]">
              <p className="font-[500] text-[14px] tracking-[0.21em]">
                NEWSLETTER
              </p>
              <h2 className="font-[600] text-[36px]">
                Subscribe our News Letter to get Latest Updates.
              </h2>
            </div>
            <input
              className="bg-white h-[50px] w-[400px] px-[20px] mt-[50px]"
              type="gmail"
              placeholder="Paresh@Pixeto.com"
            />
          </div>
        </section>
      </main>
    </>
  );
}
