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
export default class PositionForm extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        <strong>Position</strong>
                        <small> รายละเอียดตำเเหน่งงาน</small>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="12">
                                <FormGroup>
                                    <Label htmlFor="name">ชื่อ-นามสกุล</Label>
                                    <Input type="text" placeholder="Enter employee name" required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="position">ตำเเหน่ง</Label>
                                    <Input type="select" name="position">
                                        <option>CEO</option>
                                        <option>GM</option>
                                        <option>Engineer</option>
                                        <option>Security</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="ccnumber">เบอร์โทรภายใน</Label>
                                    <Input type="text" id="number" placeholder="inside number" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
