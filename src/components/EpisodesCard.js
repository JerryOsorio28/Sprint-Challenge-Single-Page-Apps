import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default function EpisodesCard (props) {

  return (
        <div className = 'episodes-card'>     
          <Card>
            <Card.Content>
            <Card.Header>Episode: {props.episode.name}</Card.Header>
            <Card.Meta>
                <span className='date'>{props.episode.episode}</span>
            </Card.Meta>
            <Card.Description>
              <div>
                {props.episode.created}
              </div>
              <div>
                {props.episode.air_date}
              </div>
                
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href ="">
                Click to Watch
              </a>
            </Card.Content>
          </Card>
        </div>
  )
}
