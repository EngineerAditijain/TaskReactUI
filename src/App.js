import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack } from 'react-bootstrap';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import SideBox from './components/sideBox';
import AddCandidate from './components/addCandidate';
import GeneralDetail from './components/generalDetail';
import EducationalDetail from './components/educationalDetail';
import ProfessionalExperience from './components/experience';
import Skills from './components/skills';
import AditionalDetail from './components/additionalDetail';
import ContactDetail from './components/contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <div className="container"> */}
        <Container>
          <Stack direction='horizontal' gap={3} style={{display:"flex",justifyContent:"space-between"}}>
            <div className="sidebar1">
              <Sidebar />
            </div>
            <div className='contents' >
              <Routes>
                <Route path="/addCandidate" element={<AddCandidate />} />
                <Route path="/generalDetail" element={<GeneralDetail />} />
                <Route path="/educationalDetail" element={<EducationalDetail />} />
                <Route path="/professionalExperience" element={<ProfessionalExperience/>} />
                <Route path="/skills" element={<Skills/>} />
                <Route path="/additionalDetail" element={<AditionalDetail/>} />
                <Route path="/contact" element={<ContactDetail/>} />

              </Routes>
            </div>
            <div className="sidebar2">
              <SideBox />
            </div>
          </Stack>
        </Container>
        {/* </div> */}

      </Router>
    </>
  );
}

export default App;
