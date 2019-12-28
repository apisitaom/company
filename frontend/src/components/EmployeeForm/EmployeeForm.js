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
export default class EmployeeForm extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        <strong>Employee </strong>
                        <small> รายละเอียดพนักงาน</small>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="12">
                                <FormGroup>
                                    <Label htmlFor="name">ชื่อ-นามสกุล</Label>
                                    <Input type="text"  placeholder="Enter employee name" required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="ccnumber">เลขบัตรประชาชน</Label>
                                    <Input type="text"  placeholder="Enter identification employee" />
                                </FormGroup>
                            </Col>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="ccnumber">เลขบัตรประกันสังคม</Label>
                                    <Input type="text"  placeholder="Enter identification socail security" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <FormGroup>
                                    <Label htmlFor="name">ชื่อเล่น</Label>
                                    <Input type="text"  placeholder="Enter nickname" required />
                                </FormGroup>
                            </Col>
                            <Col xs="4">
                                <FormGroup>
                                    <Label htmlFor="name">วันเกิด</Label>
                                    <Input type="text"  placeholder="Enter birthday" required />
                                </FormGroup>
                            </Col>
                            <Col xs="4">
                                <FormGroup>
                                    <Label htmlFor="name">อายุ</Label>
                                    <Input type="text"  placeholder="Enter age" required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sx="12" >
                                <FormGroup>
                                    <Label htmlFor="name">เบอร์โทรศัพท์</Label>
                                    <Input type="text"  placeholder="Enter phone number" required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <FormGroup>
                                    <Label htmlFor="name">เพศ</Label>
                                    <Input type="text"  placeholder="Enter gender" required />
                                </FormGroup>
                            </Col>
                            <Col xs="4">
                                <FormGroup>
                                    <Label htmlFor="name">น้ำหนัก</Label>
                                    <Input type="number"  placeholder="Enter wieght" required />
                                </FormGroup>
                            </Col>
                            <Col xs="4">
                                <FormGroup>
                                    <Label htmlFor="name">ส่วนสูง</Label>
                                    <Input type="number"  placeholder="Enter hight" required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6">
                                <FormGroup>
                                    <Label htmlFor="name">ประเทศ</Label>
                                    <Input type="text"  placeholder="Enter country" required />
                                </FormGroup>
                            </Col>
                            <Col xs="6">
                                <FormGroup>
                                    <Label htmlFor="name">สัญชาติ</Label>
                                    <Input type="text"  placeholder="Enter nationality" required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6">
                                <FormGroup>
                                    <Label htmlFor="name">เชื้อชาติ</Label>
                                    <Input type="text"  placeholder="Enter race" required />
                                </FormGroup>
                            </Col>
                            <Col xs="6">
                                <FormGroup>
                                    <Label htmlFor="name">ศาสนา</Label>
                                    <Input type="text"  placeholder="Enter religion" required />
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
