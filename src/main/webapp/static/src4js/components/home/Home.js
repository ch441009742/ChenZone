import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {ReacrRouter,Link} from 'react-router'
import Test2 from "../test/test2"
const { Header, Content, Footer } = Layout;

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    cilckMenu(e){
        this.setState({
            value:e.key
        })
    }
    render(){
        return(
            <Layout className="layout">
                <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '55px' }}
                    onClick={this.cilckMenu.bind(this)}
                >
                    <Menu.Item key="1"><h2 style={{color:'#fff'}}>
                    <Link to="/">home</Link>
                    </h2></Menu.Item>
                    <Menu.Item key="2"><h2 style={{color:'#fff'}}>
                    <Link to="/test">home</Link>
                    </h2></Menu.Item>
                    <Menu.Item key="3"><h2 style={{color:'#fff'}}>setting</h2></Menu.Item>
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' ,background: '#001529',height:"100%"}}>
                <div style={{ background: '#001529', padding: 24, minHeight: 800 }}>
                <h3 style={{color:'#fff'}}>
                    {this.state.value}
                </h3>
                </div>
                </Content>
                <Footer style={{ textAlign: 'center',background: '#001529' }}>
                <h3 style={{color:'#fff'}}>
                    @2019 CCZ
                </h3>
                </Footer>
            </Layout>
        )
    }

} 
export  default Home;