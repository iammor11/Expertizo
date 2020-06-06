import { NEW_QUESTION } from './ActionType'

export const newQuestion = no => ({
    type: NEW_QUESTION,
    payload: { no: no + 1 }
    });