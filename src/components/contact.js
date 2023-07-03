import React, { useState } from 'react';
import { Form, Button, Container, Col, Row, Stack } from 'react-bootstrap';

import TabNavigation from './TabNavigation'
import { useLocation } from 'react-router-dom';
const Contact = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const city = queryParams.get('city');
  const initialFormData = {
    contactNumber: '',
    alternateNumber: '',

  };
  const [formData, setFormData] = useState(initialFormData);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("formData", formData);
    setFormData(initialFormData);
    window.location.href = '/';
  };
  const handlePrevious = () => {
    const nextUrl = `/additionalDetail?email=${encodeURIComponent(email)}&city=${encodeURIComponent(city)}`;
    window.location.href = nextUrl;
    console.log('Previous button clicked!');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <Container>
      <div style={{ position: "static", marginBottom: "10px", marginTop: "6rem" }}>
        <TabNavigation />
      </div>
      <Form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <Stack direction='vertical' gap={2}>
          <Form.Group controlId="city">
            <Form.Label>Email: {email}</Form.Label>
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>City: {city}</Form.Label>
          </Form.Group>

          <Form.Group controlId="contactNumber">
            <Form.Label>Contact No :</Form.Label>
            <Form.Control type="text" placeholder="Enter contact number" style={{ width: "45%" }} name="contactNumber" value={formData.contactNumber}
              onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="alternateNumber">
            <Form.Label>Alternate No :</Form.Label>
            <Form.Control type="text" placeholder="Enter alternate number" style={{ width: "45%" }} name="alternateNumber" value={formData.alternateNumber} onChange={handleChange} />
          </Form.Group>
          <Stack direction="horizontal" gap={4} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3rem' }}>
            <Button type="button" onClick={handlePrevious} variant="outline-dark">Previous</Button>
            <Button type="submit" variant="primary" style={{ marginLeft: '1rem' }}>Submit</Button>

          </Stack>
        </Stack>
      </Form>
    </Container>
  );
};

export default Contact;
