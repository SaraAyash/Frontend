
import React, { useState } from 'react';
import { Form, ButtonGroup, Button, Modal, Row, Col } from 'react-bootstrap';


export default function UploadFiles(props) {

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




                <Button
                    variant="primary"
                    type="submit"
                    disabled={(props.step === 1)}
                >
                    חזור
                </Button>
                <Button className="me-2" variant="warning" onClick={() => { props.nextStep() }} >
                    הבא
                </Button>
            </Form>
        </div>
    );
}



