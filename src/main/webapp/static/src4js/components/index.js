
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom"

import Index4l from './index4l'
import Home from './page/Home'
import Demo from './page/Demo'
import Note from './page/Note'
import Void from './page/Void'
import Regin from './page/Regin'
import Leetcode from './page/Leetcode'
import Game from './page/Game'
import Util from './page/Util'
import File from './page/File'



class Root extends React.Component {


  render() {
    {/*

 
    const BRoute = ({ to, ...rest }) => (
      <Route path={to} children={({ match }) => (
        <li className={match ? 'active' : ''}>
          <Link to={to}{...rest} />
        </li>
      )} />
    )
*/}
    const divStyle = {
      Width: '100%',
      paddingTop: '20px',
      backgroundColor: '#c4c4c4',
      marginLeft: '80px'
    }
    const DStyle = {
      backgroundColor: '#c4c4c4',
      height: '1000px'
    }
    const BRoute = ({ path: path, component: Component }) => (
      <Route path={path} render={() => (
        <div style={divStyle}>
          <Component />
        </div>
      )

      } />
    )

    return (
      <div style={DStyle}>

        <HashRouter>
          <Index4l />
          <BRoute path="/home" component={Home} />
          <BRoute path="/demo" component={Demo} />
          <BRoute path="/note" component={Note} />
          <BRoute path="/void" component={Void} />
          <BRoute path="/regin" component={Regin} />
          <BRoute path="/leetcode" component={Leetcode} />
          <BRoute path="/game" component={Game} />
          <BRoute path="/util" component={Util} />
          <BRoute path="/file" component={File} />
        </HashRouter>
        {/*
        <Footer style={{ textAlign: 'center' }}>
                  Ccz ©2018 Created by Ant UED
                </Footer>
        */}
      </div>
    )
  }
}


ReactDOM.render((
  <Root />
), document.getElementById('app'));