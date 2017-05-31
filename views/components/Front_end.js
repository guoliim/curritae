import React from 'react'
import PropTypes from 'prop-types'
import imageCode from '../../img/ic_code_24px.svg';

class Front_end extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.value.item || [],
            detail: this.props.value.detail || "",
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value.item !== nextProps.value.item) {
            this.setState({item: nextProps.value.item})
        }
        if (this.props.value.detail !== nextProps.value.detail) {
            this.setState({detail: nextProps.value.detail})
        }
    }

    render() {
        return(
            <div>
                <div className="skill-label">
                    <img className="skill-label_svg" src={imageCode} />
                    <div className="title">
                        <span className="skill-title_letter">{this.state.item}</span>
                    </div>
                </div>
                <ul className="skill-detail">
                    {this.state.detail.map((item) =>
                        <li key={item}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

Front_end.propTypes = {
    item: PropTypes.string,
    detail: PropTypes.array,
}

export default Front_end