import React from 'react'
import ReactDom from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import { BrowserRouter } from 'react-router-dom'
import JSON5 from 'json5'

// import routes from './routes'

// import fetchReducer from './reducers'

import Container from './components/Container'
// import GetConfig from './containers/GetConfig'

import '../../style/material.css'
import '../../style/resume.css'

const bootupData = document.getElementById('bootupData').textContent

const Resume = () => {

    if (bootupData === "") {
        return(
            <BrowserRouter>
                <Container />
            </BrowserRouter>
        )
    } else {
        return(
            <BrowserRouter>
                <Container detail={JSON5.parse(bootupData)}/>
            </BrowserRouter>
        )
    }
}

// const loggerMiddleware = createLogger()

// let store = createStore(
//     fetchReducer,
//     applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware,
//     )
// )

ReactDom.render(
    // <Provider store={store}>
        <Resume/>,
    // </Provider>,
    document.getElementById('root')
)
