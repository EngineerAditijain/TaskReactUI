import React, { useState } from 'react';
import { Button, Container, Form, InputGroup, Stack } from 'react-bootstrap';
import TabNavigation from './TabNavigation'
import { useLocation } from 'react-router-dom';

const AdditionalDetail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    const city = queryParams.get('city');
    const initialFormData = {
        openToRelocate: '',
        openToRemote: '',
        openForShift: '',
        hasOwnDevice: '',
        hasPassport: '',
        currentCtc: '',
        acceptedCtc: '',
        ctcValidation: '',
        validity: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your logic for handling form submission here
        setFormData(initialFormData);
    };
    const handleNext = () => {
        const nextUrl = `/contact?email=${encodeURIComponent(email)}&city=${encodeURIComponent(city)}`;
        window.location.href = nextUrl;
        console.log('Next button clicked!');
    };

    const handlePrevious = () => {
        const nextUrl = `/skills?email=${encodeURIComponent(email)}&city=${encodeURIComponent(city)}`;
        window.location.href = nextUrl;
        console.log('Previous button clicked!');
    };

    return (
        <Container>
            <div style={{ position: "static", marginBottom: "10px", marginTop: "21rem" }}>
                <TabNavigation />
            </div>
            <Form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
                <Stack direction='vertical' gap={3}>
                    <Form.Group controlId="formOpenToRelocate">
                        <Form.Label style={{ marginRight: "125px" }}>Open To Relocate :</Form.Label>
                        <Form.Check
                            inline
                            type="radio"
                            label="Yes"
                            name="openToRelocate"
                            value="Yes"
                            checked={formData.openToRelocate === 'Yes'}
                            onChange={handleChange}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="No"
                            name="openToRelocate"
                            value="No"
                            checked={formData.openToRelocate === 'No'}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formOpenToRemote">
                        <Form.Label style={{ marginRight: "85px" }}>Open For Remote Work :</Form.Label>
                        <Form.Check
                            inline
                            type="radio"
                            label="Yes"
                            name="openToRemote"
                            value="Yes"
                            checked={formData.openToRemote === 'Yes'}
                            onChange={handleChange}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="No"
                            name="openToRemote"
                            value="No"
                            checked={formData.openToRemote === 'No'}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formHasOwnDevice">
                        <Form.Label style={{ marginRight: "30px" }}>Open to bring your own device :</Form.Label>
                        <Form.Check
                            inline
                            type="radio"
                            label="Yes"
                            name="hasOwnDevice"
                            value="Yes"
                            checked={formData.hasOwnDevice === 'Yes'}
                            onChange={handleChange}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="No"
                            name="hasOwnDevice"
                            value="No"
                            checked={formData.hasOwnDevice === 'No'}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formCtcInput">
                        <Form.Label>CTC- Current CTC</Form.Label>
                        <InputGroup>
                            <Stack direction='horizontal' gap={4}>
                                <Form.Select style={{ width: "25%" }}>
                                    <option value="INR">INR</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                </Form.Select>
                                <Form.Control type="number" />
                            </Stack>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formCtcInput">
                        <Form.Label>Minimum Acceptable CTC :</Form.Label>
                        <InputGroup>
                            <Stack direction='horizontal' gap={4}>
                                <Form.Select style={{ width: "25%" }}>
                                    <option value="INR">INR</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                </Form.Select>
                                <Form.Control type="number" />
                            </Stack>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formOpenForShift">
                        <Form.Label style={{ marginRight: "129px" }}>Open for Shift :</Form.Label>
                        <Form.Check
                            inline
                            type="radio"
                            label="Yes"
                            name="openForShift"
                            value="Yes"
                            checked={formData.openForShift === 'Yes'}
                            onChange={handleChange}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="No"
                            name="openForShift"
                            value="No"
                            checked={formData.openForShift === 'No'}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formOpenForShift">
                        <Form.Label style={{ marginRight: "165px" }}>Passport :</Form.Label>
                        <Form.Check
                            inline
                            type="radio"
                            label="Yes"
                            name="hasPassport"
                            value="Yes"
                            checked={formData.hasPassport === 'Yes'}
                            onChange={handleChange}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="No"
                            name="hasPassport"
                            value="No"
                            checked={formData.hasPassport === 'No'}
                            onChange={handleChange}
                        />
                    </Form.Group>


                    <Form.Group controlId="formCTCValidation">
                        <Form.Label>Validity if Yes :</Form.Label>
                        <Form.Control
                            type="text"
                            name="ctcValidation"
                            value={formData.ctcValidation}
                            onChange={handleChange}
                            style={{ width: "25%" }}
                            placeholder='mm/yyyy'
                        />
                    </Form.Group>

                </Stack>
            </Form>
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

export default AdditionalDetail;
