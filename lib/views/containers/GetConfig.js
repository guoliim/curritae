import { connect } from 'react-redux'
import { fetchConfig } from '../actions'
import ContainerforRedux from '../components/ContainerforRedux'

const mapStateToProps = (state) => {

    return {
        detail: state.fetchedByConfig.config
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getConfigByFetch: (config) => {
            if (JSON.stringify(config) === '{}') {
                dispatch(fetchConfig(config))
            }
        }
    }
}

const GetConfig = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContainerforRedux)

export default GetConfig