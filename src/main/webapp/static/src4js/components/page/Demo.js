import React from 'react'
import { Modal, Button } from 'antd';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            visible: false ,
            deleteFilePath:''
        };
    }


    showModal () {
        this.setState({
          visible: true,
        });
      };
    
    handleOk() {
  
        this.setState({
            visible: false,
        });
    };
    
    handleCancel(){
  
        
        this.setState({
            visible: false,
        });
      
    };

    render() {
        return (
          <div>
            <Button type="primary" onClick={this.showModal.bind(this)}>
              Open Modal
            </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk.bind(this)}
              onCancel={this.handleCancel.bind(this)}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
        );
      }
}

export default Demo 