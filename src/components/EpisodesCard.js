import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default function EpisodesCard (props) {

  return (
        <div className = 'episodes-card'>     
          <Card>
            <Card.Content>
              <Card.Content extra>
                <Card.Header style ={{paddingBottom: '10px', textDecoration: 'underline'}}>
                  <h4>
                    Episode: {props.episode.name}
                  </h4>
                </Card.Header>
              </Card.Content>
            <Card.Meta>
                <span className='date'>{props.episode.episode}</span>
            </Card.Meta>
            <Card.Description>
              <div style={{fontWeight: 400}}>
                Date created: {props.episode.created}
              </div>
              <div>
                Air Date: {props.episode.air_date}
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
