import React from 'react'
import { List, Avatar } from 'antd';
import { Upload, message, Button, Icon,Modal } from 'antd';





const staticdata=[

    {   
        filepath:"/asdasdsa/assa",
        filename:"接口报错.txt"
    },
    {   
        filepath:"/sss/dddd",
        filename:"/file/upload接口报错.txt"
    },
]
   
        
    
    
    


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


class File extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            visible: false ,
            deleteFilePath:''
        };
    }


  
    componentWillMount() {
        this.getFileList();
    }
    componentDidUpdate() {
 
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
        }).catch(function(error){
             _this.setState(state => ({
                 data: staticdata
             }))
             
        })
    }
    openDeleteFileModel(filepath){
        this.setState({
            visible: true,
            deleteFilePath:filepath
        })
    }
    handleCancel(){
        this.setState({
            visible: false,
            deleteFilePath:''
        })
      
    }
    handleOk(){
        var _this=this;
        
        fetch("/file/deletefile",{
            method: 'POST',
            body:"filepath="+_this.state.deleteFilePath,
            //JSON.stringify({filepath:"111111"}) ,
            //这个头很重要！！！
            headers: {
        　　    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            }
         
        }

        ).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            if(myJson.flag){
                alert("删除成功!");
            }else{
                alert("删除失败!")
            }
            _this.setState({
                visible: false,
            })
        }).catch(function(error){
            
            _this.setState({
                visible: false,
            })
            alert("接口/file/deletefile报错")
        })
    }

    render() {
        return (
            <div>
                <Upload {...upload} >
                    <Button>
                        <Icon type="upload" /> 点击上传文件
                    </Button>
                </Upload>
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item
                            actions={[<a key="list-loadmore-edit" onClick={()=>this.openDeleteFileModel(item.filepath)}><Icon type="close" /></a>]}    
                        >
                            <List.Item.Meta
                                title={<a target="_blank" href={item.filepath}>{item.filename}</a>}
                            />
                        </List.Item>
                    )}
                />
                <Modal
                    title="警告"
                    visible={this.state.visible}
                    onCancel={this.handleCancel.bind(this)}
                    onOk={this.handleOk.bind(this)}
                    cancelText="我再想想"
                    okText="删除！"
                    >
                   <p>请确认是否要删除文件！</p>
                </Modal>
            </div>
        )
    }
}

export default File 