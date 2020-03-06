const initialState = {
    isLoading: false,
    advice: null,
    error: ''

}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            return {
                ...state,
                advice: null,
                isLoading: true
            }
        case 'LOADED':
            return {
                ...state,
                isLoading: false,
                advice: action.payload
            }
        default:
            return state
    }
}