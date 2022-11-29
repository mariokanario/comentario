export const actionType = {
    CREATE_COMMENT: "CREATE_COMMENT",
    READ_COMMENT: "READ_COMMENT",
    EDIT_COMMENT: "EDIT_COMMENT",
}

export const create_comment = (notaEscrita) => {
    return {
        type:actionType.CREATE_COMMENT,
        payload: notaEscrita
    }
}


export const read_comment = () => {
    return {
        type: actionType.READ_COMMENT
    }
}

export const edit_comment = (notaEditada) => {
    return {
        type:actionType.EDIT_COMMENT,
        payload: notaEditada
    }
}
