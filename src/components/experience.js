import React, { useState } from 'react';
import { Button, Container, Form, Stack, Table } from 'react-bootstrap';

import TabNavigation from './TabNavigation'
import { useLocation } from 'react-router-dom';
const Experience = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const city = queryParams.get('city');
  const initialFormData = {
    organization: '',
    designation: '',
    responsibilities: '',
    joiningDate: '',
    relievingDate: '',
    totalExperience: '',
    experienceUnit: 'No'
  };

  const [formData, setFormData] = useState(initialFormData);
  const [tableEntries, setTableEntries] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setTableEntries([...tableEntries, formData]);

    setFormData(initialFormData);
  };

  const handleNext = () => {
    const nextUrl = `/skills?email=${encodeURIComponent(email)}&city=${encodeURIComponent(city)}`;
    window.location.href = nextUrl;
    console.log('Next button clicked!');
  };

  const handlePrevious = () => {
    const nextUrl = `/educationalDetail?email=${encodeURIComponent(email)}&city=${encodeURIComponent(city)}`;
    window.location.href = nextUrl;
    console.log('Previous button clicked!');
  };

  return (
    <Container>
      <div style={{ position: "static", marginBottom: "10px", marginTop: "24rem" }}>
        <TabNavigation />
      </div>
      <Form onSubmit={handleSubmit} >
        <Stack direction='vertical' gap={3} >

          <Form.Group controlId="formExperienceUnit">
            <Form.Label style={{ marginRight: "10px" }}>Is Experience :</Form.Label>
            <Form.Check
              inline
              type="radio"
              label="Yes"
              name="experienceUnit"
              value="Yes"
              checked={formData.experienceUnit === 'Yes'}
              onChange={handleChange}
            />
            <Form.Check
              inline
              type="radio"
              label="No"
              name="experienceUnit"
              value="No"
              checked={formData.experienceUnit === 'No'}
              onChange={handleChange}
            />
          </Form.Group>
          <Stack direction='horizontal' gap={5} style={{ marginTop: "10px" }}>
            <Form.Group controlId="formOrganization">
              <Form.Label>Organization Name</Form.Label>
              <Form.Control
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDesignation">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
              />
            </Form.Group>
          </Stack>
          <Form.Group controlId="formResponsibilities">
            <Form.Label style={{ marginTop: "10px" }}>Responsibilities</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
            />
          </Form.Group>
          <Stack direction='horizontal' gap={5} style={{ marginTop: "10px" }}>
            <Form.Group controlId="formJoiningDate">
              <Form.Label>Joining Date</Form.Label>
              <Form.Control
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formRelievingDate">
              <Form.Label>Relieving Date</Form.Label>
              <Form.Control
                type="date"
                name="relievingDate"
                value={formData.relievingDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Stack>
          <Form.Group controlId="formTotalExperience">
            <Form.Label style={{ marginTop: "10px" }}>Total Experience :<br />No. of months or years</Form.Label>
            <Form.Control
              type="number"
              name="totalExperience"
              value={formData.totalExperience}
              onChange={handleChange}
              style={{ width: "25%" }}
            />
          </Form.Group>


          <button type="submit" className="btn btn-primary" style={{ width: "25%", float: "right" }}>+ Add New</button>
        </Stack>
      </Form>
      {
        tableEntries.length > 0 &&
        (<Table striped bordered>
          <thead>
            <tr>
              <th>Organization</th>
              <th>Designation</th>
              <th>Responsibilities</th>
              <th>Total Experience</th>
            </tr>
          </thead>
          <tbody>
            {tableEntries.map((entry, index) => (<tr key={index}>
              <td>{entry.organization}</td>
              <td>{entry.designation}</td>
              <td>{entry.responsibilities}</td>
              <td>{entry.totalExperience}</td>
            </tr>))
            }
          </tbody>
        </Table>)}
      <Stack direction="horizontal" gap={4} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3rem' }}>
        <Button type="button" onClick={handlePrevious} variant="outline-dark">Previous</Button>
        <Button type="button" onClick={handleNext} variant="primary" style={{ marginLeft: '1rem' }}>Next</Button>

      </Stack>
      <style>
        {`
          @media (max-width: 768px) {
            /* Adjust form styles for smaller screens */
            form {
              display: flex;
              flex-direction: column;
            }
            .form-group {
              margin-bottom: 1rem;
            }
            .form-label {
              margin-bottom: 0.5rem;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default Experience;
