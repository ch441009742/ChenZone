import React from 'react'


const Dstyle = {
    backgroundColor: '#111',
    height: '600px',
    width: '600px',
    borderTop: '5px outset #6699cc', /*上框线*/
    borderBottom: '5px outset #6699cc', /*下框线*/
    borderLeft: '5px outset #6699cc', /*左框线*/
    borderRight: '5px outset #6699cc' /*右框线*/

}
function test(type) {
    type = "file" + type;
    return type
}

class Demo extends React.Component {


    render() {
        return (
            <div>
                <div>
                    <input type="input" value={test("111")} accept="image/*"></input>
                </div>
            </div>
        )
    }
}

export default Demo 