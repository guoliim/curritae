import React from 'react'
import PropTypes from 'prop-types'
import Left from './Left'
import Right from './Right'

class MainContainer extends React.Component {
    constructor(props) {
        super(props)
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
        const style1 = {
            margin: 0
        };
        return(
            <div className="mdl-grid mdl-grid--no-spacing" style={style1}>
                <Left detail={this.state.detail}/>
                <Right detail={this.state.detail}/>
            </div>
        )
    }
}

MainContainer.propTypes = {
    detail: PropTypes.object,
}

export default MainContainer