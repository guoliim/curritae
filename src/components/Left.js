import React from 'react'
import PropTypes from 'prop-types'
import Education from './Education'
import Language from './Language'
import Skill from './Skill'

class Left extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({detail: nextProps.detail});
    }

    render() {
        const style2 = {
            paddingRight: 8 + 'px',
            width: 45 + '%'
        };
        return(
            <div className="mdl-cell mdl-cell--6-col" style={style2}>
                <div id="left" className="mdl-card card-left">
                    <Education education={this.state.detail.edu}/>
                    <Language lang={this.state.detail.cet6}/>
                    <Skill skills={this.state.detail.skill}/>
                    <div id="left-margin"/>
                </div>
            </div>
        )
    }
}

Left.propTypes = {
    detail: PropTypes.object,
}

export default Left