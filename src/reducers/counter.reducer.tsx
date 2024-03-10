export type InitialStateType = {
    maxValue: number
    minValue: number
    counterValue: number
}
export const initState = {
    maxValue: 5,
    minValue: 0,
    counterValue: 0
}

export const counterReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.payload.newValue}
        case 'SET-MIN-VALUE':
            return {...state, minValue: action.payload.newValue, counterValue: action.payload.newValue}
        case 'SET-COUNTER-VALUE':
            return {...state, counterValue: action.payload.newValue}
        default:
            return state
    }
}

type ActionType = SetMaxValueType | SetMinValueType | SetCounterValueType

type SetMaxValueType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (newValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {newValue}
    } as const
}

type SetMinValueType = ReturnType<typeof setMinValueAC>
export const setMinValueAC = (newValue: number) => {
    return {
        type: 'SET-MIN-VALUE',
        payload: {newValue}
    } as const
}

type SetCounterValueType = ReturnType<typeof setCounterValueAC>
export const setCounterValueAC = (newValue: number) => {
    return {
        type: 'SET-COUNTER-VALUE',
        payload: {newValue}
    } as const
}