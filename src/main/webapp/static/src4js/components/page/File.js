import React from 'react'
import { List, Avatar } from 'antd';
import { Upload, message, Button, Icon, Card } from 'antd';
const { Meta } = Card;



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
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const staticdata = [
    {
        filename: "title1",
        filepath: "./img/1.png"
    },
    {
        filename: "title2",
        filepath: "./img/2.png"
    },
    {
        filename: "title3",
        filepath: "./img/3.png"
    },
    {
        filename: "title4",
        filepath: "./img/4.png"
    },
]

function getfiletype(filepath) {
    console.log("filepath", filepath);

    var type = filepath.substr(filepath.lastIndexOf(".") + 1, filepath.length)
    console.log("type", type);
    if (type == "jpg" || type == "png" || type == "gif") {
        return filepath
    } else if (type == "mp4" || type == "avi") {
        return "./img/movie.ico"
    } else if (type == "mp3") {
        return "./img/music.ico"
    } else {
        return "./img/file.ico"
    }
}

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
        }).catch((error) => {
            _this.setState(state => ({
                data: staticdata
            }))
        })
    }



    render() {
        return (
            <div>
                <Upload {...upload}>
                    <Button>
                        <Icon type="upload" /> 点击上传文件
                    </Button>
                </Upload>

                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                    }}
                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <div>
                                        <Card
                                            hoverable
                                            style={{ width: 150 }}
                                            cover={<img alt="example" src={getfiletype(item.filepath)} height='150px' width='150px' />}
                                        >
                                            <Meta title={item.filename} />
                                        </Card>
                                    </div>
                                }
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default File 