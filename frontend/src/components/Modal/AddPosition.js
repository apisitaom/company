import React, { Component } from 'react'
import { Modal, Input } from 'antd'
import { Button } from 'reactstrap'
import { positionAdd } from '../../services/api'
export default class AddPosition extends Component {
state = { 
    visible: false 
};

showModal = () => {
  this.setState({
    visible: true,
  });
};

handleOk = async () => {
  this.setState({
    visible: false,
  });
  const data = {
      position: this.state.position
  }
  if (this.state.position !== 'undefined' || this.state.position !== null) {
    await positionAdd(data);
  }
};

handleCancel = e => {
  this.setState({
    visible: false,
  });
};
    render() {
        return (
            <div>
                <Button onClick={this.showModal} type="reset" size="sm" color="Info">เพิ่มตำเเหน่ง</Button>
                <Modal
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  closeIcon={true}
                >
                <Input placeholder="เพิ่มตำแหน่ง" 
                autoComplete="position"
                onChange={(e) => this.setState({position: e.target.value})}
                />
                </Modal>
            </div>
        )
    }
}
