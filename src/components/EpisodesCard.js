import React from 'react'

export default function EpisodesCard (props) {
  // console.log(props)
  return (
        <div className = 'episodes-card'>     
          <h1>Episodes List:</h1>
            <p>
              {props.episode}
            </p>
        </div>
  )
}
