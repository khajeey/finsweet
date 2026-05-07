import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Checkbox } from "@mui/material";

export default function CareerInner() {
  const location = useLocation();

  const { title } = location.state;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const courses = [
    {
      title: "Full Stack Developer",
      description:
        "Build and maintain full-stack web applications using modern frameworks. Work across frontend and backend systems.",
      details: {
        location: "Remote, Italia",
        experience: "2 - 5 Years",
        department: "Product Engineering",
        openings: 5,
      },
      requirements: [
        "Strong knowledge of React and Node.js",
        "Experience with REST APIs",
        "Understanding of databases (MongoDB / SQL)",
        "Good problem-solving skills",
      ],
      responsibilities: [
        "Develop scalable web applications",
        "Collaborate with designers and backend engineers",
        "Optimize application performance",
        "Maintain clean and reusable code",
      ],
    },

    {
      title: "Testing Engineer",
      description:
        "Ensure product quality by designing and executing test cases for web and mobile applications.",
      details: {
        location: "Remote, UK",
        experience: "1 - 3 Years",
        department: "QA Engineering",
        openings: 3,
      },
      requirements: [
        "Knowledge of manual testing",
        "Understanding of automation tools (Selenium preferred)",
        "Attention to detail",
      ],
      responsibilities: [
        "Write and execute test cases",
        "Report bugs and issues",
        "Collaborate with developers",
      ],
    },

    {
      title: "HR Manager",
      description:
        "Manage recruitment, employee relations, and HR policies across the company.",
      details: {
        location: "On-site, USA",
        experience: "3 - 6 Years",
        department: "Human Resources",
        openings: 2,
      },
      requirements: [
        "Experience in HR management",
        "Strong communication skills",
        "Knowledge of labor laws",
      ],
      responsibilities: [
        "Handle recruitment process",
        "Manage employee onboarding",
        "Maintain HR policies",
      ],
    },

    {
      title: "Product Designer",
      description:
        "Design user-friendly interfaces and experiences for web and mobile products.",
      details: {
        location: "Remote, India",
        experience: "2 - 4 Years",
        department: "Design",
        openings: 4,
      },
      requirements: [
        "Proficiency in Figma or Adobe XD",
        "Understanding of UX principles",
        "Portfolio of design work",
      ],
      responsibilities: [
        "Create UI/UX designs",
        "Work with developers to implement designs",
        "Improve user experience",
      ],
    },

    {
      title: "WordPress Developer",
      description:
        "Develop and customize WordPress websites with performance and SEO in mind.",
      details: {
        location: "Remote, Canada",
        experience: "1 - 3 Years",
        department: "Web Development",
        openings: 3,
      },
      requirements: [
        "Strong knowledge of WordPress",
        "Experience with PHP and themes",
        "Basic frontend skills",
      ],
      responsibilities: [
        "Build and maintain WordPress sites",
        "Customize themes and plugins",
        "Optimize website performance",
      ],
    },

    {
      title: "Jr. QA Tester",
      description:
        "Assist in testing software applications and ensuring product stability.",
      details: {
        location: "Remote, USA",
        experience: "0 - 2 Years",
        department: "QA",
        openings: 6,
      },
      requirements: [
        "Basic understanding of testing",
        "Attention to detail",
        "Willingness to learn automation",
      ],
      responsibilities: [
        "Execute test cases",
        "Report bugs",
        "Assist senior QA engineers",
      ],
    },

    {
      title: "Sr. UX Designer",
      description:
        "Lead UX design strategies and improve user experience across products.",
      details: {
        location: "Hybrid, UK",
        experience: "4 - 7 Years",
        department: "Design",
        openings: 2,
      },
      requirements: [
        "Strong UX portfolio",
        "Experience in user research",
        "Leadership skills",
      ],
      responsibilities: [
        "Lead UX strategy",
        "Conduct user research",
        "Mentor junior designers",
      ],
    },

    {
      title: "Social Media Manager",
      description:
        "Manage and grow company presence across social media platforms.",
      details: {
        location: "Remote, India",
        experience: "2 - 4 Years",
        department: "Marketing",
        openings: 3,
      },
      requirements: [
        "Experience in social media marketing",
        "Content creation skills",
        "Knowledge of analytics tools",
      ],
      responsibilities: [
        "Plan social media campaigns",
        "Create engaging content",
        "Monitor engagement metrics",
      ],
    },

    {
      title: "Golang Developer",
      description:
        "Develop backend services and APIs using Go for high-performance systems.",
      details: {
        location: "Remote, USA",
        experience: "2 - 5 Years",
        department: "Backend Engineering",
        openings: 4,
      },
      requirements: [
        "Strong Golang knowledge",
        "Experience with microservices",
        "Understanding of distributed systems",
      ],
      responsibilities: [
        "Build backend services",
        "Optimize system performance",
        "Write scalable APIs",
      ],
    },
  ];

  const selectedCourse = courses.find((course) => course.title === title);
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  return (
    <>
      <section className="max-w-[1250px] mx-auto my-[100px]">
        <div className="flex justify-between">
          <div className="max-w-[600px]">
            <p className="font-semibold text-[14px] tracking-[0.21em]">
              CAREER AT Ether
            </p>
            <h2 className="font-[600] text-[48px] mt-[20px]">
              {selectedCourse.title}
            </h2>
            <p className="font-[300] text-[16px] leading-8 max-w-[500px] mb-[40px]">
              {selectedCourse.description}
            </p>
            <button className="bg-[#666DFF] text-white px-[35px] py-[15px] cursor-pointer hover:bg-[#666eff7a] items-center flex gap-3">
              Apply Now <HiArrowLongRight />
            </button>
          </div>

          <div className="bg-[#FFE0C7]  ">
            <div className="flex justify-end">
              <img className="rotate-90" src="/icons/shape.svg" alt="" />
            </div>
            <div className="px-[100px] py-[20xp] flex flex-col gap-5">
              <h3 className="text-xl font-semibold">Job Description</h3>
              <p>
                {selectedCourse.details.location},
                {selectedCourse.details.experience} Years Of Experience
              </p>
              <p>Department: {selectedCourse.details.department}</p>
              <p>
                Full Time {selectedCourse.details.openings} Position Available.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#ECF8F9] px-[100px] py-[50px] my-[50px]">
          <Box sx={{ width: "100%" }}>
            <div className="mx-auto w-[500px]  ">
              <Tabs value={value} onChange={handleChange}>
                <Tab
                  sx={{ fontSize: "18px", fontWeight: "bold", color: "black" }}
                  label="Details"
                />
                <Tab
                  sx={{ fontSize: "18px", fontWeight: "bold", color: "black" }}
                  label="Requirements"
                />
                <Tab
                  sx={{ fontSize: "18px", fontWeight: "bold", color: "black" }}
                  label="Responsibilities"
                />
              </Tabs>
            </div>
            <hr className="text-gray-300" />

            {value === 0 && (
              <Box sx={{ p: 3 }}>
                <ul className="flex flex-col gap-7 list-disc ">
                  <li>
                    Create and edit video content for multi-platform use and
                    distribution for social media channels (Facebook, Youtube,
                    Instagram, Snapchat, IGTV, Facebook Stories and Instagram
                    Stories).
                  </li>
                  <li>
                    Design & Create highly engaging industry-related content in
                    both photo, gif & video format
                  </li>
                  <li>Publish Posts on various social media channels</li>
                  <li>
                    Promote content on social networks and monitor engagement
                    (e.g. comments and shares)
                  </li>
                </ul>
              </Box>
            )}
            {value === 1 && (
              <Box sx={{ p: 3 }}>
                <ul className="flex flex-col gap-7 list-disc ">
                  {selectedCourse.requirements.map((item, key) => (
                    <li key={key}>{item}</li>
                  ))}
                </ul>
              </Box>
            )}
            {value === 2 && (
              <Box sx={{ p: 3 }}>
                <ul className="flex flex-col gap-7 list-disc ">
                  {selectedCourse.responsibilities.map((item, key) => (
                    <li key={key}>{item}</li>
                  ))}
                </ul>
              </Box>
            )}
          </Box>
        </div>
      </section>

      <section className="max-w-[1250px] mx-auto">
        <h2 className="font-semibold text-3xl mb-[30px]">Apply Now</h2>
        <Box
          component="form"
          sx={{ "& > :not(style)": { width: "1200px", mt: "10px" } }}
          noValidate
          autoComplete="off"
        >
          <div className="grid grid-cols-2 gap-10">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Mobile No"
              variant="outlined"
            />
            <TextField
              multiline
              rows={4}
              className="col-span-2"
              id="outlined-basic"
              label="Why do you thing you are good fit for Ether?"
              variant="outlined"
            />
          </div>
          <div className="flex my-[30px]">
            <Checkbox {...label} />
            <p>
              {" "}
              I agree to accept the privacy policy, We will add your contact
              details provided in this form to our system for contacting you
              regarding your request.
            </p>
          </div>
          <div>
            <button className="bg-[#666DFF] text-white px-[35px] py-[15px] cursor-pointer hover:bg-[#666eff7a] items-center flex gap-3">
              Submit Application <HiArrowLongRight />
            </button>
          </div>
        </Box>
      </section>
    </>
  );
}
