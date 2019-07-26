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
                Location: {props.character.location.name}
                Origin: {props.character.origin.name}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                Episodes: {props.character.episode.length}
        </Card.Content>
    </Card>
  )
}

{/* <div className = 'character-card'>     
          <img src ={props.character.image} />  
          <h1>Name: {props.character.name}</h1>
            <p>
                {props.character.species}{props.character.status}
            </p>
            <p>
                Location: {props.character.location.name}
            </p>
            <p>
                Origin: {props.character.origin.name}
            </p>
            <p>
                Episodes: {props.character.episode.length}
            </p>
        </div>  */}