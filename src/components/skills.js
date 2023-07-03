import React, { useState } from 'react';
import { Button, Container, Form, Stack, Table } from 'react-bootstrap';
import TabNavigation from './TabNavigation'
import { useLocation } from 'react-router-dom';

const Skills = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    const city = queryParams.get('city');
    const initialFormData = {
        skillName: '',
        experience: '',
        projectBrief: ''
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
        setTableEntries([...tableEntries, formData]);
        setFormData(initialFormData);
    };
    const handleNext = () => {
        const nextUrl = `/additionalDetail?email=${encodeURIComponent(email)}&city=${encodeURIComponent(city)}`;
        window.location.href = nextUrl;
        console.log('Next button clicked!');
    };

    const handlePrevious = () => {
        const nextUrl = `/professionalExperience?email=${encodeURIComponent(email)}&city=${encodeURIComponent(city)}`;
        window.location.href = nextUrl;
        console.log('Previous button clicked!');
    };

    return (
        <Container>
            <div style={{ position: "static", marginBottom: "10px", marginTop: "10rem" }}>
                <TabNavigation />
            </div>
            <Form onSubmit={handleSubmit} style={{ marginTop: "40px" }}>
                <Stack direction='vertical' gap={4}>
                    <Stack direction='horizontal' gap={4} >
                        <Form.Group controlId="formSkillName">
                            <Form.Label>Skill Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="skillName"
                                value={formData.skillName}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formExperience">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control
                                type="text"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Stack>
                    <Form.Group controlId="formProjectBrief" >
                        <Form.Label>Brief about Project</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="projectBrief"
                            value={formData.projectBrief}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button type="submit" style={{ width: "25%" }}> + Add New</Button>
                </Stack>
            </Form>

            {tableEntries.length > 0 && (
                <Table striped bordered style={{ marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>Skill Name</th>
                            <th>Experience</th>
                            <th>Brief about Project</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableEntries.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.skillName}</td>
                                <td>{entry.experience}</td>
                                <td>{entry.projectBrief}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
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

export default Skills;
