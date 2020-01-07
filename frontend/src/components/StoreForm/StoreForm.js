import React, { Component } from 'react'
import { Upload, Icon, Form, Input, Select, message, Button } from 'antd'
import { Row, Col, Label } from 'reactstrap'
import { categoryAll, storeAdd } from '../../services/api'
const { TextArea } = Input
const { Option } = Select;
class StoreForm extends Component {
    state = {
        imgFile: null,
        loading: false,
        category: '',
        name: '',
        option: '',
        detail: '',
        categorys: []
    }
    UNSAFE_componentWillMount () {
        this.onGetCategory();
        message.config({
            top: '8%',
            duration: 2,
        })
    }
    onGetCategory = async () => {
        const resp = await categoryAll();
        resp.code === 200 && this.setState({
            categorys: resp.data
        })
    }
    handleChange = async (value) => {
      this.setState({
          category: value
      })
    }
    handleSubmit = async e => {
      e.preventDefault()    
      this.props.form.validateFields(async (err, value) => {
        if (!err) {
          const formData = await this.setFormData(value); 
          const resp = await storeAdd(formData);
          if (resp.code === 200) {
            window.location.assign('#product');
          } else {
            message.error('Add Product failed, Please try again');
          }
        }
      })
    }
    setFormData = (values) => {
      const formData = new FormData()
      formData.append('picture', this.state.imgFile)    
      formData.append('category', values.category)    
      formData.append('name', values.name)    
      formData.append('option', values.option)  
      formData.append('detail', values.detail)    
      return formData
    }
    beforeUpload = file => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
          message.config({
              top:200
          })
        message.error('You can only upload JPG/PNG file!')
        return false;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error({content: 'Image must smaller than 2MB!', })
        return false;
      }
      const reader = new FileReader();
      reader.onload = e => {
        this.setState({
          imageUrl: e.target.result
        });
      };
      reader.readAsDataURL(file);
      this.setState({
        imgFile: file
      })    
      return false;
    };
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
                            {getFieldDecorator('category', {
                                rules: [{required: true, message: 'Please Select category!' }],
                            })(
                                <Select style={{ width: '50%' }} onChange={this.handleChange} placeholder="เลือกประเภท">
                                    {
                                        typeof this.state.category !== 'undefined' ? this.state.categorys.map(index =>{
                                            return (
                                            <Option key={index.category}>{index.category}</Option>
                                            )
                                        }) : <Option>undefined</Option>
                                    }
                                </Select>
                                    ,)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Please input names!' }],
                            })(
                                <Input placeholder="ชื่อ/สิ่งของ" />
                                    ,)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('option', {
                                rules: [{ required: true, message: 'Please input options!' }],
                            })(
                                <Input placeholder="รายละเอียดคร่าวๆ เช่น สี, ขนาด..." />
                                ,)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('detail', {
                                rules: [{ required: true, message: 'Please input detail!' }],
                            })(
                                <TextArea placeholder="รายละเอียด/สิ่งของ" />
                                ,)}
                        </Form.Item>
                        <Form.Item>
                          <Button type="primary" htmlType="submit"  >
                              SUBMIT
                          </Button>
                        </Form.Item> 
                    </Form>
                </Col>
            </Row>
        )
    }
}
const StoreAddForm = Form.create({ name: 'store_form' })(StoreForm);
export default StoreAddForm

