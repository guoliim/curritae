import React from 'react'
import PropTypes from 'prop-types'

import Label from './Label'
import Edu from './Edu'

const EduList = ({ edus = [] }) => {

    return (
        <div className="edu">
            <Label title={'教育经历'} url={'./img/ic_school_24px.svg'} alt={'教育经历'}/>
            <div className="edu-container">
                {edus.map((edu) => (
                    <Edu
                        {...edu}
                        key={edu.time}
                    />
                ))}
            </div>
        </div>
    )
}

EduList.propTypes = {

    edus: PropTypes.array,
}

export default EduList
