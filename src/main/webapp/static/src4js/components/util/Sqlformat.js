import React from 'react'
import { Input } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';

const { TextArea } = Input;

class Sqlformat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            outsql: ""
        };
    }



    format(type) {
        var _this = this;
        //var data = "type:'" + type + "',sql:'" + this.state.value + "'";
        //console.log(data);
        var sql = this.state.value;
        var data = {
            "sql": sql,
            "type": type
        }
        console.log(JSON.stringify(data))
        fetch("/util/sqlformat",
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                //credentials: 'include',
            }
        ).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            console.log(myJson);
            _this.setState(state => ({
                outsql: myJson.outsql
            }))
        })

    }

    handleGetInputValue(event) {
        this.setState({
            value: event.target.value
        })
        console.log(this.state.value)
    };


    render() {
        return (
            <div>

                <Row>
                    <Col span={8}>
                        <TextArea rows={8} value={this.state.value} onChange={this.handleGetInputValue.bind(this)} />
                    </Col>
                    <Col span={1}>

                    </Col>
                    <Col span={2}>
                        <Button type="primary" block onClick={() => { this.format('Mysql') }}>
                            Mysql
                        </Button>
                        <Button type="primary" block onClick={() => { this.format('Sqlserver') }}>
                            Sqlserver
                        </Button>
                        <Button type="primary" block onClick={() => { this.format('Oracle') }}>
                            Oracle
                        </Button>
                    </Col>
                    <Col span={1}>

                    </Col>
                    <Col span={8}>
                        <TextArea rows={8} value={this.state.outsql} />
                    </Col>
                </Row>


            </div>
        )
    }
}

export default Sqlformat 