import React from 'react'
import PropTypes from 'prop-types'
import Label_lan from './Label_lan'
import Cet_6 from './Cet_6'

class Language extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lang: this.props.lang || ""
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.lang !== nextProps.lang) {
            this.setState({lang: nextProps.lang})
        }
    }

    render() {
        return(
            <div className="item-left">
                <Label_lan/>
                <Cet_6 lang={this.state.lang}/>
            </div>
        )
    }
}

Language.propTypes = {
    lang: PropTypes.string,
}

export default Language