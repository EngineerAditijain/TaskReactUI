import React, { useState } from 'react';
import { Container, Form, Button, Stack } from 'react-bootstrap';
import TabNavigation from './TabNavigation'

const GeneralDetail = () => {
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [dob, setDob] = useState('');
  const [referral, setReferral] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [resume, setResume] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    console.log('Form submitted!');
    console.log('Email:', email);
    console.log('Title:', title);
    console.log('Date of Birth:', dob);
    console.log('Referral:', referral);
    console.log('Profile Picture:', profilePicture);
    console.log('Resume:', resume);

    // Reset form fields
    setEmail('');
    setTitle('');
    setDob('');
    setReferral('');
    setProfilePicture('');
    setResume('');
  };
  const handleNext = () => {
    // Perform any actions or validations before moving to the next step
    const nextUrl = `/educationalDetail?email=${encodeURIComponent(email)}&city=${encodeURIComponent(currentCity)}`;
    window.location.href = nextUrl;
    // window.location.href = '/educationalDetail';
    console.log('Next button clicked!');
  };

  const handlePrevious = () => {
    // Perform any actions or validations before moving to the previous step
    console.log('Previous button clicked!');
  };
  return (
    
      <Container >
      <div style={{ position: "static",marginBottom:"10px",marginTop:"18rem" }}>
        <TabNavigation />
      </div>
        {/* <h6>General Details</h6> */}
        <Form onSubmit={handleSubmit} style={{marginTop:"10px"}}>
          <Stack direction='vertical' gap={1}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Stack direction='horizontal' gap={4}>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  as="select"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                >
                  <option value="">Select title</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Stack>
            <Stack direction='horizontal' gap={3}>
              <Form.Group controlId="formDOB">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formCity">
                <Form.Label>currentCity</Form.Label>
                <Form.Control
                  type="currentCity"
                  placeholder="Current City"
                  value={currentCity}
                  onChange={(e) => setCurrentCity(e.target.value)}
                />
              </Form.Group>
            </Stack>
            <Stack direction="horizontal" gap={3} alignItems="center">
              <Form.Label>Referral</Form.Label>
              <Form.Group controlId="formReferral" style={{ marginBottom: 0 }}>
                <Form.Control
                  type="text"
                  placeholder="Enter referral"
                  value={referral}
                  onChange={(e) => setReferral(e.target.value)}
                />
              </Form.Group>
            </Stack>
            <Stack direction="horizontal" gap={3} alignItems="center">
              <Form.Group controlId="formProfilePicture">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setProfilePicture(e.target.files[0])}
                />
              </Form.Group>
            </Stack>
            <Stack direction="horizontal" gap={3} alignItems="center">
              <Form.Group controlId="formResume">
                <Form.Label>Resume</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setResume(e.target.files[0])}
                />
              </Form.Group>
            </Stack>

            <Stack direction="horizontal" gap={4} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3rem' }}>
                <Button type="button" onClick={handleNext} variant="primary" style={{ marginLeft: '1rem' }}>Next</Button>

            </Stack>
          </Stack>
        </Form>
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

export default GeneralDetail;
