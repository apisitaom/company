import React, { Component } from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap';
export default class AddressForm extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        <strong>Address Form</strong>
                        <small> ที่อยู่ตามทะเบียนบ้าน</small>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="12">
                                <FormGroup>
                                    <Label htmlFor="name">ที่อยู่</Label>
                                    <Input type="textarea" placeholder="Enter address" required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="ccnumber">จังหวัด</Label>
                                    <Input type="text" placeholder="inside province" />
                                </FormGroup>
                            </Col>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="ccnumber">อำเภอ</Label>
                                    <Input type="text" placeholder="inside disstric" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="ccnumber">ตำบล</Label>
                                    <Input type="text" placeholder="inside subdisstric" />
                                </FormGroup>
                            </Col>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="ccnumber">รหัสไปษณี</Label>
                                    <Input type="text" placeholder="inside postcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
