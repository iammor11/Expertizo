import React from 'react'

const QuestionNo = props => {
    const {total, no} = props
    
    return(
    <h3>{no>0 ? 'Question ' + no + ' of ' + total : 'Please enter to start test'}</h3>
    )
} 
export default QuestionNo