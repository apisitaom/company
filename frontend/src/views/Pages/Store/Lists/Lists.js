import React, { Component } from 'react'
import { List, Avatar, Icon, Button } from 'antd';
import { Row, Col } from 'reactstrap'
import { storeAll } from '../../../../services/api'
import { imagurl } from '../../../../services/config/apiurl'
export default class Lists extends Component {
    state = {
        stores: []
    }
    UNSAFE_componentWillMount () {
        this.onGetStore();
    }   
    onGetStore = async () => {
        const resp = await storeAll();
        resp.code === 200 && this.setState({
            stores: resp.data
        }, () => console.log(this.state.stores)) 
    }
    render() {
        const listData = [];
        for (let i = 0; i < 23; i++) {
            listData.push({
                title: `Macbook Pro 201${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description:
                    `2.4GHz Quad-Core Processor with Turbo Boost up to 4.1GHz
                    256 GB Storage
                    Touch Bar and Touch ID`,
                content:
                    `2.4GHz quad-core 8th-generation Intel Core i5 processor
                    Turbo Boost up to 4.1GHz
                    Intel Iris Plus Graphics 655
                    8GB 2133MHz LPDDR3 memory
                    256GB SSD storage¹
                    Retina display with True Tone
                    Touch Bar and Touch ID
                    Four Thunderbolt 3 ports`,
            });
        }
        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{ marginRight: 8 }} />
                {text}
            </span>
        );
        return (
            <div>
                <Row>
                    <Col>
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: page => {
                                    console.log(page);
                                },
                                pageSize: 3,
                            }}
                            dataSource={typeof this.state.stores !== 'undefined' && this.state.stores}
                            footer={
                                <div>
                                    <b>COMPANY</b> borrow
                                </div>
                            }
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[
                                        <IconText  text="เเก้ไข" key="list-vertical-star-o" />,
                                        <IconText  text="เเจ้งปัญหา" key="list-vertical-like-o" />,
                                        <Button shape="circle">ยืม</Button>
                                    ]}
                                    extra={
                                        <img
                                            width={272}
                                            alt="logo"
                                            src={typeof item.picture !== 'undefined' && imagurl+item.picture}
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
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
