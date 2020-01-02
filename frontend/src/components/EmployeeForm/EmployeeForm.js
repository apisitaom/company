import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row, Button, CardFooter } from 'reactstrap';
import { DatePicker } from 'antd';
export default class EmployeeForm extends Component {
    state = {
        name: '',
        identification: '',
        identificationsocial: '',
        nickname: '',
        birthday: '',
        age: '',
        phonenumber: '',
        gender: '',
        wieght: '',
        hight: '',
        country: '',
        nationality: '',
        race: '',
        religion: ''
    }
    onChangeDate = async (date, dateString) => {
        this.setState({
            birthday: dateString
        })
    }
    onChange = async (e) => {
      this.setState({
          [e.target.name]: e.target.value
        })
    }
    onSubmit = async () => {
        console.log('Click Submit');
    }
    onReset = async () => {
        console.log('Click Reset !!');
    }
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
                                    <Label htmlFor="ccnumber">เลขบัตรประชาชน</Label>
                                    <Input  
                                        type="text"  
                                        placeholder="Enter identification employee"
                                        name="identification"
                                        onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                            <Col sx="6">
                                <FormGroup>
                                    <Label htmlFor="ccnumber">เลขบัตรประกันสังคม</Label>
                                    <Input 
                                        type="text"  
                                        placeholder="Enter identification socail security"
                                        name="identificationsocial"
                                        onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <FormGroup>
                                    <Label htmlFor="name">ชื่อเล่น</Label>
                                    <Input 
                                        type="text"  
                                        placeholder="Enter nickname" 
                                        name="nickname"
                                        onChange={this.onChange}
                                        required />
                                </FormGroup>
                            </Col>
                            <Col xs="4">
                                <FormGroup>
                                    <Label htmlFor="name">วันเกิด</Label>
                                    <DatePicker 
                                    onChange={this.onChangeDate} 
                                    name="birthday"
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="4">
                                <FormGroup>
                                    <Label htmlFor="name">อายุ</Label>
                                    <Input 
                                        type="text"  
                                        placeholder="Enter age" 
                                        name="age"
                                        onChange={this.onChange}
                                        required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sx="12" >
                                <FormGroup>
                                    <Label htmlFor="name">เบอร์โทรศัพท์</Label>
                                    <Input 
                                        type="text"  
                                        placeholder="Enter phone number" 
                                        name="phonenumber"
                                        onChange={this.onChange}
                                        required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <FormGroup>
                                    <Label htmlFor="name">เพศ</Label>
                                    <Input 
                                        type="text"  
                                        placeholder="Enter gender" 
                                        name="gender"
                                        onChange={this.onChange}
                                        required />
                                </FormGroup>
                            </Col>
                            <Col xs="4">
                                <FormGroup>
                                    <Label htmlFor="name">น้ำหนัก</Label>
                                    <Input 
                                        type="number"  
                                        placeholder="Enter wieght" 
                                        name="wieght"
                                        onChange={this.onChange}
                                        required />
                                </FormGroup>
                            </Col>
                            <Col xs="4">
                                <FormGroup>
                                    <Label htmlFor="name">ส่วนสูง</Label>
                                    <Input 
                                        type="number"  
                                        placeholder="Enter hight" 
                                        name="hight"
                                        onChange={this.onChange}
                                        required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6">
                                <FormGroup>
                                    <Label htmlFor="name">ประเทศ</Label>
                                    <Input 
                                        type="text"  
                                        placeholder="Enter country" 
                                        name="country"
                                        onChange={this.onChange}
                                        required />
                                </FormGroup>
                            </Col>
                            <Col xs="6">
                                <FormGroup>
                                    <Label htmlFor="name">สัญชาติ</Label>
                                    <Input 
                                        type="text"  
                                        placeholder="Enter nationality" 
                                        name="nationality"
                                        onChange={this.onChange}
                                        required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6">
                                <FormGroup>
                                    <Label htmlFor="name">เชื้อชาติ</Label>
                                    <Input 
                                        type="text"  
                                        placeholder="Enter race" 
                                        name="race"
                                        onChange={this.onChange}
                                        required />
                                </FormGroup>
                            </Col>
                            <Col xs="6">
                                <FormGroup>
                                    <Label htmlFor="name">ศาสนา</Label>
                                    <Input 
                                        type="text"  
                                        placeholder="Enter religion" 
                                        name="religion"
                                        onChange={this.onChange}
                                        required />
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter>
                      <Button onClick={this.onSubmit} type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                      <Button onClick={this.onReset} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                    </CardFooter>
                </Card>
            </div>
        )
    }
}
