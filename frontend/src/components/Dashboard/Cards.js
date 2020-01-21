import React, { Component } from 'react'
import { Card, CardBody, Col, Row,} from 'reactstrap';
export default class Cards extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" sm="6" lg="3">
                        <Card style={{ backgroundColor: '#B7950B', color: 'white' }}>
                            <CardBody className="pb-0">
                                <div className="text-value">{this.props.employeecounts}</div>
                                <div>EMPLOYEE</div>
                            </CardBody>
                            <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                            </div>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card style={{ backgroundColor: '#B9770E', color: 'white' }}>
                            <CardBody className="pb-0">
                                <div className="text-value">{this.props.storecounts}</div>
                                <div>STORE</div>
                            </CardBody>
                            <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                            </div>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card style={{ backgroundColor: '#AF601A', color: 'white' }}>
                            <CardBody className="pb-0">
                                <div className="text-value">{this.props.incomes}</div>
                                <div>IN COME</div>
                            </CardBody>
                            <div className="chart-wrapper" style={{ height: '70px' }}>
                            </div>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card style={{ backgroundColor: '#A04000', color: 'white' }}>
                            <CardBody className="pb-0">
                                <div className="text-value">{this.props.outcomes}</div>
                                <div>OUT COME</div>
                            </CardBody>
                            <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
