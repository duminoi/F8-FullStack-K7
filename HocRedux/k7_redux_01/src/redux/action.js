const ADD_SUBJECT = 'subject/add_subject'
const SEARCH_BY_NAME = 'subject/search_by_name'

const addNewSubject = (payload) => {
    return {
        type: ADD_SUBJECT, 
        payload
    }
}

const onUpdateSearchInput = (payload) => {
    return {
        type: SEARCH_BY_NAME,
        payload
    }
}

const onUpdatePriority = (payload) => {
    return {
        type: 'search/updatePriority',
        payload
    }
}

export {
    onUpdateSearchInput, 
    addNewSubject, 
    ADD_SUBJECT, 
    SEARCH_BY_NAME,
    onUpdatePriority
}