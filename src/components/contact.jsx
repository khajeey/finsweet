import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Contact() {
  return (
    <section className="max-w-[1250px] mx-auto my-[100px]">
      <div className="flex justify-between">
        <div>
          <h3 className="tracking-[0.21em]">CONTACT US</h3>
          <h1 className="text-[40px] font-semibold">Have a Question ?</h1>
          <h1 className="text-[40px] font-semibold">
            Let’s Get in Touch with us 👋
          </h1>
          <p>Fill up the Form and ou team will get back to within 24 hrs</p>

          <Box
            component="form"
            sx={{ width: "500px" }}
            noValidate
            autoComplete="off"
            className="flex flex-col gap-4 mt-[40px]"
          >
            <TextField id="standard-basic" label="Name" variant="standard" />
            <TextField id="standard-basic" label="E-mail" variant="standard" />
            <TextField id="standard-basic" label="Subject" variant="standard" />
            <TextField
              multiline
              rows={4}
              id="standard-basic"
              label="Messege"
              variant="standard"
            />
          </Box>
          <button className="bg-[#666DFF] text-white px-[35px] py-[15px] cursor-pointer hover:bg-[#666eff7a] items-center flex gap-3 mt-[70px]">
            Apply Now <HiArrowLongRight />
          </button>
        </div>
        <div className="w-[500px]">
          <img src="/imgs/contact.png" alt="" />
        </div>
      </div>
      <div className="my-[40px]">
        <img src="/imgs/contactMap.png" alt="" />
      </div>
    </section>
  );
}
