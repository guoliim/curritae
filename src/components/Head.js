import React from 'react'
import PropTypes from 'prop-types'

class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    componentWillReceiveProps(nextPros) {
        console.log(nextPros);
        this.setState({name: nextPros.name});
    }

    render() {
        return(
            <div>
                <div className="head">
                    <h1 className="name">{this.state.name}</h1>
                    <p className="position">前端工程师</p>
                </div>
            </div>
        )
    }
}

Head.propTypes = {
    Head: PropTypes.string,
}

export default Head