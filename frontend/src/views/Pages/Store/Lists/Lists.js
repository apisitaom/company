import React, { Component } from 'react'
import { List, Avatar, Button, notification, message, Popconfirm } from 'antd';
import { Row, Col } from 'reactstrap'
import { storeAll, borrowAdd } from '../../../../services/api'
import { imagurl } from '../../../../services/config/apiurl'
import company from '../../../../assets/img/company.png'
export default class Lists extends Component {
    state = {
        stores: []
    }
    UNSAFE_componentWillMount () {
        notification.config({
          placement: 'topRight',
          top: '8%',
          duration: 3,
        });
        message.config({
            top: '8%',
            duration: 2,
        })
        this.onGetStore();
    }   
    onGetStore = async () => {
        const resp = await storeAll();
        console.log(resp);
        
        resp.code === 200 && this.setState({
            stores: resp.data
        }) 
    }
    openNotification = () => {
      notification.info({
        message: 'เตือน!!',
        description:`การแจ้งปัญหา โปรดติดต่อโดยตรง, Please direction connected`,
      });
    };
    confirm(e) {
        console.log(e);
        message.success('Click on Yes');
    }
    cancel(e) {
        console.log(e);
        message.error('Click on No');
    }
    confirmBorrow = async (id) => {
        const data = {
            storeid: id
        }
        console.log('Store/lists: ', data);
        await borrowAdd(data, sessionStorage.getItem('access_token'));
        message.success('รออนุมัติการยืม');
    }
    cancelBorrow(e) {
        console.log(e);
        message.error('Click on No Borrow');
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                pageSize: 3
                            }}
                            dataSource={typeof this.state.stores !== 'undefined' && this.state.stores}
                            footer={ <div> <b>COMPANY</b> borrow </div> }
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[
                                        <Popconfirm
                                            title="Are you sure to edit"
                                            onConfirm={this.confirm}
                                            onCancel={this.cancel}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                          <span>แก้ไข</span>
                                        </Popconfirm>,
                                        <span onClick={this.openNotification} >แจ้งปัญหา</span>,
                                        <Popconfirm
                                            title="Are you sure to edit"
                                            onConfirm={(e) => this.confirmBorrow(item._id)}
                                            onCancel={this.cancelBorrow}
                                            okText="Yes"
                                            cancelText="No"
                                      >
                                        <Button 
                                        shape="circle"
                                        >
                                            ยืม
                                        </Button>                                      
                                        </Popconfirm>
                                    ]}
                                    extra={
                                        <img
                                            width={272}
                                            alt="store-img"
                                            src={typeof item.picture !== 'undefined' && imagurl+item.picture}
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={company} />}
                                        title={<span>{item.name}</span>}
                                        description={item.option}
                                    />
                                    {item.detail}
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
