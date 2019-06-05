import React from 'react'
import { Row, Col,Layout} from 'antd'
import { HashRouter, Route, Link } from "react-router-dom"
import Sqlformat from '../Util/Sqlformat'
import Sqlexecute from '../Util/Sqlexecute'

const { Header, Content, Footer } = Layout;

class Util extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                <div className="col-xs-3 col-sm-2">
                    <ul className="nav nav-pills nav-stacked">
                        <li ><Link to={`${this.props.match.url}/member`}>SQL美化</Link></li>
                        <li ><Link to={`${this.props.match.url}/honor`}>SQL执行</Link></li>
                    </ul>
                </div>
                <Route path={`${this.props.match.path}/member`} component={Sqlformat} />
                <Route path={`${this.props.match.path}/honor`} component={Sqlexecute} />
            </div>

            </div>
        )
    }
}

export default Util 