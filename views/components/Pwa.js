import React from 'react'
import PropTypes from 'prop-types'

import Head from './Head'
import MainContainer from './MainContainer'

class Pwa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {detail: this.props.detail}
    }

    // componentDidMount() {
    //     fetch("./api/config.json",{
    //
    //     }).then(res => {
    //         if(res.ok) {
    //             res.json().then(data => {
    //                 console.log(data);
    //                 let detail = data;
    //                 this.setState({detail: detail});
    //             });
    //         } else {
    //             console.log("ERROR : ", res.status);
    //         }
    //     }, e => {
    //         console.log("Fetch failed", e);
    //     });
    // }

    render() {

        return(
            <div className="mdl-card mdl-shadow--2dp resume">
                <Head name={this.state.detail.name}/>
                <MainContainer detail={this.state.detail}/>
            </div>
        )
    }
}

Pwa.propTypes = {
    detail: PropTypes.object
}

export default Pwa
