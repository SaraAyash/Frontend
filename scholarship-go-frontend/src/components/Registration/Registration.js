import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import CandidateRegister from './CandidateRegister/CandidateRegister.js';
import { FcGraduationCap } from "react-icons/fc";
import {GiTakeMyMoney} from "react-icons/gi";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

export default function Registration() {
 
    const { path, url } = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <Container>
                        <Row>
                            <Col className="p-5"> <h1 >הרשם למערכת כ: </h1></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to={`${url}/newCandidate`} style={{ 'textDecoration': 'None', 'color': 'black' }}>
                                    <Card className="text-center" style={{ width: '18rem', 'border': 'None' }}>
                                        <Card.Body>
                                            <FcGraduationCap style={{ 'height': '10em', 'width': '10em' }} />
                                            <Card.Title >סטודנט</Card.Title>
                                            <Card.Text >
                                                הרשם לקבלת מילגות
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </Link>
                            </Col>

                            <Col>
                                <Link to={`${url}/newScholership`} style={{ 'textDecoration': 'None', 'color': 'black' }}>
                                    <Card className="text-center" style={{ width: '18rem', 'border': 'None' }}>
                                        <Card.Body>
                                            <GiTakeMyMoney style={{ 'height': '10em', 'width': '8em','color': 'green' }} />
                                            <Card.Title >מלגה</Card.Title>
                                            <Card.Text >
                                                ערוך / עדכן מלגה 
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </Link>
                            </Col>
                            <Col>
                                 
                            </Col>
                        </Row>
                    </Container>
                </Route>
                <Route path={`${path}/newCandidate`}>
                    <CandidateRegister />
                </Route>
                <Route path={`${path}/newScholarship`}>
                    <CandidateRegister />
                </Route>
                
            </Switch>
        </div>
    );
}