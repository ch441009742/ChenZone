import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import Home from './page/Home'

const { Header, Content, Footer } = Layout;


class Index4l extends React.Component {




    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '50px' }}
                        >

                            <Menu.Item key="1"><Link to="/home"><h2 style={{ color: '#fff' }}>home</h2></Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/note"><h2 style={{ color: '#fff' }}>note</h2></Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/demo"><h2 style={{ color: '#fff' }}>demo</h2></Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/video"><h2 style={{ color: '#fff' }}>video</h2></Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/regin"><h2 style={{ color: '#fff' }}>regin</h2></Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/leetcode"><h2 style={{ color: '#fff' }}>leetcode</h2></Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/game"><h2 style={{ color: '#fff' }}>game</h2></Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/util"><h2 style={{ color: '#fff' }}>util</h2></Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/file"><h2 style={{ color: '#fff' }}>file</h2></Link></Menu.Item>
                        </Menu>

                    </Header>


                </Layout>

            </div>
        )
    }
}


export default Index4l 