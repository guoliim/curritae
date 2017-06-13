export const REQUEST = 'REQUEST'

const request = (config) => {

    return {
        type: REQUEST,
        config
    }
}

export const RECEIVE = 'RECEIVE'
const receive = (config, json) => {

    return {
        type: RECEIVE,
        config,
        received: json,
        receivedAt: Date.now(),
    }
}

export const fetchConfig = (config) => {

    return (dispatch) => {
        dispatch(request(config))
        return fetch("./api/config.json", {})
            .then(res => {
                console.log('api')
                if (res.ok) {
                    res.json()
                        .then(data => {
                            dispatch(receive(config, data))
                        })
                } else {
                    console.log("ERROR: ", res.status)
                }
            }, e => {
                console.log("Fetch failed", e)
            })
    }
}