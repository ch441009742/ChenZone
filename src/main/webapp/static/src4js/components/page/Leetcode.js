import React from 'react'
import { List, Card } from 'antd';
import { Modal, Button, Icon } from 'antd';



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
        alert("1111");
    }
    render() {
        var datas = this.state.data;
        return (
            <div>
                <Icon type="plus-circle" theme="twoTone" style={{ fontSize: '60px' }} onClick={() => alert("111")} />
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
            </div>

        )
    }
}
export default Leetcode