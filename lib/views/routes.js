import Container from './components/Container'
import json5 from 'json5'

const routes = [
    {
        path: '/',
        component: Container,
        getData: () => {
            let bootupData = document.getElementById('bootupData').textContent
            console.log(bootupData)
            return bootupData
        }
    }
]

export default routes
