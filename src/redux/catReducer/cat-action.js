


export const catActionBegin = () => ({
    type: "ADD_CAT_BEGIN",
})

export const catActionSuccess = cat => ({
        type: "ADD_CAT_SUCCESS",
        payload: cat
})

export const catActionFailure = error => ({
        type: "ADD_CAT_FAILURE",
        payload: error 
})
export function fetchCats() {
    return dispatch => {
        dispatch(catActionBegin())
        return fetch('https://api.thecatapi.com/v1/breeds')
        .then(res => res.json())
        .then(cat => {
            dispatch(catActionSuccess(cat))
            return cat
       })
       .catch(error => dispatch(catActionFailure(error)))
    }
}

