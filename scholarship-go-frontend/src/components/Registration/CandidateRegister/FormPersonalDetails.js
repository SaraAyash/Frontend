import React, { useState } from 'react';
import { Form, ButtonGroup, Button, Modal, Row, Col } from 'react-bootstrap';


export default function FormPersonalDetails(props) {
  // const { step,candidateDedails, handleChange } = props;
  var [status, setStatus] = useState();

  // const selectStatus = input => e => {
  //   setStatus(e.target.selectedIndex);

  //   props.handleChange( 'status');

  // };
  // const nextStep = () => {
  //   const next = props.step + 1;
  //   props.setStep(next);
  // };

  // const back = () => {
  //   const prev = props.step + 1;
  //   props.setStep(prev);
  // };



  return (
    <div>
      {/* CandidateForm step is:{props.step}
      <hr></hr>
      first name is: {props.candidateDedails.firstName}
      <hr></hr>
      last name is: {props.candidateDedails.lastName}
      <hr></hr>
      status is: {props.candidateDedails.status}
      <hr></hr><hr></hr> */}

      <Form className="m-5">
        <Row >
          <Form.Group as={Col} className="mb-3"   >
            <Form.Label>שם פרטי</Form.Label>
            <Form.Control type="text" onChange={props.handleChange('firstName')} />
          </Form.Group>

          <Form.Group as={Col} className="mb-3"  >
            <Form.Label>שם משפחה</Form.Label>
            <Form.Control type="text" onChange={props.handleChange('lastName')} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3"   >
            <Form.Label>ת.ז.</Form.Label>
            <Form.Control type="number" onChange={props.handleChange('id')} />
          </Form.Group>

          <Form.Group as={Col} className="mb-3"   >
            <Form.Label>גיל</Form.Label>
            <Form.Control type="number" onChange={props.handleChange('age')} />
          </Form.Group>

        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}  >
            <Form.Label>מספר טלפון</Form.Label>
            <Form.Control type="text" onChange={props.handleChange('phone')} />
          </Form.Group>

          <Form.Group as={Col}  >
            <Form.Label>כתובת מייל</Form.Label>
            <Form.Control type="email" onChange={props.handleChange('email')} />
          </Form.Group>
        </Row>

        <Row >

          <Form.Group as={Col} className="mb-3"  >
            <Form.Label>מין</Form.Label>
            <Form.Select onChange={props.handleChange('gender')}>
              <option>נקבה</option>
              <option>זכר</option>
              <option>אחר</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} className="mb-3"   >
            <Form.Label>דת / מגזר</Form.Label>
            <Form.Select onChange={props.handleChange('religion')}>
              <option>יהודי</option>
              <option>ערבי</option>
              <option>דרוזי</option>
              <option>בוכרי</option>
              <option>בדואי</option>
              <option>צרקסי</option>
              <option>קווקזי</option>
              <option>ארמני</option>
              <option>איני משתייך למגזרים אלו</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} className="mb-3"  >
            <Form.Label>מצב משפחתי</Form.Label>
            <Form.Select onChange={props.handleChange('status')}  >
              <option id={0}>רווק/ה</option>
              <option id={1}>נשוי/אה עם ילדים</option>
              <option id={2}>נשוי/אה בלי ילדים</option>
              <option id={3}>גרוש/ה</option>
              <option id={4}>חד הורי/ת</option>
            </Form.Select>
          </Form.Group>
        </Row>

        {/* {(status === 1) ?
          <Form.Group as={Col} className="mb-3"   >
            <Form.Label>כתובת</Form.Label>
            <Form.Control type="text" onChange={props.handleChange('address')} />
          </Form.Group>
          : ''} */}


        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3"   >
            <Form.Label>כתובת</Form.Label>
            <Form.Control type="text" onChange={props.handleChange('address')} />
          </Form.Group>

          <Form.Group as={Col} className="mb-3"   >
            <Form.Label>מיקוד</Form.Label>
            <Form.Control type="number" onChange={props.handleChange('zip')} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}  >
            <Form.Label>עיר</Form.Label>
            <Form.Control type="text" onChange={props.handleChange('city')} />
          </Form.Group>

          <Form.Group as={Col}  >
            <Form.Label>מדינה</Form.Label>
            <Form.Control type="text" onChange={props.handleChange('state')} />
          </Form.Group>

          <Form.Group as={Col}  >
            <Form.Label>ארץ לידה</Form.Label>
            <Form.Control type="text" onChange={props.handleChange('countryOfBirth')} />
          </Form.Group>
        </Row>

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



