import React from 'react'
import PropTypes from 'prop-types'

import Label from './Label'
import Exp from './Exp'

const ExpList = ({ exps = [] }) => {

    return (

        <div className="exps">
            <Label title={'个人项目实践'} url={'./img/ic_explore_24px.svg'} alt={'个人项目实践'}/>
            {exps.map((exp) => (
                <Exp
                    {...exp}
                    key={exp.item}
                />
            ))}
        </div>
    )
}

ExpList.propTypes = {

    exps: PropTypes.array,
}

export default ExpList
