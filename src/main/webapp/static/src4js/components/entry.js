import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link, HashRouter, hashHistory } from 'react-router-dom'
import { Button } from 'antd'

import Login from './login/login';
import Test from './test/test'
import Home from './test/Home'
import form from './test/tform'




class Root extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>

                <div>

                    <div><Button>  <Link to='/test'>test</Link></Button></div>
                    <div><Button><Link to='/login'>login</Link></Button></div>
                    <div><Button>  <Link to='/home'>home</Link></Button></div>
                    <div><Button><Link to='/form'>form</Link></Button></div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>

        );
    }
}
ReactDom.render((
    <HashRouter history={hashHistory}>
        <Root>
            <Route path='/home' component={Home}></Route>
            <Route exact path="/test" component={Test}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/form' component={form}></Route>
        </Root>
    </HashRouter>
)
    ,
    document.getElementById('app')
);