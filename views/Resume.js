import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import routes from './routes'

import '../style/material.css';
import '../style/resume.css';

class Resume extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Route {...routes[0]}/>
            </BrowserRouter>
        )
    }
}

export default Resume