import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard (props) {
  // console.log(props)
  return (
    <Card>
        <Image src={props.character.image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>Name: {props.character.name}</Card.Header>
            <Card.Meta>
                <span className='date'>{props.character.species}: {props.character.status}</span>
            </Card.Meta>
            <Card.Description>
              <div>
                Location: {props.character.location.name}
              </div>
              <div>
                Origin: {props.character.origin.name}
              </div>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                Episodes: {props.character.episode.length}
        </Card.Content>
    </Card>
  )
}