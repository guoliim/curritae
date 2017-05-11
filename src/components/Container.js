import React from 'react'
import PropTypes from 'prop-types'
import Head from './Head'
import Abstract from './Abstract'
import MainContainer from './MainContainer'
import Contact from './Contact'

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {detail: {}};
    }

    componentDidMount() {
        fetch("./api/config.json").then(res => {
            if(res.ok) {
                res.json().then(data => {
                    let detail = data;
                    this.setState({detail: detail});
                });
            } else {
                console.log("ERROR : ", res.status);
            }
        }, e => {
            console.log("Fetch failed", e);
        });
    }

    render() {
        return(
            <div className="mdl-card mdl-shadow--2dp resume">
                {/*<div>{this.state.name}</div>*/}
                {/*由下到上层级嵌套？*/}
                <Head name={this.state.detail.name}/>
                <Abstract abstract={this.state.detail.abstract}/>
                <MainContainer detail={this.state.detail}/>
                <Contact contact={this.state.detail.contact}/>
            </div>
        )
    }
}

Container.propTypes = {
    detail: PropTypes.object
}

export default Container