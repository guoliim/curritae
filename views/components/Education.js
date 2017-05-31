import React from 'react'
import PropTypes from 'prop-types'
import Label_edu from './Label_edu'
import Undergraduate from './Undergraduate'

class Education extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            edus: this.props.education || []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.education !== nextProps.education) {
            this.setState({edus: nextProps.education})
        }
    }

    render() {
        return(
            <div id="education" className="item-left">
                <Label_edu/>
                {this.state.edus.map((edu) =>
                    <Undergraduate key={edu.time} time={edu.time} school={edu.school} spec={edu.special}/>
                )}
            </div>
        )
    }
}

Education.propTypes = {
    edus: PropTypes.array,
}

export default Education
