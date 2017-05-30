import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import JSON5 from 'json5'

import routes from './routes'
import Container from './components/Container'

import '../style/material.css';
import '../style/resume.css';

const bootupData = document.getElementById('bootupData').textContent

class Resume extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Container detail={JSON5.parse(bootupData)}/>
            </BrowserRouter>
        )
    }
}

ReactDom.render(
    <Resume/>,
    document.getElementById('root')
);
