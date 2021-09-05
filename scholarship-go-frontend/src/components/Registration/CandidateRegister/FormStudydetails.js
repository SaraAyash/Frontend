
import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';


export default function FormStudydetails(props) {

    return (
        <div>

            <Form className="m-5 ">
                <Form.Group as={Col} className="mb-3"   >
                    <Form.Label>מוסד לימודים</Form.Label>
                    <Form.Control type="text" onChange={props.handleChange('colegeName')} />
                </Form.Group>

                <Form.Group as={Col} className="mb-3"  >
                    <Form.Label>תואר</Form.Label>
                    <Form.Control type="text" onChange={props.handleChange('degree')} />
                </Form.Group>

                <Form.Group as={Col} className="mb-3"   >
                    <Form.Label>תחום לימודים</Form.Label>
                    <Form.Control type="number" onChange={props.handleChange(' ')} />
                </Form.Group>

                <Form.Group as={Col}  >
                    <Form.Label>שנת התחלת לימודים</Form.Label>
                    <Form.Control type="text" onChange={props.handleChange(' ')} />
                </Form.Group>

                <Form.Group as={Col}  >
                    <Form.Label>ממוצע ציונים </Form.Label>
                    <Form.Control type="email" onChange={props.handleChange(' ')} />
                </Form.Group>



                <Form.Group as={Col}  >
                    <Form.Label>האם אתה מקבל מלגות  נוספות?</Form.Label>
                    <Form.Control type="text" onChange={props.handleChange(' ')} />
                </Form.Group>

                <Form.Group as={Col}  >
                    <Form.Label>איזו מלגה?</Form.Label>
                    <Form.Control type="email" onChange={props.handleChange(' ')} />
                </Form.Group>


                <Form.Group as={Col}  >
                    <Form.Label>באילו תחומים היית מעוניין/ת לבצע פעילות חברתית?</Form.Label>
                    <Form.Control type="text" onChange={props.handleChange(' ')} />
                </Form.Group>

                <Button className="mt-3"
                    variant="primary"
                    type="submit"
                    onClick={() => { props.prevStep() }}
                >
                    חזור
                </Button>
                <Button className="me-2 mt-3" variant="warning" onClick={() => { props.nextStep() }} >
                    הבא
                </Button>
            </Form>
        </div>
    );
}



