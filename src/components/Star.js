import React from 'react'

const Star = ({difficulty}) => {
    const level = {
        easy: 1, medium: 2, hard: 3,
    }

    const allStars = [] 

     for (let i = 0; i < 3; i++) {
        if(i < level[difficulty] )
            allStars.push(<i key={i} className="fa fa-star" />)       
        else 
            allStars.push(<i key={i} style={{color: "white"}} className="fa fa-star" />)
    }
    return(
    <>{difficulty && allStars}</> 
    )
}
export default Star;