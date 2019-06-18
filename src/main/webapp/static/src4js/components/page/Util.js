import React from 'react'
import { Row, Col,Layout,Tabs,PageHeader } from 'antd'
import { HashRouter, Route, Link } from "react-router-dom"
import Sqlformat from '../Util/Sqlformat'
import Sqlexecute from '../Util/Sqlexecute'

const { Header, Content, Footer } = Layout;

const { TabPane } = Tabs;

class Util extends React.Component {

    render() {
        return (
            <div>

                    <Content style={{ padding: '0 50px' }}>
                        <Tabs defaultActiveKey="1" type='line' >
                            <TabPane tab="SQL美化" key="1">
                                <Sqlformat/>
                            </TabPane>
                            <TabPane tab="SQL执行" key="2">
                                <Sqlexecute/>
                            </TabPane>                      
                        </Tabs>

                    </Content>
         
               
                 
  {/*
                <Route path={`${this.props.match.path}/member`} component={Sqlformat} />
                <Route path={`${this.props.match.path}/honor`} component={Sqlexecute} />    
              
                <div className="row">
                <div className="col-xs-3 col-sm-2">
                    <ul className="nav nav-pills nav-stacked">
                        <li ><Link to={`${this.props.match.url}/member`}>SQL美化</Link></li>
                        <li ><Link to={`${this.props.match.url}/honor`}>SQL执行</Link></li>
                    </ul>
                </div>
                <Route path={`${this.props.match.path}/member`} component={Sqlformat} />
                <Route path={`${this.props.match.path}/honor`} component={Sqlexecute} />
            </div>*/}

            </div>
        )
    }
}

export default Util 