import React from 'react'
import { List, Card } from 'antd';
import { Modal, Button, Icon, Form, Input, Radio } from 'antd';


class AddForm extends React.Component {
    render() {
        const { visible, onCancel, onOk, form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <div>
                <Modal
                    title="Basic Modal"
                    visible={visible}
                    onOk={onOk}
                    onCancel={onCancel}
                >
                    <Form layout="vertical">
                        <Form.Item label="问题名称">
                            {getFieldDecorator('qname', {
                                rules: [{ required: true, message: '请输入!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="详细描述">
                            {getFieldDecorator('qcontent', {
                                rules: [{ required: true, message: '请输入!' }],
                            })(<Input type="textarea" />)}
                        </Form.Item>
                        <Form.Item label="输入参数个数">
                            {getFieldDecorator('inNum', {
                                rules: [{ required: true, message: '请输入!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="输入参数类型">
                            {getFieldDecorator('inType', {
                                rules: [{ required: true, message: '请输入!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="输出参数个数">
                            {getFieldDecorator('outNum', {
                                rules: [{ required: true, message: '请输入!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="输出参数类型">
                            {getFieldDecorator('outType', {
                                rules: [{ required: true, message: '请输入!' }],
                            })(<Input />)}
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

const QuForm = Form.create({ name: 'register' })(AddForm);

class Leetcode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: "",
            addQue: false
        };
    }


    componentDidMount() {
        var _this = this;

        fetch("/leetcode/list",
            // {
            //      method: 'GET',
            // body: "user:" + JSON.stringify(values),
            //headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' },
            //credentials: 'include',
            // }
        ).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            _this.setState(state => ({
                data: myJson
            }))
        })



    }

    showDialog() {
        this.setState({
            addQue: true
        })
    }

    closeDialog() {
        this.setState({
            addQue: false
        })
    }
    addQuestions(e) {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            //console.log('Received values of form: ', values);
            //console.log(JSON.stringify("question:" + JSON.stringify(values)));
            //console.log(JSON.stringify(values));
            fetch("/leetcode/add",
                {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: { 'Content-Type': 'application/json; charset=utf-8' },
                    //credentials: 'include',
                }
            ).then(function (response) {
                return response.json();
            }).then(function (myJson) {
                _this.setState(state => ({
                    data: myJson
                }))
            })

            form.resetFields();
            this.setState({ addQue: false });
        });



    }
    saveFormRef(formRef) {
        this.formRef = formRef;
    }
    render() {
        var datas = this.state.data;
        return (
            <div>
                <Icon type="plus-circle" theme="twoTone" style={{ fontSize: '60px' }} onClick={this.showDialog.bind(this)} />
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={datas}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.qname}
                                actions={[<Icon type="edit" onClick={() => console.log("item", item)} />]}>
                                {item.qcontent}
                            </Card>
                        </List.Item>
                    )}
                />

                {/*弹出框添加问题*/}
                <QuForm
                    wrappedComponentRef={this.saveFormRef.bind(this)}
                    visible={this.state.addQue}

                    onOk={this.addQuestions.bind(this)}
                    onCancel={this.closeDialog.bind(this)}

                />

            </div>

        )
    }
}
export default Leetcode