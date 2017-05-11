import React from 'react'
import PropTypes from 'prop-types'

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tel: '',
            email: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({tel: nextProps.contact.tel, email: nextProps.contact.email});
    }

    render() {
        return(
            <div id="contact" className="contact">
                <p className="contact-title">联系我</p>
                <div className="contact-detail">
                    <span className="tel">Tel :
                        <span className="tel-cell">{this.state.tel}</span>
                    </span>
                    <span className="email">Email :
                        <span className="email-address"><a href={"mailto:" + this.state.email} className="mailto">{this.state.email}</a></span>
                    </span>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    tel: PropTypes.string,
    email: PropTypes.string,
}

export default Contact