import React, { useState } from 'react';
import { Container, Form, Button, Table, Stack } from 'react-bootstrap';
import TabNavigation from './TabNavigation'
import { useLocation } from 'react-router-dom';

const EducationalDetail = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const city = queryParams.get('city');
  const [degreeName, setDegreeName] = useState('');
  const [yearOfPassing, setYearOfPassing] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [tableEntries, setTableEntries] = useState([]);

  const handleAddEntry = () => {
    if (degreeName && yearOfPassing && collegeName) {
      const newEntry = { degreeName, yearOfPassing, collegeName };
      setTableEntries([...tableEntries, newEntry]);
      setDegreeName('');
      setYearOfPassing('');
      setCollegeName('');
    }
  };
  const handleNext = () => {
    // Perform any actions or validations before moving to the next step
    const nextUrl = `/professionalExperience?email=${encodeURIComponent(email)}&city=${encodeURIComponent(city)}`;
  window.location.href = nextUrl;
    console.log('Next button clicked!');
  };

  const handlePrevious = () => {
    // Perform any actions or validations before moving to the previous step
    const nextUrl = `/generalDetail?email=${encodeURIComponent(email)}&city=${encodeURIComponent(city)}`;
    window.location.href = nextUrl;
    console.log('Previous button clicked!');
  };
  return (
    <Container style={{ marginTop: '10rem' }}>
      <div style={{position:"static",marginTop:"12rem"}}> 
      <TabNavigation />
      </div>
      <Stack direction='vertical' gap={4}>
        <Stack direction='vertical' gap={3} style={{ marginTop: '3rem' }}>
          <Form >
            <Form.Group controlId="formDegreeName">
              <Form.Label>Degree Name</Form.Label>
              <Form.Control
                type="text"
                value={degreeName}
                onChange={(e) => setDegreeName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formYearOfPassing">
              <Form.Label>Year of Passing</Form.Label>
              <Form.Control
                type="text"
                value={yearOfPassing}
                onChange={(e) => setYearOfPassing(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formCollegeName">
              <Form.Label>College Name</Form.Label>
              <Form.Control
                type="text"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddEntry} style={{ marginTop: "5px" }}>
              + Add New
            </Button>
          </Form>
        </Stack>
        {tableEntries.length > 0 && (
          <Table striped bordered>
            <thead>
              <tr>
                <th>Degree Name</th>
                <th>Year of Passing</th>
                <th>College Name</th>
              </tr>
            </thead>
            <tbody>
              {tableEntries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.degreeName}</td>
                  <td>{entry.yearOfPassing}</td>
                  <td>{entry.collegeName}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <Stack direction="horizontal" gap={4} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3rem' }}>
      <Button type="button" onClick={handlePrevious} variant="outline-dark">Previous</Button>
        <Button type="button" onClick={handleNext} variant="primary" style={{ marginLeft: '1rem' }}>Next</Button>
        
      </Stack>
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

export default EducationalDetail;
