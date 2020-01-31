import React, { Component } from 'react'
import EmployeeForm from '../../../.././components/EmployeeForm/EmployeeForm'
import { Row, Col } from 'reactstrap';
export default class Edit extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                    <Row>
                        <Col xs="12" sm="6">
                            <EmployeeForm />
                        </Col>
                    </Row>
            </div>
        )
    }
}
