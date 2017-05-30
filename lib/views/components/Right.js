import React from 'react'
import PropTypes from 'prop-types'
import Work from './Work'
import Experience from './Experience'

class Right extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            detail: this.props.detail || {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.detail !== nextProps.detail) {
            this.setState({detail: nextProps.detail})
        }
    }

    render() {
        const style5 = {
            width: 55 + '%'
        };
        return(
            <div className="mdl-cell mdl-cell--6-col" style={style5}>
                <div id="right" className="mdl-card card-right">
                    <Work work={this.state.detail.work}/>
                    <Experience exps={this.state.detail.experiences}/>
                    <div id="right-margin"/>
                </div>
            </div>
        )
    }
}

Right.propTypes = {
    detail: PropTypes.object,
}

export default Right
