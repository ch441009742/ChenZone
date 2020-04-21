import React from 'react'
import { List, Card } from 'antd';
import { Modal, Icon, Form, Input } from 'antd';


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

const staticdata = [
    {
        qname: "title1",
        qcontent: "qcontensdaaaaaadddddddddddddddddddddt11111"
    },
    {
        qname: "title2",
        qcontent: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊阿啊啊啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊啊啊啊啊啊啊阿"
    },
    {
        qname: "title3",
        qcontent: "假设你正在爬楼梯。需要 n 阶你才能到达楼顶.每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？注意：给定 n 是一个正整数。"
    },
    {
        qname: "title4",
        qcontent: "qcontent44444"
    },
]

const CardStyle = {
    //backgroundColor: '#c4c4c4',
    height: '60px'
}



class Leetcode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: "",
            addQue: false
        };
    }



    getQueList() {
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
        }).catch((error) => {
            _this.setState(state => ({
                data: staticdata
            }))
        })
    }

    componentWillMount() {
        this.getQueList();
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
                //  _this.setState(state => ({
                //      data: myJson
                //  }))
            })

            form.resetFields();
            this.setState({ addQue: false });
            this.getQueList();
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
                    grid={{
                        gutter: 20,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                    }}
                    dataSource={datas}
                    renderItem={item => (

                        <List.Item >
                            <Card title={item.qname}
                                type="inner"
                                bodyStyle={CardStyle}
                                actions={[<Icon type="edit" onClick={() => console.log("item", item)} />]}>
                                <span >
                                    {item.qcontent}
                                </span>

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