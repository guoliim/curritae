import React from 'react'
import PropTypes from 'prop-types'
import Label_skill from './Label_skill'
import Front_end from './Front_end'

class Skill extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            skills: this.props.skills || []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.skills !== nextProps.skills) {
            this.setState({skills: nextProps.skills})
        }
    }

    render() {
        return(
            <div id="skill" className="item-left skill-left">
                <Label_skill/>
                {this.state.skills.map((skill) =>
                    <Front_end key={skill.item} value={skill}/>
                )}
            </div>
        )
    }
}

Skill.propTypes = {
    skills: PropTypes.array
}

export default Skill
