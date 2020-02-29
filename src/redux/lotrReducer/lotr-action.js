


export const lotrActionBegin = () => ({
    type: "ADD_LOTR_BEGIN",
})

export const lotrActionSuccess = lotr => ({
        type: "ADD_LOTR_SUCCESS",
        payload: lotr
})

export const lotrActionFailure = error => ({
        type: "ADD_LOTR_FAILURE",
        payload: error 
})
export function fetchLotr() {
    const token = '5rrbTYxcIZbfV81PjTJV'
    return dispatch => {
        dispatch(lotrActionBegin())
        return fetch('https://the-one-api.herokuapp.com/v1/character',{
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
               }
            }
        )
        .then(res => res.json())
        .then(lotr => {
            dispatch(lotrActionSuccess(lotr.docs))
            return lotr
       })
       .catch(error => dispatch(lotrActionFailure(error)))
    }
}

