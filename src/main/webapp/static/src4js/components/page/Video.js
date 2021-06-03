
import React from "react"
import { Player } from "video-react"
import 'video-react/dist/video-react.css'


class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVideoUrl: './movie/Joker.mp4',
            preload:'metadata'
        };
    }
    render() {
        return (
            <div>
                <div>{this.state.inputVideoUrl}</div>


                <Player>

                    <source src={this.state.inputVideoUrl} />

                </Player>
                {/* */}
            </div>
        )
    }
}


export default Video 