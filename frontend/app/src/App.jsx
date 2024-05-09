import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Reg from "./prof-reg";
import Doctor from "./doctor";
import ProfLog from "./prof-log";
import NonReg from "./nonprof-reg";
import NonLog from "./nonprof-log";
import Doctors from "./docs";
import Lawyers from "./laws"
import Teachers from "./teachs"
import DoctorsCat from "./doctor-category";
import Proffessional from "./proffessional";
import Appointment from "./appointments";
import LawyersCat from "./lawyer-category";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prof-reg" element={<Reg />} />
        <Route path="/nonprof-reg" element={<NonReg />} />
        <Route path="/prof-log" element={<ProfLog />} />
        <Route path="/nonprof-log" element={<NonLog />} />
        <Route path="/doc-name" element={<Doctor/>} />
        <Route path="/lawyers" element={<Lawyers/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/teachers" element={<Teachers/>} />
        <Route path="/doctor-category" element={<DoctorsCat/>} />
        <Route path="/lawyers-category" element={<LawyersCat/>} />
        <Route path="/lawyers" element={<Lawyers/>} />
        <Route path="/proffessional" element={<Proffessional/>} />
        <Route path="/appointment" element={<Appointment/>} />
      </Routes>
    </Router>
  );
}

export default App;
