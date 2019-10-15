import React from 'react'
import { List, Avatar } from 'antd';


const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
class File extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }
    componentWillMount() {
        this.getFileList();
    }
    componentDidUpdate() {
        console.log("1");
        //this.getFileList();
    }

    getFileList() {
        var _this = this;

        fetch("/file/list",

        ).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            _this.setState(state => ({
                data: myJson
            }))
        })
    }

    render() {
        return (
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a target="_blank" href={item.filepath}>{item.filename}</a>}
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default File 