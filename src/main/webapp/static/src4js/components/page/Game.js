import React from 'react'
import { Button, Icon, List } from 'antd';


const arr = [[false, true, false, false, true, true,],
[false, false, true, true, false, false,],
[false, true, true, true, false, true,],
[true, false, true, true, true, true,],
[false, true, true, false, false, false,],
[false, false, false, true, false, false,]]

const dd = [[1, 2, 3, 4, 5, 6,],
[7, 8, 9, 10, 11, 12,],
[13, 14, 15, 16, 17, 18,],
[19, 20, 21, 22, 23, 24,],
[25, 26, 27, 28, 29, 30,],
[31, 32, 33, 34, 35, 36]]
class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
    }
    dian(x, y) {
        console.log(x, y)
        if (arr[x][y]) {
            arr[x][y] = false;
        } else {
            arr[x][y] = true;
        }
        //最边缘去掉
        if (x != 0 && x != 5 && y != 0 && y != 5) {
            //上
            arr[x][y - 1] = !arr[x][y - 1];
            //左
            arr[x - 1][y] = !arr[x - 1][y];
            //右
            arr[x + 1][y] = !arr[x + 1][y];
            //下
            arr[x][y + 1] = !arr[x][y + 1];
        }
        //判断最上面一排
        else if (y == 0) {
            if (x == 0) {
                //右
                arr[x + 1][y] = !arr[x + 1][y];
                //下
                arr[x][y + 1] = !arr[x][y + 1];
            } else if (x == 5) {
                //左
                arr[x - 1][y] = !arr[x - 1][y];
                //下
                arr[x][y + 1] = !arr[x][y + 1];
            } else {
                //左
                arr[x - 1][y] = !arr[x - 1][y];
                //右
                arr[x + 1][y] = !arr[x + 1][y];
                //下
                arr[x][y + 1] = !arr[x][y + 1];
            }

        }
        //判断最下面一排
        else if (y == 5) {
            if (x == 0) {
                //上
                arr[x][y - 1] = !arr[x][y - 1];
                //右
                arr[x + 1][y] = !arr[x + 1][y];
            } else if (x == 5) {
                //左
                arr[x - 1][y] = !arr[x - 1][y];
                //上
                arr[x][y - 1] = !arr[x][y - 1];
            } else {
                //左
                arr[x - 1][y] = !arr[x - 1][y];
                //右
                arr[x + 1][y] = !arr[x + 1][y];
                //上
                arr[x][y - 1] = !arr[x][y - 1];
            }
        }
        //判断最左面一排
        else if (x == 0) {
            if (y == 0) {

            } else if (y == 5) {

            } else {
                //右
                arr[x + 1][y] = !arr[x + 1][y];
                //上
                arr[x][y - 1] = !arr[x][y - 1];
                //下
                arr[x][y + 1] = !arr[x][y + 1];
            }
        }
        else if (x == 5) {
            if (y == 0) {

            } else if (y == 5) {

            } else {
                //左
                arr[x - 1][y] = !arr[x - 1][y];
                //上
                arr[x][y - 1] = !arr[x][y - 1];
                //下
                arr[x][y + 1] = !arr[x][y + 1];
            }
        }

        this.setState({ num: this.state.num + 1 });


        // +1: 先获取值，相当于得到一个变量的副本，加1后，再通过setState()更新给原变量
        //this.setState({
        //    num: this.state.num + 1
        //})

        // 前++:先获取值，相当于得到一个变量的副本，然后给这个副本+1(不会作用到state)，然后把副本的加1后的值通过setState()更新给原变量
        //this.setState({
        //    num: ++this.state.num
        //})

        // 后++:先获取值，相当于得到一个变量的副本，把副本通过setState()再重新赋值给原变量，值不会有变化。然后再对副本执行+1的操作，也不会作用到state。
        //this.setState({
        //    num: this.state.num++
        //})

    }

    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}><h3 >已操作步数:{this.state.num}</h3></div>
                <List
                    grid={{ gutter: 0, column: 1 }}
                    itemLayout="horizontal"
                    dataSource={arr}
                    renderItem={(item1, x) => (
                        <List.Item>
                            <List
                                grid={{ gutter: 0, column: 6 }}
                                itemLayout="horizontal"
                                dataSource={item1}
                                renderItem={(item, y) => (
                                    <List.Item>
                                        <Button style={{ height: '50px', width: '50px' }} onClick={() => { this.dian(x, y) }}>
                                            <Icon type={item ? 'smile' : 'heart'} style={{ fontSize: '20px', color: item ? 'green' : 'red' }} />
                                        </Button>
                                    </List.Item>
                                )}
                            />
                        </List.Item>
                    )}
                />


            </div>
        )
    }
}

export default Game 