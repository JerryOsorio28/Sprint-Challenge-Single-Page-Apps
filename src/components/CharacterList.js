import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList({ character }) {
  // TODO: Add useState to track data from useEffect
  let [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
      .then(object =>{
        characterList = object.data.results
        // console.log(object.data.results)
        setCharacterList(characterList);
      })
      .catch(object =>{
        console.log('Error! Try again')
      })
    

  }, [])

  return (
    <section className='character-list grid-view'>
      {characterList.map(character => <CharacterCard character={character}/>)}
    </section>
  )
};
