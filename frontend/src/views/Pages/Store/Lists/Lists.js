import React, { Component } from 'react'
import { List, Avatar, Icon, Button } from 'antd';
import { Row, Col } from 'reactstrap'
export default class Lists extends Component {
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
                            dataSource={listData}
                            footer={
                                <div>
                                    <b>ant design</b> footer part
                                </div>
                            }
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[
                                        <IconText  text="รายละเอียด" key="list-vertical-star-o" />,
                                        <IconText  text="เเจ้งปัญหา" key="list-vertical-like-o" />,
                                        <Button shape="circle">ยืม</Button>
                                    ]}
                                    extra={
                                        <img
                                            width={272}
                                            height={153}
                                            alt="logo"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
