import React from 'react'
import PropTypes from 'prop-types'

class Undergraduate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time,
            school: this.props.school,
            spec: this.props.spec
        }
    }

    render() {
        return(
            <div id="undergraduate" className="spacing">
                <p className="edu-item"><span className="edu-item_left">时间</span><span className="edu-item_right">{this.state.time}</span></p>
                <p className="edu-item"><span className="edu-item_left">学校</span><span className="edu-item_right">{this.state.school}</span></p>
                <p className="edu-item"><span className="edu-item_left">专业</span><span className="edu-item_right">{this.state.spec}</span></p>
            </div>
        )
    }
}

Undergraduate.propTypes = {
    time: PropTypes.string,
    school: PropTypes.string,
    spec: PropTypes.string,
}

export default Undergraduate
