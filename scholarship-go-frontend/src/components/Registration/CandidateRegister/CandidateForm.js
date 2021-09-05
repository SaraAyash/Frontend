import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Card, Button, Modal, Row, Col } from 'react-bootstrap';
import { FcGraduationCap } from "react-icons/fc";
import FormPersonalDetails from './FormPersonalDetails';
import FormStudydetails from './FormStudydetails.js';
import UploadFiles from './UploadFiles.js'

export default function CandidateForm() {
    const [candidateDedails, setCandidateDedails] = useState({
        firstName: '',
        lastName: '',
        id: '',
        age: '',
        email: '',
        phone: '',
        city: '',
        address: '',
        status: '',
        zip: '',
        gender: '',
        state: '',
        religion: '',
        countryOfBirth: '',

    });

    const [step, setStep] = useState(1);

    // Proceed to next step
    const nextStep = () => {
        const next = step + 1;
        setStep(next);
    };

    // Go back to prev step
    const prevStep = () => {
        const prev = step - 1;
        setStep(prev);
    };

    const handleChange = input => e => {
        setCandidateDedails({ [input]: e.target.value });

    };
    // const { step,candidateDedails, handleChange } = props;
    useEffect(() => { }, [step]);
    switch (step) {
        case 1:
            return (<FormPersonalDetails
                step={step}
                handleChange={handleChange}
                candidateDedails={candidateDedails}
                nextStep={nextStep}

            />)
            break;
        case 2:
            return (<FormStudydetails
                step={step}
                handleChange={handleChange}
                candidateDedails={candidateDedails}
                nextStep={nextStep}
                prevStep={prevStep}

            />)
            break;

        case 3:
            return (<UploadFiles
                step={step}
                handleChange={handleChange}
                candidateDedails={candidateDedails}
                nextStep={nextStep}
                prevStep={prevStep}
            />)
            break;
        default:
            return (
                <div>
                    CandidateForm step is:{step}
                    <hr></hr>
                    first name is: {candidateDedails.firstName}
                    <hr></hr>
                    last name is: {candidateDedails.lastName}
                </div>
            )
            break;
    }



}
{/* <Form>
<Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
</Row>

<Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control />
</Form.Group>

<Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control />
</Form.Group>

<Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
        </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
    </Form.Group>
</Row>

<Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
</Form.Group>

<Button variant="primary" type="submit">
    Submit
</Button>
</Form> */}

