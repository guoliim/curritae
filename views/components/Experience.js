import React from 'react'
import PropTypes from 'prop-types'
import Label_exp from './Label_exp'
import Exp from './Exp'

class Experience extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            exps: this.props.exps || []
        }
    }

    componentWillReceiveProps(nextProps) {
        if ( this.props.exps !== nextProps.exps) {
            this.setState({exps: nextProps.exps});
        }
    }

    render() {
        return(
            <div id="experience" className="exp">
                <Label_exp/>
                {this.state.exps.map((exp) =>
                    <Exp key={exp.item} value={exp}/>
                )}
            </div>
        )
    }
}

Experience.propTypes = {
    exps: PropTypes.array,
}

export default Experience
