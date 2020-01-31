import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import AddressForm from '../../components/Address/AddressForm'
import AddressPresent from '../../components/Address/AddressPresent'

export default class Add extends Component {
    render() {
        return (
            <div>
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
