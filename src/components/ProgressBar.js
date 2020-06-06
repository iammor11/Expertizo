import React from 'react'

const ProgressBar = props => {
    return(
    <progress value={props.no} max="20"></progress>
    )
}
export default ProgressBar