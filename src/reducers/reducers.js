import { actionType } from "./actions";

const globalState = [
    { id: 1, nota: "nota de prueba" },
    { id: 2, nota: "nota de prueba2" }
]

const commentReducer = (state = globalState, action) => {
    // console.log(...state);
    switch (action.type) {
        case actionType.READ_COMMENT:
            return state

        case actionType.CREATE_COMMENT:
            return [...state, action.payload
            ]

        case actionType.EDIT_COMMENT:
            // TAMBIÉN FUNCIONA ASI:
            // let nuevosDatos = state.find(i => i.id === action.payload.id)
            // nuevosDatos.nota = action.payload.nota
            state.find(i => i.id === action.payload.id).nota = action.payload.nota
            return [...state]

        default:
            return state
    }
}

export default commentReducer;