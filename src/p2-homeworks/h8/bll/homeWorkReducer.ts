import {UserType} from "../HW8";

type ActionsType = ReturnType<typeof SortUpUsersAC> | ReturnType<typeof SortDownUsersAC> | ReturnType<typeof CheckAdultUsersAC>

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT_UP': {
            return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
        }
        case 'SORT_DOWN': {
            return [...state.sort((a, b) => a.name < b.name ? 1 : -1)]
        }
        case 'CHECK_ADULT': {
            return [...state.filter(el => el.age >= 18)]
        }
        default:
            return state
    }
}

export const SortUpUsersAC = () => {
    return {
        type: "SORT_UP" as const
    }
}
export const SortDownUsersAC = () => {
    return {
        type: "SORT_DOWN" as const
    }
}
export const CheckAdultUsersAC = () => {
    return {
        type: "CHECK_ADULT" as const
    }
}