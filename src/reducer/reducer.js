const nameInitialState = {}
export const medicineReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case "FETCH_MEDICINE":
            return Object.assign({}, action)
        case "ADD_MEDICINE":
            return {
                ...state,
                medicineList: [...state.check, action.payload]
            }
        case "HANDLE_INPUT_CHANGE":
            return {
                ...state, newMedicine: {
                    ...state.newMedicine, ...action.payload
                }
            }
        default:
            return state
    }
}