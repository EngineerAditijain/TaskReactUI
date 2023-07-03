import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeneralDetail from './generalDetail';
import TabNavigation from './TabNavigation';
import EducationalDetail from './educationalDetail';
import ProfessionalExperience from './experience';
import Skills from './skills';
import AditionalDetail from './additionalDetail';
import ContactDetail from './contact';

function AddCandidate() {
  const [activeTab, setActiveTab] = useState('1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
        <TabNavigation activeTab={activeTab} handleTabChange={handleTabChange} />
        <div style={{ marginTop: '55px' }}>
          <Routes>
            <Route path="/generalDetail" element={<GeneralDetail />} />
            <Route path="/educationalDetail" element={<EducationalDetail/>} />
            <Route path="/professionalExperience" element={<ProfessionalExperience/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/additionalDetail" element={<AditionalDetail/>} />
            <Route path="/contact" element={<ContactDetail/>} />
          </Routes>
        </div>
    </Container>
  );
}

export default AddCandidate;
