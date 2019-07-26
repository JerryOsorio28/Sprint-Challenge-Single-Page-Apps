import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodesCard from './EpisodesCard';

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect

  let [episodesList, setEpisodesList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/episode/')
      .then(object =>{
        episodesList = object.data.results
        // console.log(episodesList)
        setEpisodesList(episodesList);
      })
      .catch(object =>{
        console.log('Error! Try again')
      })
    

  }, [])

  return (
    <section className='location-list grid-view'>
      {episodesList.map(episode => <EpisodesCard episode={episode}/>)}
    </section>
  )
};
