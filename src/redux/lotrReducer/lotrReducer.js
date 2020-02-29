
const initialState = {
    isFetching: false,
    lotrList: [],
    error:  null
}
export const lotrReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_LOTR_BEGIN":
            return {
                ...state,
                isFetching: true,
                error: null
            }
            case "ADD_LOTR_SUCCESS":
                return {
                    ...state,
                    isFetching: false,
                    lotrList: action.payload
                }
            case "ADD_LOTR_FAILURE":
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
        default:
            return state
    }
}
