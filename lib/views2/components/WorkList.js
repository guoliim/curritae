import React from 'react'
import PropTypes from 'prop-types'

import Label from './Label'
import Work from './Work'

const WorkList = ({ works = [] }) => {

    return (

        <div className="works">
            <Label title={'个人履历'} url={'./img/ic_work_24px.svg'} alt={'个人履历'}/>
            {works.map((work) => (
                <Work
                    {...work}
                    key={work.time}
                />
            ))}
        </div>
    )
}

WorkList.propTypes = {

    works: PropTypes.array
}

export default WorkList
