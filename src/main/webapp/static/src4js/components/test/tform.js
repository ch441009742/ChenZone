import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

const SeoCreateForm = Form.create()(
    (props) => {
        const { form } = props;
        const { getFieldDecorator } = form;
        const saveFormData = () => {
            form.validateFields((err, values) => {
                if (err) {
                    return;
                }
                console.log(values);
                // 在这里执行保存到服务器的操作使用axios
                message.success('保存成功！')
            });
        }

        return (
            <div className="new-wrap">
                <Form layout='vertical'>

                    <FormItem
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 12 }}
                        label="网站标题：">
                        {getFieldDecorator('webName', {
                            rules: [{ required: true, message: '请填写网站的标题' }],
                        })(
                            <Input placeholder="请准确填写网站的标题" />
                        )}
                    </FormItem>

                    <FormItem
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 12 }}
                        label="关键词："
                    >
                        {getFieldDecorator('keywords', {
                            rules: [{ required: true, message: '请填写网站的标题' }],
                        })(
                            <Input placeholder="请准确填写网站被搜索时的关键词以逗号分隔" />
                        )}

                    </FormItem>

                    <FormItem
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 12 }}
                        label="站长统计："
                    >
                        {getFieldDecorator('friendshop')(
                            <TextArea rows={3} placeholder="请将百度统计或站长统计的数据统计所用代码复制/粘贴进来" />
                        )}
                    </FormItem>
                    <Button type="primary" onClick={saveFormData}>保存</Button>

                </Form>
            </div>
        )
    }
)

class SeoBetter extends Component {
    render() {
        return (
            <div>
                <SeoCreateForm />
            </div>

        )
    }
}
export default SeoBetter;
