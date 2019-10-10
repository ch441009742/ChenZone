
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom"





import index4l from './index4l'
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
    const page = this.props.children;
    return (
      <div >

        <HashRouter>
          <Route path="/" component={index4l} />
          <Route path="/home" component={Home} />
          <Route path="/demo" component={Demo} />
          <Route path="/note" component={Note} />
          <Route path="/void" component={Void} />
          <Route path="/regin" component={Regin} />
          <Route path="/leetcode" component={Leetcode} />
          <Route path="/game" component={Game} />
          <Route path="/util" component={Util} />
          <Route path="/file" component={File} />



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