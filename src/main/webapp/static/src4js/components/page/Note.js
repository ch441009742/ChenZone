import React from 'react'
import { Input } from 'antd';

const { TextArea } = Input;

class Note extends React.Component {

    render() {
        const textStyle = {
            Width: "200px"
        }
        return (
            <div>
                <h1>笔记系列</h1>
                <TextArea style={textStyle} rows={4} />
            </div>
        )
    }
}
export default Note