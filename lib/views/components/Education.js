import React from 'react'
import PropTypes from 'prop-types'
import Label_edu from './Label_edu'
import Undergraduate from './Undergraduate'

const Education = ({edus = []}) => {
    return (
        <div id="education" className="item-left">
            <Label_edu/>
            {edus.map((edu) =>
                <Undergraduate key={edu.time} time={edu.time} school={edu.school} spec={edu.special}/>
            )}
        </div>
    )
}

Education.propTypes = {
    edus: PropTypes.array,
}

export default Education
