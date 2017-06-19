import React from 'react'
import PropTypes from 'prop-types'

import Head from './Head'
import Left from './Left'
import Right from './Right'

class Container extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            detail: this.props.detail || {}
        }
    }

    componentDidMount() {

        if (!this.props.detail) {
            fetch("./api/config.json",{}).then((res) => {
                if (res.ok) {
                    res.json().then((data) => {
                        const detail = data
                        this.setState({ detail: detail})
                    })
                } else {
                    console.log("ERROR : ", res.status)
                }
            }, (e) => {
                console.log("Fetch failed", e)
            })
        }
    }

    render () {
        return (
            <div className="container">
                <Head name={this.state.detail.name}/>
                <Left detail={this.state.detail}/>
                <Right detail={this.state.detail}/>
            </div>
        )
    }
}

Container.propTypes = {

    detail: PropTypes.object,
}



export default Container