import Footer from "./footer";

export default function Main() {
  return (
    <>
      <main>
        <section>
          <div className="bg-[#232536] h-lvh ">
            <div className="max-w-[1250px] m-auto">
              <div className="flex justify-between items-center">
                <div className="max-w-[500px] mt-[30px]">
                  <h1 className="text-[50px] leading-120% text-white">
                    Transform Your Idea Into Reality with Finsweet
                  </h1>
                  <p className="text-[16px] text-gray-400 font-[400] pb-[32px] pt-[24px]">
                    The entire Finsweet team knows what's good with Webflow and
                    you can too with 1 week and a good attitude.
                  </p>
                  <button className="bg-[#666DFF] text-white px-[35px] py-[15px] cursor-pointer hover:bg-[#666eff7a]">
                    Request Quote
                  </button>
                </div>
                <div>
                  <img
                    className="max-w-[420px] mt-[50px]"
                    src="/imgs/hero.png"
                    alt=""
                  />
                </div>
              </div>

              <div>
                <img className="mt-[20px]" src="/imgs/hero2.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1250px] m-auto h-lvh mt-[100px]">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-[14px] tracking-[0.21em]">
                ABOUT US
              </p>
              <h2 className="font-[600] text-[48px] leading-121%">
                The company leads entire webdesign process from concept to
                delivery.
              </h2>
            </div>
            <div>
              <h2 className="font-[600] text-[36px] leading-150%">
                The Era Of Technology.
              </h2>
              <p className="font-[300] text-[16px] leading-8">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position
                concluded.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-2 max-w-[400px] mt-[20px]">
            <img src="/imgs/sec2-1.png" alt="" />
            <img src="/imgs/sec2-2.png" alt="" />
            <img src="/imgs/sec2-3.png" alt="" />
          </div>
          <div className="max-w-[700px] mt-[30px]">
            <img src="/imgs/sec2-b.png" alt="" />
          </div>
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
              <div className="flex items-center px-[90px] py-[20px] gap-4 bg-white">
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

              <div className="flex items-center px-[90px] py-[20px] gap-4 bg-white">
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

              <div className="flex items-center px-[90px] py-[20px] gap-4 bg-white">
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
            </div>
          </div>
        </section>

        <section className="bg-[#FFE6D2]">
          <div className="max-w-[1250px] m-auto h-lvh">
            <div className="max-w-[500px]">
              <p className="font-semibold text-[14px] tracking-[0.21em] pt-[40px]">
                OUR SERVICES
              </p>
              <h1 className="text-[50px] leading-14 font-semibold">
                We build software solutions that solve client's business
                challenges
              </h1>
              <button className="bg-[#666DFF] text-white px-[35px] py-[15px] cursor-pointer hover:bg-[#666eff7a] mt-[15px]">
                Start Project
              </button>
            </div>

            <div className="flex gap-7 mt-[30px]">
              <div className=" px-[90px] py-[20px] bg-white">
                <img src="/icons/sec3-2.svg" alt="" />
                <h3 className="font-[600] text-[16px]">Technical support</h3>
                <p className="font-[400] text-[16px] text-gray-500 mt-[10px] mb-[20px] ">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent names when it comes to world-class
                  service
                </p>
                <a className="text-blue-700" href="#">
                  Read more --
                </a>
              </div>
              <div className=" px-[90px] py-[20px] bg-white">
                <img src="/icons/sec3-1.svg" alt="" />
                <h3 className="font-[600] text-[16px]">Testing managament</h3>
                <p className="font-[400] text-[16px] text-gray-500 mt-[10px] mb-[20px] ">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent names when it comes to world-class
                  service
                </p>
                <a className="text-blue-700" href="#">
                  Read more --
                </a>
              </div>
              <div className=" px-[90px] py-[20px] bg-white">
                <img src="/icons/sec3-2.svg" alt="" />
                <h3 className="font-[600] text-[16px]">Development</h3>
                <p className="font-[400] text-[16px] text-gray-500 mt-[10px] mb-[20px] ">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent names when it comes to world-class
                  service
                </p>
                <a className="text-blue-700" href="#">
                  Read more --
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1250px] m-auto h-lvh mt-[100px]">
          <div className="max-w-[660px]">
            <p className="font-semibold text-[14px] tracking-[0.21em]">
              OUR PROCESS
            </p>
            <h2 className="font-semibold text-[48px] leading-14">
              The process we are working With Our client Worldwide
            </h2>
            <p className="font-[400] text-[16px] leading-8 mt-[20px]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-7 mt-[80px]">
            <div className="flex items-center  gap-4 bg-white border border-gray-400 h-[150px]">
              <div>
                <img className="w-[100px]" src="/icons/sec5-1.svg" alt="" />
              </div>
              <div>
                <h3 className="font-[600] text-[16px]">On Time Delivery</h3>
                <p className="font-[300] text-[13px]">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-4 bg-white border border-gray-400 h-[150px]">
              <div>
                <img className="w-[100px]" src="/icons/sec5-2.svg" alt="" />
              </div>
              <div>
                <h3 className="font-[600] text-[16px]">On Time Delivery</h3>
                <p className="font-[300] text-[13px]">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-4 bg-white border border-gray-400 h-[150px]">
              <div>
                <img className="w-[100px]" src="/icons/sec5-3.svg" alt="" />
              </div>
              <div>
                <h3 className="font-[600] text-[16px]">On Time Delivery</h3>
                <p className="font-[300] text-[13px]">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-4 bg-white border border-gray-400 h-[150px]">
              <div>
                <img className="w-[100px]" src="/icons/sec5-4.svg" alt="" />
              </div>
              <div>
                <h3 className="font-[600] text-[16px]">On Time Delivery</h3>
                <p className="font-[300] text-[13px]">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-4 bg-white border border-gray-400 h-[150px]">
              <div>
                <img className="w-[100px]" src="/icons/sec5-5.svg" alt="" />
              </div>
              <div>
                <h3 className="font-[600] text-[16px]">On Time Delivery</h3>
                <p className="font-[300] text-[13px]">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-4 bg-white border border-gray-400 h-[150px]">
              <div>
                <img className="w-[100px]" src="/icons/sec5-6.svg" alt="" />
              </div>
              <div>
                <h3 className="font-[600] text-[16px]">On Time Delivery</h3>
                <p className="font-[300] text-[13px]">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ecf8f9] mt-[100px]">
          <div className="max-w-[1250px] m-auto h-lvh">
            <div className="pt-[100px]">
              <h2 className="font-[600] text-[48px]">
                Read our latest blogs & news
              </h2>
            </div>
            <div className="flex justify-between mt-[100px]">
              <div className="flex bg-white justify-between">
                <img className="w-[300px]" src="/imgs/sec6-1.png" alt="" />
                <div className="p-[20px]">
                  <p className="text-gray-500">Jan 19, 2021</p>
                  <h2 className="font-[600] text-[24px] w-[250px] pb-[20px]">
                    Today’s best design trends for digital products
                  </h2>
                  <a className="text-blue-700" href="#">
                    Read more --
                  </a>
                </div>
              </div>

              <div className="flex bg-white justify-between">
                <img className="w-[300px]" src="/imgs/sec6-2.png" alt="" />
                <div className="p-[20px]">
                  <p className="text-gray-500">Jan 19, 2021</p>
                  <h2 className="font-[600] text-[24px] w-[250px] pb-[20px]">
                    Today’s best design trends for digital products
                  </h2>
                  <a className="text-blue-700" href="#">
                    Read more --
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1250px] m-auto bg-blue-600 mt-[100px] mb-[100px] flex justify-between px-[60px] py-[60px]">
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
        </section>
      </main>
    </>
  );
}
