import React, { Component } from 'react'
import { Upload, Icon, Form, Input } from 'antd'
import { Row, Col, Label } from 'reactstrap'
const { TextArea } = Input
class StoreForm extends Component {
    state = {
        imgFile: null,
        loading: false,
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const uploadButton = (  
            <div>
                <Icon type={this.state.loading ? "loading" : "plus"} />
                <div className="ant-upload-text">Upload</div>
            </div>
        )
        return (
            <Row>
                <Col xs="12" sm="6">
                    <Form style={{ paddingTop: '1.2%' }}
                        onSubmit={this.handleSubmit}>
                        <Form.Item >
                            <Label htmlFor="name">อัพโหลดรูป</Label>
                            {getFieldDecorator('upload', {
                            })(
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    beforeUpload={this.beforeUpload}
                                >
                                    {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                </Upload>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your names!'
                                    }],
                            })(
                                <Input
                                    placeholder="ชื่อ/สิ่งของ" />
                                    ,)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your names!'
                                    }],
                            })(
                                <Input
                                    placeholder="รายละเอียดคร่าวๆ เช่น สี, ขนาด..." />
                                ,)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your names!'
                                    }],
                            })(
                                <TextArea
                                    placeholder="รายละเอียด/สิ่งของ" />
                                ,)}
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        )
    }
}
const StoreAddForm = Form.create({ name: 'store_form' })(StoreForm);
export default StoreAddForm

