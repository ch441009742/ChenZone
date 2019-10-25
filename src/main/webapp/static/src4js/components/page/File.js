import React from 'react'
import { List, Avatar } from 'antd';
import { Upload, message, Button, Icon } from 'antd';



const upload = {
    name: 'file1',
    action: '/file/upload',
    //  headers: {
    //    authorization: 'authorization-text',
    //  },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
            File.getFileList();
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
class File extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
        File.getFileList = this.getFileList.bind(this);
    }



    componentWillMount() {
        this.getFileList();
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
                <Upload {...upload}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
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