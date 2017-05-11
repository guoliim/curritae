import React from 'react'
import PropTypes from 'prop-types'

class Cet_6 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lang: this.props.lang
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({lang: nextProps.lang});
    }

    render() {
        return(
            <div id="cet-6">
                <p className="lang-cet">CET-6</p>
                <p className="lang-detail">{this.state.lang}</p>
            </div>
        )
    }
}

Cet_6.propTypes = {
    lang: PropTypes.string
}

export default Cet_6