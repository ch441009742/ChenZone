import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    tickkk() {
        this.setState(state => ({
            value: state.value + 1
        }));
    }

    render() {
        var value = this.state.value;
        return <div>
            <button onClick={() => alert("test1")} >开始</button>
            <button >停止</button>
            <h1>{value}</h1>
        </div>
    }
    //在第一次渲染后调用，只在客户端
    // componentDidMount() {
    //     this.interval = setInterval(() => this.tickkk(), 1000);
    // }
    // //在渲染前调用,在客户端也在服务端。
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

}
export default Test