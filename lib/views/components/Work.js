import React from 'react'
import PropTypes from 'prop-types'
import Label from './Label'
import Works from './Works'

const Work = ({works = []}) => {
    const imgsrc = './img/ic_work_24px.svg'

    return (
        <div id="work" className="skill">
            <Label src={imgsrc}/>
            {works.map((work) =>
                <Works key={work.item} value={work}/>
            )}
        </div>
    )
}

Work.propTypes = {
    works: PropTypes.array
}

export default Work
