
const initialState = {
    isFetching: false,
    catList: [],
    error:  null
}
export const catReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_CAT_BEGIN":
            return {
                ...state,
                isFetching: true,
                error: null
            }
            case "ADD_CAT_SUCCESS":
                return {
                    ...state,
                    isFetching: false,
                    catList: action.payload
                }
            case "ADD_CAT_FAILURE":
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
        default:
            return state
    }
}
