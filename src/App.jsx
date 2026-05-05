import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Company from "./components/company";
import Header from "./components/header";
import Footer from "./components/footer";
import Team from "./components/team";
import Career from "./components/career";

export default function App() {
  return(
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path="/" element={<Main/>} />
        <Route  path="/company" element={<Company/>} />
        <Route path="/team" element={<Team />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}