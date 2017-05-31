import React from 'react'
import PropTypes from 'prop-types'
import imageLabel from '../../img/ic_label_24px.svg';

class Works extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.value.item || "",
            time: this.props.value.time || "",
            detail: this.props.value.detail || [],
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value.item !== nextProps.value.item) {
            this.setState({item: nextProps.value.item})
        }
        if (this.props.value.time !== nextProps.value.time) {
            this.setState({time: nextProps.value.time})
        }
        if (this.props.value.detail !== nextProps.value.detail) {
            this.setState({detail: nextProps.value.detail})
        }
    }

    render() {
        return(
            <div className="spacing">
                <div className="work-label">
                    <img className="label-svg_small" src={imageLabel} />
                    <div className="work-title">
                        <span className="work-title_letter">{this.state.item}</span>
                    </div>
                </div>
                <p className="time">{this.state.time}</p>
                <ul className="work-detail">
                    {this.state.detail.map((item) =>
                        <li key={item}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}
Works.propTypes = {
    item: PropTypes.string,
    time: PropTypes.string,
    detail: PropTypes.array,
}

export default Works
