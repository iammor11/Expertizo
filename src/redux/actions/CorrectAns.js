import { CORRECT_ANS } from './ActionType'

export const correctAns = no => ({
    type: CORRECT_ANS,
    payload: { no: no + 1 }
    });