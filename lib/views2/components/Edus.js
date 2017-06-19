import React from 'react'

import Label from './Label'

const Edu = () => {

    return (
        <div className="edu">
            <Label title={'教育经历'} url={'./img/ic_school_24px.svg'}/>
            <div className="edu-container">
                <div className="edu-item"><span className="edu-item_left">时间</span><span className="edu-item_right">2014 ~ 至今</span></div>
                <div className="edu-item"><span className="edu-item_left">学校</span><span className="edu-item_right">南京师范大学(硕士)</span></div>
                <div className="edu-item"><span className="edu-item_left">专业</span><span className="edu-item_right">地图学与地理信息系统</span></div>
                <div className="edu-item"><span className="edu-item_left">时间</span><span className="edu-item_right">2010 ~ 2014</span></div>
                <div className="edu-item"><span className="edu-item_left">学校</span><span className="edu-item_right">安徽建筑大学(本科)</span></div>
                <div className="edu-item"><span className="edu-item_left">专业</span><span className="edu-item_right">资源环境与城乡规划管理</span></div>
            </div>
        </div>
    )
}

export default Edu
