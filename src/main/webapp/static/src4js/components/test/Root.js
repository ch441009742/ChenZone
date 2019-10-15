import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';

class Root extends React.Component {

    render() {
        return (
            <div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                //onClick={this.selectMenu.bind(this)}
                >
                    <Menu.Item key="1"><Link to="/demo"><h2 style={{ color: '#fff' }}>home</h2></Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/note"><h2 style={{ color: '#fff' }}>note</h2></Link></Menu.Item>
                </Menu>
            </div>

        )
    }

}


export default Root 