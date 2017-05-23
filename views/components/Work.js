import React from 'react'
import PropTypes from 'prop-types'
import Label_work from './Label_work'
import Works from './Works'

class Work extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            works: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({works: nextProps.work});
    }

    render() {
        return(
            <div id="work" className="skill">
                <Label_work/>
                {this.state.works.map((work) =>
                    <Works key={work.item} value={work}/>
                )}
            </div>
        )
    }
}

Work.propTypes = {
    works: PropTypes.array
}

export default Work
