import React, { Component } from 'react'
import { Button, Modal, Input } from 'antd'
import { categoryAdd } from '../../services/api'
export default class AddCategory extends Component {
state = { 
    visible: false 
};

showModal = async () => {
  this.setState({
    visible: true,
  });
};

handleOk = async () => {
  this.setState({
    visible: false,
  });
  const data = {
    category: this.state.category
}  
  if (this.state.category !== 'undefined' || this.state.category !== null) {
    await categoryAdd(data);
  }
};

handleCancel = e => {
  this.setState({
    visible: false,
  });
};
    render() {      
        console.log(this.state);
          
        return (
            <div>
                <Button 
                onClick={this.showModal}
                >
                  เพิ่มประเภท
                </Button>
                <Modal
                  title="Basic Modal"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  closeIcon={true}
                >
                <Input placeholder="เพิ่ม Category" 
                autoComplete="category"
                onChange={(e) => this.setState({category: e.target.value})}
                />
                </Modal>
            </div>
        )
    }
}
