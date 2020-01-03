import React, { Component } from 'react'
import EmployeeForm from '../../../.././components/EmployeeForm/EmployeeForm'
import AddressForm from '../../../.././components/EmployeeForm/AddressForm'
import AddressPresent from '../../../.././components/EmployeeForm/AddressPresent'
import { Row, Col } from 'reactstrap';
export default class Add extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                    <Row>
                        <Col xs="12" sm="6">
                            <EmployeeForm />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" sm="6">
                            <AddressPresent />
                        </Col>
                        <Col xs="12" sm="6">
                            <AddressForm />
                        </Col>
                    </Row>
            </div>
        )
    }
}
