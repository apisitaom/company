import React, { Component } from 'react'
import { Row, Col, Input } from 'reactstrap'
import { Table, Divider, Switch } from 'antd'
export default class Lists extends Component {
    onChange(checked) {
        console.log(`switch to ${checked}`);
    }
    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
            },
        ];
        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ];
        return (
            <div>
                <Row>
                    <Col xs="12" sm="6">
                        <Divider type="vertical" />
                        <strong>Status Employee</strong>
                        <Divider type="vertical" />
                        <Switch defaultChecked onChange={this.onChange} />
                    </Col>
                    <Col xs="12" sm="6">
                        <Input type="text" id="name" placeholder="Search employee name ?" required />
                    </Col>
                </Row>
                <Row style={{ paddingTop: '1.2%' }}>
                    <Col xs="24" sm="12">
                        <Table
                            columns={columns}
                            dataSource={data} />
                    </Col>
                </Row>
            </div>
        )
    }
}
