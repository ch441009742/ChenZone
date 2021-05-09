
import React from "react";
import ReactDOM from "react-dom";
import { Select } from 'antd';

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
//import Rootm from './index-m'

const { Option } = Select;


class Root extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ismobile: false
    };
  }

  componentWillMount() {
    var userAgentInfo = navigator.userAgent.toLowerCase();
    var Agents = ["android", "iphone",
      "symbianos", "windows phone",
      "ipad", "ipod"];
    var ly = document.referrer; //返回导航到当前网页的超链接所在网页的URL
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) >= 0 && (ly == "" || ly == null)) {
        this.setState(state => ({
          ismobile: true
        }))
      }
    }
  }
  handleChange(value) {
    if (value.indexOf("mobile") > -1) {
      this.setState(state => ({
        ismobile: true
      }))
    } else {
      this.setState(state => ({
        ismobile: false
      }))
    }
    console.log(value)
  }




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
      <div>
   


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
          </div>
        
      
    )
  }
}


ReactDOM.render((
  <Root />
), document.getElementById('app'));