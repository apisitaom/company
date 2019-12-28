import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row } from 'reactstrap';
export default class AddressPresent extends Component {
    state = {
        address: '',
        province: '',
        distric: '',
        subdistric: '',
        postcode: '',
    }
    onChange = async (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
    }
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        <strong>Address Present</strong>
                        <small> ที่อยู่ปัจจุบัน</small>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="12">
                                <FormGroup>
                                    <Label htmlFor="name">ที่อยู่</Label>
                                    <Input 
                                        type="textarea" 
                                        placeholder="Enter address" 
                                        name="address"
                                        onChange={this.onChange}
                                        required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="ccnumber">จังหวัด</Label>
                                    <Input 
                                        type="text" 
                                        placeholder="inside province"
                                        name="province" 
                                        onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="ccnumber">อำเภอ</Label>
                                    <Input 
                                        type="text" 
                                        placeholder="inside disstric"
                                        name="distric"
                                        onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="ccnumber">ตำบล</Label>
                                    <Input 
                                        type="text" 
                                        placeholder="inside subdisstric"
                                        name="subdistric"
                                        onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="ccnumber">รหัสไปษณี</Label>
                                    <Input 
                                        type="text" 
                                        placeholder="inside postcode"
                                        name="postcode"
                                        onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
