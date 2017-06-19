import React from 'react'

import Label from './Label'

const Works = () => {

    return (

        <div className="works">
            <Label title={'个人履历'} url={'./img/ic_work_24px.svg'}/>
            <div className="works-item">
                <Label title={'丽水市规划成果管理信息系统'} url={'./img/ic_label_24px.svg'}/>
                <div className="works-time">2014.8 ~ 2015.1</div>
                <ul className="works-detail">
                    <li>sdd开发网页中上传并在线浏览文件的可视化widget</li>
                    <li>编写下载上传文件的后台功能</li>
                    <li>优化页面布局,编写用户操作手册</li>
                </ul>
            </div>
            <div className="works-item">
                <Label title={'专项基金:面向重点场所的建筑物内外一体化三维建模方法'} url={'./img/ic_label_24px.svg'}/>
                <div className="works-time">2015.4 ~ 2016.3</div>
                <ul className="works-detail">
                    <li>优化基于LISP的CAD二次开发代码,便于读取DXF文件的语义信息</li>
                    <li>使用CityGML建模标准,构建三维建筑模型</li>
                    <li>使用citygml4java、java编写部分CityGML模型生成算法</li>
                </ul>
            </div>
            <div className="works-item">
                <Label title={'双流县管线业务审批系统'} url={'./img/ic_label_24px.svg'}/>
                <div className="works-time">2016.4 ~ 2016.6</div>
                <ul className="works-detail">
                    <li>前端架构设计</li>
                    <li>阅读工作流实现机制原理</li>
                    <li>团队合作,制定工作计划,分配任务,保证工作进度</li>
                </ul>
            </div>
        </div>
    )
}

export default Works
