import React from 'react'
import { Card, Icon } from 'semantic-ui-react'


export default function LocationCard (props) {
  // console.log(props)
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.location.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.location.type}{props.location.dimension}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
          <Icon name='user' />
          {props.location.residents.length} Residents
      </Card.Content>
    </Card> 
  )
}

{/* <div className = 'location-card'>     
          <h1>{props.location.name}</h1>
            <p>
              {props.location.type}{props.location.dimension}
            </p>
            <p>
              {props.location.residents.length} Residents
            </p>
        </div> */}
