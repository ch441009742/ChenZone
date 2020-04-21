
import React from "react"
import { Player } from "video-react"
import 'video-react/dist/video-react.css'


class Void extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVideoUrl: 'https://e-cloudstore.com/e9/video/video.mp4'
        };
    }
    render() {
        return (
            <div>
                <a href=''></a>
                <div>{this.state.inputVideoUrl}</div>


                <Player>

                    <source src={this.state.inputVideoUrl} />

                </Player>
                {/* */}
            </div>
        )
    }
}


export default Void 