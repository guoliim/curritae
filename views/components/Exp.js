import React from 'react'
import PropTypes from 'prop-types'

class Exp extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            item: this.props.value.item,
            link: this.props.value.link,
            detail: this.props.value.detail
        }
    }
    render() {
        return(
            <div>
                <p className="exp-title"><a className="exp-a" href={this.state.link} >{this.state.item}</a></p>
                <p className="exp-detail">{this.state.detail}</p>
            </div>
        )
    }
}

Exp.propTypes = {
    item: PropTypes.string,
    link: PropTypes.string,
    detail: PropTypes.string,
}

export default Exp
