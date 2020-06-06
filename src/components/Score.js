import React from 'react'

const Score =  props => {
    const { percent } = props
    return (
        <div>
            <div>
                <label>Score: {percent}%</label>
            </div>
        <progress value={percent===null ? 0 : percent} max="100"></progress>
        </div>
    )}
export default Score