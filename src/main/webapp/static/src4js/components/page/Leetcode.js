import React from 'react'
import { List, Card } from 'antd';
import { Modal, Button, Icon } from 'antd';

const data = [
    {
        title: '爬楼梯',
        content: '假设你正在爬楼梯。需要 n 阶你才能到达楼顶.每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？注意：给定 n 是一个正整数。',
        inp: 1,
        outp: 1,
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
];


class Leetcode extends React.Component {
    componentDidMount() {
        fetch("/leetcode/list", {
            method: 'GET',
            // body: "user:" + JSON.stringify(values),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' },
            credentials: 'include',
        }).then(function (response) {
            console.log("response", response);
            this.data = response.json();
            console.log(datas);
        })
    }

    showDialog() {
        alert("1111");
    }
    render() {
        return (
            <div>
                <Card>
                    asd
                </Card>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.title}
                                actions={[<Icon type="edit" onClick={() => alert("1111")} />]}>

                                {item.content}

                            </Card>
                        </List.Item>
                    )}
                />
            </div>

        )
    }
}
export default Leetcode