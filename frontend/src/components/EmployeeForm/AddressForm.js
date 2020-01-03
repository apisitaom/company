import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row, Button, CardFooter } from 'reactstrap';
import { addressformAdd } from '../../services/api'
export default class AddressForm extends Component {
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
    onSubmit = async () => {    
        const data = {
            address: this.state.address,
            province: this.state.province,
            distric: this.state.distric,
            subdistric: this.state.subdistric,
            postcode: this.state.postcode,
        }
        await addressformAdd(data);
    }
    onReset = async () => {
        console.log('Click Reset !!');
    } 
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
                                        type="number" 
                                        placeholder="inside postcode"
                                        name="postcode"
                                        onChange={this.onChange} />
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
