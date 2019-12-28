import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row } from 'reactstrap';
export default class PositionForm extends Component {
    state = {
        name: '',
        position: '',
        phonecontack: ''
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
                        <strong>Position</strong>
                        <small> รายละเอียดตำเเหน่งงาน</small>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="12">
                                <FormGroup>
                                    <Label htmlFor="name">ชื่อ-นามสกุล</Label>
                                    <Input 
                                        type="text" 
                                        placeholder="Enter employee name" 
                                        name="name"
                                        onChange={this.onChange}
                                        required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="position">ตำเเหน่ง</Label>
                                    <Input 
                                        type="select" 
                                        name="position"
                                        onChange={this.onChange}
                                        >
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
                                    <Input 
                                        type="text" 
                                        placeholder="inside number" 
                                        name="phonecontack"
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
