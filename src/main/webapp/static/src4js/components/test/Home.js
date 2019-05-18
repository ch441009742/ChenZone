import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Router, Route, Link, IndexRoute } from 'react-router-dom'

import Demo from '../page/Demo'
import Note from '../page/Note'

const { Header, Content, Footer } = Layout;


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: <Demo />
        };
    }



    render() {

        return (
            <Layout className="layout">
                <Header>
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
                </Header>

            </Layout>


        )
    }
}


export default Home 