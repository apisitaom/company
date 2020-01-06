import React, { Component } from 'react'
import { Row, Col, Input } from 'reactstrap'
import { Table, Icon } from 'antd'
import { employeeAll } from '../../../../services/api'
export default class Lists extends Component {
    state = {
        employee: []
    }
    UNSAFE_componentWillMount () {
        this.OnGetEmployee();
    }
    OnGetEmployee = async () => {
        const resp = await employeeAll();
        resp.code === 200 && this.setState({
            employee: resp.data
        })
    }
    render() {
        const columns = [
            { title: 'ชื่อ-นามสกุล', dataIndex: 'name', key: 'name' },
            { title: 'ชื่อเล่น', dataIndex: 'nickname', key: 'nickname' },
            { title: 'อายุ', dataIndex: 'age', key: 'age' },
            { title: 'เพศ', key: 'gender', dataIndex: 'gender' },
            { title: 'เบอร์โทร', key: 'phonenumber', dataIndex: 'phonenumber' },
            { title: 'ตำแหน่ง', key: 'position', dataIndex: 'position' },
            { title: 'เเก้ไข', key: '', dataIndex: '',
                render: text => {
                    return (
                        <span><Icon onClick={ () => console.log('EDIT', text)} type="edit" /></span>
                    )
                }
            },
            { title: 'รายละเอียด', key: '', dataIndex: '',
                render: text => {
                    return (
                        <span><Icon onClick={ () => console.log('VIEW', text)} type="align-center" /></span>
                    )
                }
            },
        ];
        return (
            <div>
                <Row>
                    <Col xs="12" sm="6">
                    </Col>
                    <Col xs="12" sm="6">
                        <Input type="text" id="name" placeholder="Search employee name ?" required />
                    </Col>
                </Row>
                <Row style={{ paddingTop: '1.2%' }}>
                    <Col xs="24" sm="12">
                        <Table
                            rowKey="_id"
                            columns={columns}
                            dataSource={this.state.employee} />
                    </Col>
                </Row>
            </div>
        )
    }
}
