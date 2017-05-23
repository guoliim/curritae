import React from 'react'
import PropTypes from 'prop-types'

class Abstract extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            abstract: 'abstract'
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({abstract: nextProps.abstract});
    }
    render() {
        return(
            <div className="abstract">
                <p className="abstract-detail">{this.state.abstract}</p>
            </div>
        )
    }
}

Abstract.propTypes = {
    abstract: PropTypes.string
}

export default Abstract