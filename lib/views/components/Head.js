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
        if (this.props.name !== nextPros.name) {
            this.setState({name: nextPros.name})
        }
    }

    render() {
        return(
                <div className="head">
                    <div className="name">
                        <div>{this.state.name}</div>
                        <div className="position">前端工程师</div>
                    </div>
                    <div className="communication">
                        <div>tel:15651027309</div>
                        <div>email:im@guoli.im</div>
                        <div>github: https://github.com/guoliim</div>
                    </div>
                </div>

        )
    }
}

Head.propTypes = {
    name: PropTypes.string,
}

export default Head