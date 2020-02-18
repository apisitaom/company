import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { adminLogin, employeeLogin } from '../../../services/api'
import { message } from 'antd'
class Login extends Component {
  onSubmit = async () => {
    const { email, password } = this.state
    const data = {
      email: email,
      password: password
    }
    const resp = await adminLogin(data);
    if (resp.code === 200) {
      window.location.assign('#dashboard');
      sessionStorage.setItem('access_token', resp.token);
    } else {
      message.warn('Something error !!');
    }
  }

  onSubmitEmployee = async () => {
    const { email, password } = this.state
    const data = {
      email: email,
      password: password
    }
    const resp = await employeeLogin(data);
    if (resp.code === 200) {
      window.location.assign('#dashboard');
      sessionStorage.setItem('access_token', resp.token);
    } else {
      message.warn('Something error !!');
    }
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>LOGIN</h1>
                      <p className="text-muted">Sign Company And Technology, co. (CATy)</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                          type="text" 
                          placeholder="Username" 
                          autoComplete="username" 
                          onChange={(e)=>this.setState({email: e.target.value})}
                          />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                          type="password" 
                          placeholder="Password" 
                          autoComplete="current-password" 
                          onChange={(e)=>this.setState({password: e.target.value})}
                          />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button 
                            color="primary" 
                            className="px-4"
                            onClick={() => this.onSubmit()}
                            >ADMIN</Button>
                            <Button onClick={this.onSubmitEmployee} color="secondary" >EMPLOYEE</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
