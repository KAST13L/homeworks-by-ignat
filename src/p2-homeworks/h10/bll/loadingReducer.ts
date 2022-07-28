const initState = {
    isLoading: false
}
type ActionsType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: ActionsType): {isLoading: boolean} => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type:'LOADING' as const, isLoading}) // fix any